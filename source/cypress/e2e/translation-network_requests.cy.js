/// <reference types="cypress" />

context('Network Requests', () => {
  beforeEach(() => {
    cy.wait(3000)
    //cy.visit('https://magento.softwaretestingboard.com/')
  })

  // Manage HTTP requests in your app

  it('cy.request() - make translation API request', () => {
    cy.request('https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/js-translation.json')
      .should((response) => {
        expect(response.status).to.eq(200)
        // the server sometimes gets an extra comment posted from another machine
        // which gets returned as 1 extra object
        //console.log('this response'+ JSON.parse(response) )
        expect(response.headers).to.have.property('content-type').to.equal('application/json')
        //expect(response).to.have.property('Content-Type').to.equal('application/json')

      })
  })
})
