// let pageFlow = require('./pages.json')
// const userNeeds = require('./user-needs.json')

const common = {}

/**
 * Utilities
 */
function compareStrings (a, b) {
    // Assuming you want case-insensitive comparison
    a = a.friendlyName.toLowerCase()
    b = b.friendlyName.toLowerCase()
    return ((a === b) ? 0 : ((a > b) ? 1 : -1))
    // return (a < b) ? -1 : (a > b) ? 1 : 0
}

common.sortArray = function (a, b) {
    return compareStrings(a, b)
}

common.findKey = function (key, theParameter, theArray) {
    for (var theKey in theArray) {
        if (theArray[theKey][theParameter] === key) return theArray[theKey]
    }
    return false
}

common.findIndex = function (key, theParameter, theArray) {
    for (var theKey in theArray) {
        if (theArray[theKey][theParameter] === key) return theKey
    }
    return false
}

common.findIndexUsing2Keys = function (key, theParameter, key2, theParameter2, theArray) {
    // for (let i = 0; i < theArray.length; i++) {
    for (let i in theArray) {
        let el = theArray[i]
        if (el[theParameter] === key && el[theParameter2] === key2) {
            return i
        }
    }
    return -1
}

/**
 * Page Flow
 */

common.getPageBefore = function (pageFlow, index, theArray, thisStageIndex, version) {
    index = parseInt(index)
    thisStageIndex = parseInt(thisStageIndex)
    if (theArray[(index - 1)]) {
        return theArray[(index - 1)].location
    } else if (thisStageIndex > 0) {
        // return common.getLastPageInStage(pageFlow, thisStageIndex - 1)
        // get the previous stage's location
        let thePreviousStage = pageFlow['stages'][(thisStageIndex - 1)]
        // get the last page in the selected stage
        let theLastPageOfPreviousStage = null
        if (thePreviousStage.versions[0]['pages']) {
            theLastPageOfPreviousStage = thePreviousStage.versions[0]['pages'].slice(-1)[0]
        }
        return '/' + version + '/page-flow/' + thePreviousStage.location + '/' + theLastPageOfPreviousStage.location
    } else {
        return false
    }
}

common.getPageAfter = function (pageFlow, index, theArray, thisStageIndex, version) {
    index = parseInt(index)
    thisStageIndex = parseInt(thisStageIndex)
    if (theArray[(index + 1)]) {
        return theArray[(index + 1)].location
    } else if (pageFlow['stages'][(thisStageIndex + 1)]) {
        let theNextStage = pageFlow['stages'][(thisStageIndex + 1)]
        return '/' + version + '/page-flow/' + theNextStage.location + '/' + theNextStage['versions'][0]['pages'][0].location
    } else {
        return false
    }
}

common.getPageBeforeUserFlow = function (theUserFlow, userIndex, currentIndex, pageFlow) {
    currentIndex = parseInt(currentIndex)
    let theArray = theUserFlow['journeys'][userIndex]['flow']
    if (theArray[(currentIndex - 1)]) {
        let stageVersion = theArray[(currentIndex - 1)]['version']
        let thePageInfo = common.getPageInfoWithStageId(theArray[(currentIndex - 1)]['pageId'], theArray[(currentIndex - 1)]['stage'], stageVersion, pageFlow)
        let theLink = thePageInfo.stageInfo['location'] + '/' + thePageInfo.location
        if (thePageInfo['subDir']) {
            theLink = thePageInfo.stageInfo['location'] + '/' + thePageInfo['subDir'] + '/' + thePageInfo.location
        }
        return {
            link: theLink,
            pageInfo: thePageInfo
        }
    } else {
        return false
    }
}

common.getPageAfterUserFlow = function (theUserFlow, userIndex, currentIndex, pageFlow) {
    currentIndex = parseInt(currentIndex)
    let theArray = theUserFlow['journeys'][userIndex]['flow']
    if (theArray[(currentIndex + 1)]) {
        let stageVersion = theArray[(currentIndex + 1)]['version']
        let thePageInfo = common.getPageInfoWithStageId(theArray[(currentIndex + 1)]['pageId'], theArray[(currentIndex + 1)]['stage'], stageVersion, pageFlow)
        let theLink = thePageInfo.stageInfo['location'] + '/' + thePageInfo.location
        if (thePageInfo['subDir']) {
            theLink = thePageInfo.stageInfo['location'] + '/' + thePageInfo['subDir'] + '/' + thePageInfo.location
        }
        return {
            link: theLink,
            pageInfo: thePageInfo
        }
    } else {
        return false
    }
}

