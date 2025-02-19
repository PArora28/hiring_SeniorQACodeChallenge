/// <reference types="cypress" />

context('Network Requests', () => {
  beforeEach(() => {
    cy.wait(3000)
    //cy.visit('https://magento.softwaretestingboard.com/')
  })

  // Manage HTTP requests in your app

  it('cy.request() - make prebid API request', () => {
    cy.request(
      'POST', 
      'https://id5-sync.com/api/config/prebid',
      {
        "enabledStorageTypes":["html5"],
        "name":"id5Id",
        "params":{
          "partner":1677,
          "externalModuleUrl":"https://cdn.id5-sync.com/api/1.0/id5PrebidModule.js"
          },
          "storage":{
            "type":"html5",
            "name":"id5id",
            "expires":90,
            "refreshInSeconds":7200
          },
          "bounce":true
        }
      ).should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.fetchCall).to.have.property('url')
        expect(response.body.fetchCall).to.have.property('overrides')
        expect(response.body.fetchCall.overrides).to.have.property('pbExtensions')
        expect(response.body.fetchCall.overrides.pbExtensions).to.have.property('bounce')
        expect(response.body.extensionsCall).to.have.property('url')
        expect(response.body.extensionsCall).to.have.property('method')
        //expect(response).to.have.property('Content-Type').to.equal('application/json;charset=UTF-8')

      })
  })
})
