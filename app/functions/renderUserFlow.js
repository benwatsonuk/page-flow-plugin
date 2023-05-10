const common = require('./common')
const nunjucks = require('nunjucks')
const path = require('path')

module.exports = function(userFlow, pageFlow, previousUserFlow = false, version = false) {
    const theUserFlow = common.pageFlowFromUserFlow(userFlow, pageFlow, previousUserFlow)
    const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(path.join(__dirname, '../templates/')))
    const output = env.render('userFlow.njk', { userFlow: theUserFlow, version: version })
    return output
}