common.getPageHistory = function (thisPage, thisStage) {
    let versions = []
    for (let theVersion in thisStage.versions) {
        for (let thePage in thisStage.versions[theVersion]['pages']) {
            if (thisStage.versions[theVersion]['pages'][thePage]['location'] === thisPage.location) {
                versions.push({
                    'version': thisStage.versions[theVersion]['version'],
                    'description': thisStage.versions[theVersion]['pages'][thePage]['description'],
                    'sprint': thisStage.versions[theVersion]['sprint'],
                    'location': '/' + thisStage.versions[theVersion]['versionDirectory'] + '/' + thisStage.versions[theVersion]['location'] + '/' + thisStage.versions[theVersion]['pages'][thePage]['location']
                })
            }
        }
    }
    return versions
}

common.getPageDesignAlternatives = function (thePage) {
    let altDesigns = []
    for (let altDesign in thePage.altDesigns) {
        let theAltDesign = {
            'location': thePage.location + '?' + thePage.altDesigns[altDesign].queryString,
            'description': thePage.altDesigns[altDesign].description
        }
        altDesigns.push(theAltDesign)
    }
    return altDesigns
}

common.hasPageChangedSinceLastVersion = function (theCurrentFlow, thePreviousFlow, theStageId, thePageInfo) {
    if (thePreviousFlow === false) {
        return false
    }
    const pageObj1 = theCurrentFlow[common.findIndexUsing2Keys(theStageId, 'stage', thePageInfo.pageId, 'pageId', theCurrentFlow)]
    const pageObj2 = thePreviousFlow[common.findIndexUsing2Keys(theStageId, 'stage', thePageInfo.pageId, 'pageId', thePreviousFlow)]
    if (pageObj1 && pageObj2 === undefined) {
        return true
    }
    return (pageObj1['version'] === pageObj2['version']) ? false : true
}

common.pageFlowFromUserFlow = function (theUserFlow, thePageFlow, thePreviousUserFlow = false) {
    let userJourneys = [] // main array
    for (let theJourney in theUserFlow['journeys']) {
        // let theUserNeeds = common.getUserNeeds(theUserFlow['journeys'][theJourney]['userType'])
        let stagesInJourney = []
        let stageInJourney = {}
        let pagesInStage = []
        let previousStage = undefined
        if (thePreviousUserFlow !== false) {
            if (typeof thePreviousUserFlow['journeys'][theJourney] === 'undefined') {
                thePreviousUserFlowToUse = false
            } else {
                thePreviousUserFlowToUse = thePreviousUserFlow['journeys'][theJourney]['flow']
            }
        } else {
            thePreviousUserFlowToUse = false
        }
        for (let thePage in theUserFlow['journeys'][theJourney]['flow']) {
            let theStage = theUserFlow['journeys'][theJourney]['flow'][thePage]['stage']
            let thePageWeNeed = theUserFlow['journeys'][theJourney]['flow'][thePage]
            let theStageIndex = common.findIndex(thePageWeNeed['stage'], 'id', thePageFlow['stages'])
            let theStageVersion = common.findIndex(theUserFlow['journeys'][theJourney]['flow'][thePage]['version'], 'version', thePageFlow['stages'][theStageIndex]['versions'])
            let theStagePages = common.getStageInfo(theStage, thePageFlow)['versions'][theStageVersion]['pages']
            if (theStage === previousStage) {
                const pageInfo = common.getPageInfo(thePageWeNeed['pageId'], theStagePages)
                let page = {
                    'id': thePageWeNeed['pageId'],
                    'hasChange': common.hasPageChangedSinceLastVersion(theUserFlow['journeys'][theJourney]['flow'], thePreviousUserFlowToUse, theStage, thePageWeNeed),
                    'pageInfo': pageInfo,
                    'altDesigns': common.getPageDesignAlternatives(pageInfo)
                }
                pagesInStage.push(page)

                stageInJourney = { 'stage': common.getStageInfo(theStage, thePageFlow), 'pages': pagesInStage }
            } else {
                if (previousStage !== undefined) {
                    stagesInJourney.push(stageInJourney)
                }
                pagesInStage = []
                const pageInfo = common.getPageInfo(thePageWeNeed['pageId'], theStagePages)
                let page = {
                    'id': thePageWeNeed['pageId'],
                    'hasChange': common.hasPageChangedSinceLastVersion(theUserFlow['journeys'][theJourney]['flow'], thePreviousUserFlowToUse, theStage, thePageWeNeed),
                    'pageInfo': pageInfo,
                    'altDesigns': common.getPageDesignAlternatives(pageInfo)
                }
                pagesInStage.push(page)
                stageInJourney = { 'stage': common.getStageInfo(theStage, thePageFlow), 'pages': pagesInStage }
            }
            previousStage = theStage
        }
        stagesInJourney.push(stageInJourney)
        userJourneys.push({
            'userType': {
                'name': theUserFlow['journeys'][theJourney]['name'],
                'id': theUserFlow['journeys'][theJourney]['id'],
                'changeLog': theUserFlow['journeys'][theJourney]['changeLog'],
                'description': theUserFlow['journeys'][theJourney]['description']
            },
            // 'needs': theUserNeeds,
            'flow': stagesInJourney
        })
    }
    return userJourneys
}

