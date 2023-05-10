const renderPageIndex = require('./functions/renderPageIndex')
const renderUserFlow = require('./functions/renderUserFlow')
const renderUserFlowPage = require('./functions/renderUserFlowPage')
const common = require('./functions/common')

module.exports.renderPageIndex = renderPageIndex
module.exports.getUserFlow = common.pageFlowFromUserFlow
module.exports.getUserFlowPage = common.getPageInfoForUserFlow
module.exports.renderUserFlow = renderUserFlow
module.exports.renderUserFlowPage = renderUserFlowPage
