const common = require('./common')
const nunjucks = require('nunjucks')
const path = require('path')

module.exports = function(prefix, userFlow, pageFlow, page, theJourneyDirectory, version, journeyId, stage, query) {
    const theUserFlow = common.getPageInfoForUserFlow(prefix, pageFlow, userFlow, page, theJourneyDirectory, version, journeyId, stage, query)
    const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(path.join(__dirname, '../templates/')))
    const output = env.render('userFlowIndividualPage.njk', { thePageInfo: theUserFlow })
    return output
}
