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
      'https://id5-sync.com/gm/v3',
      {
        "requests":
        [
          {
          "requestId":"0c2235b0-9c70-4ea1-a92a-1320ac079389","requestCount":1,"role":"leader","cacheId":"3273132596434857","refresh":true,"source":"id5-prebid-ext-module","sourceVersion":"1.0.77","partner":1677,"v":"unknown","o":"pbjs","tml":"https://magento.softwaretestingboard.com/","ref":"https://github.com/Circunomics/hiring_SeniorQACodeChallenge?tab=readme-ov-file","cu":null,"u":"https://magento.softwaretestingboard.com/","top":1,"localStorage":1,"nbPage":0,"id5cdn":true,"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36","gdpr":0,"ua_hints":{"architecture":"arm","brands":[{"brand":"Google Chrome","version":"133"},{"brand":"Chromium","version":"133"}],"fullVersionList":[{"brand":"Google Chrome","version":"133.0.6943.55"},{"brand":"Chromium","version":"133.0.6943.55"}],"mobile":false,"model":"","platform":"macOS","platformVersion":"13.5.0"},"us_privacy":"1---","true_link":{"booted":false},"provided_options":{},"extensions":{"lbCDN":"%%LB_CDN%%","lb":"EKOWkD9cbgEUKZzRNuLF/A==","chunks":1,"ttl":28800,"devChunks":["0","8","8","E","6","5","F","3"],"devChunksVersion":"4","groupChunks":["3","4","B","3","C","3","0","4"],"groupChunksVersion":"4","bounce":{"setCookie":false}}}]}
      ).should((response) => {
        expect(response.status).to.eq(200)
        //expect(response.body.fetchCall).to.have.property('url')
        //expect(response.body.fetchCall).to.have.property('overrides')
        //expect(response.body.fetchCall.overrides).to.have.property('pbExtensions')
        //expect(response.body.fetchCall.overrides.pbExtensions).to.have.property('bounce')
        //expect(response.body.extensionsCall).to.have.property('url')
        //expect(response.body.extensionsCall).to.have.property('method')
        //expect(response).to.have.property('Content-Type').to.equal('application/json;charset=UTF-8')

      })
  })
})
