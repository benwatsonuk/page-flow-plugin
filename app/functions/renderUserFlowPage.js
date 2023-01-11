const common = require('./common')
const nunjucks = require('nunjucks')
const path = require('path')

module.exports = function(userFlow, pageFlow, page, theJourneyDirectory, version, journeyId, stage) {
    const theUserFlow = common.getPageInfoForUserFlow(userFlow, pageFlow, page, theJourneyDirectory, version, journeyId, stage)
    const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(path.join(__dirname, '../templates/')))
    const output = env.render('userFlowIndividualPage.njk', { thePageInfo: theUserFlow })
    return output
}
