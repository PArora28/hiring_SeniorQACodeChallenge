/// <reference types="cypress" />

context('Network Requests', () => {
  beforeEach(() => {
    cy.wait(3000)
    //cy.visit('https://magento.softwaretestingboard.com/')
  })

  // Manage HTTP requests in your app

  it('cy.request() - make curreny API request', () => {
    
    let now = new Date();
    let date = now.getDate();
    let month = now.getMonth()+1;
    let year = now.getFullYear();
    let currentDate = year + '' + month.toString().padStart(2, '0') + '' + date.toString().padStart(2, '0');
    
    cy.request('https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date='+currentDate)
      .should((response) => {
        expect(response.status).to.eq(200)
        // the server response ok
        expect(response.body.conversions).to.have.property('USD')
        expect(response.body.conversions).to.have.property('GBP')

      })
  })
})
