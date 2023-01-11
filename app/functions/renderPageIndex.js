const nunjucks = require('nunjucks')
const fs = require('fs')
const path = require('path')

module.exports = function (pages) {
    const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(path.join(__dirname, '../templates/')))
    const output = env.render('pageFlow.njk', { pages: pages })
    return output
}
