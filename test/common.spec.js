const expect = require('chai').expect

const common = require('../app/functions/common')
const pages = require('./data/pages')
const userFlow = require('./data/user-flows')
const outputs = require('./data/outputs')

describe('Common', () => {
    describe('Utilities', () => {
        describe('findKey', () => {
            it('should return key if found', () => {
                const result = common.findKey(1, 2, [1, 2])
                expect(result).to.be.false
            });
            it('should return false if key not found', () => {
                const result = common.findKey(1, 2, [{1: 1}, {2: 1}])
                expect(result).to.be.an('object')
                expect(result).to.not.be.false
            });
        })
        describe('handleQueryString', () => {
            it('should return empty string if no queryString params', () => {
                const result = common.handleQueryString({})
                expect(result).to.be.string
                expect(result).to.be.empty
            });
            it('should return useful string if queryString has param', () => {
                const result = common.handleQueryString({query: 'hello'}
                )
                expect(result).to.be.string
                expect(result).to.equal('?query=hello')
                expect(result).to.not.be.empty
            });
            it('should return useful string if queryString has multiple params', () => {
                const result = common.handleQueryString({query: 'foo', query2: 'bar'}
                )
                expect(result).to.be.string
                expect(result).to.equal('?query=foo&query2=bar')
                expect(result).to.not.be.empty
            });
        })
    })
    describe('getPageHistory', () => {
        it('should return page history', () => {
            const result = common.getPageHistory(outputs.getPageHistoryTest.pageInfo, outputs.getPageHistoryTest.stageInfo)
            const output = outputs.getPageHistoryTest.output
            expect(result).to.not.be.empty
            expect(result).to.eql(output)
        });
    });
    describe('getPageDesignAlternatives', () => {
        it('should return array of design alternatives', () => {
            const result = common.getPageDesignAlternatives(outputs.getPageDesignAlternativesTest.pageInfo)
            const output = outputs.getPageDesignAlternativesTest.output2
            expect(result).to.not.be.empty
            expect(result).to.eql(output)
        });
    });
    describe('User Flow proper', () => {
        describe('getPageInfoForUserFlow', () => {
            it('should return page info', () => {
                const result = common.getPageInfoForUserFlow(pages, userFlow.userflowv1, 'example2', 'example1', 0, 'example1')
                const output = outputs.getPageInfoForUserFlow
                expect(result).to.not.be.empty
                expect(result).to.eql(output)
            });
        })
        describe('pageFlowFromUserFlow', () => {
            it('should return the flow info if no previous flow supplied', () => {
                const result = common.pageFlowFromUserFlow(userFlow.userflowv1, pages)
                expect(result).to.eql(outputs.pageFlowFromUserFlowTest)
            });
            it('should return the flow info if previous flow supplied', () => {
                const result = common.pageFlowFromUserFlow(userFlow.userflowv2, pages, userFlow.userflowv1)
                expect(result[0]['flow'][1]['pages'][0]['hasChange']).to.be.true
            });
        })
        describe('hasPageChangedSinceLastVersion', () => {
            it('should return true if change is detected', () => {
                const result = common.hasPageChangedSinceLastVersion(outputs.hasPageChangedSinceLastVersionTest.theCurrentFlow, outputs.hasPageChangedSinceLastVersionTest.thePreviousFlow, 'example2', outputs.hasPageChangedSinceLastVersionTest.thePageWeNeed)
                expect(result).to.be.true
            });
            it('should return false if no change is detected', () => {
                const result = common.hasPageChangedSinceLastVersion(outputs.hasPageChangedSinceLastVersionTest.theCurrentFlow, outputs.hasPageChangedSinceLastVersionTest.theCurrentFlow, 'example2', outputs.hasPageChangedSinceLastVersionTest.thePageWeNeed)
                expect(result).to.be.false
            });
            it('should return false if no previous user flow is supplied', () => {
                const result = common.hasPageChangedSinceLastVersion(outputs.hasPageChangedSinceLastVersionTest.theCurrentFlow, false, 'example2', outputs.hasPageChangedSinceLastVersionTest.thePageWeNeed)
                expect(result).to.be.false
            });
        })
    })
});