common.getStageInfo = function (theStage, thePageFlow) {
    let thisStageIndex = common.findIndex(theStage, 'id', thePageFlow.stages)
    let thisStage = thePageFlow['stages'][thisStageIndex]
    return thisStage
}

common.getPageInfo = function (thePage, theStagePages) {
    let thisPageIndex = common.findIndex(thePage, 'id', theStagePages)
    let thisPage = theStagePages[thisPageIndex]
    return thisPage
}

common.getPageInfoWithStageId = function (thePageId, theStageId, stageVersion, pageFlow) {
    if (stageVersion === undefined) {
        stageVersion = 0
    }
    let thisStageIndex = common.findIndex(theStageId, 'id', pageFlow['stages'])
    let stageVersionIndex = common.findIndex(stageVersion, 'version', pageFlow.stages[thisStageIndex]['versions'])
    let thisStage = pageFlow['stages'][thisStageIndex]['versions'][stageVersionIndex]
    let thisStageInfo = {
        'location': thisStage['location'],
        'name': pageFlow['stages'][thisStageIndex]['name']
    }
    let thisStagePages = thisStage['pages']
    let thePageIndex = common.findIndex(thePageId, 'id', thisStagePages)
    let thisPage = thisStage['pages'][thePageIndex]
    thisPage['stageInfo'] = thisStageInfo
    return thisPage
}

common.getIndexInUserFlow = function (id, thePageId, theStageId, userFlow) {
    let journey = common.findIndex(id, 'id', userFlow['journeys'])
    let journeyFlow = userFlow['journeys'][journey]['flow']
    let theIndex = common.findIndexUsing2Keys(thePageId, 'pageId', theStageId, 'stage', journeyFlow)
    return theIndex
}

common.getUserNeeds = function (theUserType) {
    let theUserNeeds = common.findKey(theUserType, 'id', userNeeds)
    let arrayOfNeeds = []
    for (let need in theUserNeeds['needs']) {
        arrayOfNeeds.push(theUserNeeds['needs'][need])
    }
    return arrayOfNeeds
}

common.getUserNeedsForPage = function (theNeeds, allNeeds) {
    let needs = []
    for (let userType in allNeeds) {
        for (let need in allNeeds[userType]['needs']) {
            for (let n1 in theNeeds) {
                if (theNeeds[n1] === allNeeds[userType]['needs'][need]['id']) {
                    needs.push(allNeeds[userType]['needs'][need])
                }
            }
        }
    }
    return needs
}

