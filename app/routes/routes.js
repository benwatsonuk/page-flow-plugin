const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const pageFlowRoute = (routes) => {
  console.log('Page Flow...')
  return (
     router.get(routes, (req, res) => {

     })
 )
}

const pageListRoute = (routes) => {
  console.log('Directory...')
  return (
      router.get(routes, (req, res) => {

      })
  )
}

module.exports = router
module.pageFlowRoute = pageFlowRoute
module.pageListRoute = pageListRoute