common.getNavigationForUserFlow = function (userFlow, flowType, id, thisPage, thisStage, thisPageIndex, theStagePages, thisStageIndex, version, pageFlow) {
    let navigation
    if (flowType === 'page-flow') {
        navigation = {
            'prev': common.getPageBefore(pageFlow, thisPageIndex, theStagePages, thisStageIndex, version),
            'next': common.getPageAfter(pageFlow, thisPageIndex, theStagePages, thisStageIndex, version)
        }
    } else {
        let next = common.getPageAfterUserFlow(userFlow, common.findIndex(id, 'id', userFlow.journeys), common.getIndexInUserFlow(id, thisPage['id'], thisStage['id'], userFlow), pageFlow)
        if (next !== false) {
            next['link'] = '/' + version + '/user-flow/' + id + '/' + next.link
        }
        let prev = common.getPageBeforeUserFlow(userFlow, common.findIndex(id, 'id', userFlow.journeys), common.getIndexInUserFlow(id, thisPage['id'], thisStage['id'], userFlow), pageFlow)
        if (prev['link'] !== false) {
            prev['link'] = '/' + version + '/user-flow/' + id + '/' + prev.link
        }
        navigation = {
            'prev': prev,
            'next': next
        }
    }
    return navigation
}

common.handleQueryString = function (query) {
    let theQueryString = ''
    if (Object.keys(query).length) {
        theQueryString = '?'
        let i = 0
        for (let theKey in query) {
            if (i > 0) {
                theQueryString += '&'
            }
            theQueryString += theKey
            theQueryString += '=' + query[theKey]
            i++
        }
    }
    return theQueryString
}

common.getPageInfoForUserFlow = function (pageFlow, userFlow, page, stage, version, journeyId, subStage = false, query = false) {
    const theQueryString = common.handleQueryString(query)
    const flowType = 'user-flow'
    let thePageName = page + theQueryString
    let theStageKey = null
    if (subStage !== false) {
        theStageKey = stage + '/' + subStage
    } else {
        theStageKey = stage
    }
    let thisStageIndex = common.findIndex(theStageKey, 'location', pageFlow.stages)
    if (thisStageIndex === false) {
        let theStageKey = stage + '/' + subStage
        thisStageIndex = common.findIndex(theStageKey, 'location', pageFlow.stages)
    }
    let thisStage = pageFlow.stages[thisStageIndex]
    let theStageId = thisStage.id
    let journeyIndex = common.findIndex(journeyId, 'id', userFlow['journeys'])
    let versionToUse = userFlow['journeys'][journeyIndex]['flow'][common.findIndexUsing2Keys(thePageName, 'location', theStageId, 'stage', userFlow['journeys'][journeyIndex]['flow'])]['version']
    let theStageVersion = common.findIndex(versionToUse, 'version', thisStage.versions)
    let theStagePages = thisStage.versions[theStageVersion]['pages']
    let thisPageIndex = common.findIndex(thePageName, 'location', theStagePages)
    let thisPage = theStagePages[thisPageIndex]

    let navigation = common.getNavigationForUserFlow(userFlow, flowType, journeyId, thisPage, thisStage, thisPageIndex, theStagePages, thisStageIndex, version, pageFlow)
    let theLocation = version + '/' + thisStage.location + '/' + thisPage.location
    if (subStage !== false) {
        let theStageKey = stage + '/' + subStage
        thisStageIndex = common.findIndex(theStageKey, 'location', pageFlow.stages)
        if (thisStageIndex === false) {
            theLocation = version + '/' + thisStage.location + '/' + thisPage['subDir'] + '/' + thisPage.location
        }
    }

    // let theUserNeeds
    // let arrayOfNeeds = thisPage['userNeeds']
    // if (arrayOfNeeds !== undefined) {
    //     theUserNeeds = common.getUserNeedsForPage(arrayOfNeeds, userNeeds)
    // }

    let hasHistory = common.getPageHistory(thisPage, thisStage)

    const dataForPageInfo = {
        journeyId: journeyId,
        pageFlow: pageFlow,
        location: theLocation,
        thisPage: thisPage,
        thisStage: thisStage,
        // theStageUR: theStageUR,
        // userNeeds: theUserNeeds,
        // sprint: sprint,
        navigation: navigation,
        hasHistory: hasHistory,
        version: version
    }

    return dataForPageInfo
}

module.exports = common
