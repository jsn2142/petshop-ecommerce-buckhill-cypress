// --- Created by Jesan Rahman ---
const env = Cypress.env("production")
var apiBaseUrl = env['apiBaseUrl']

function listAllProducts() {
    return cy.request({
        url: apiBaseUrl + '/products?page=1&limit=10',
        method: 'GET',
        timeout: 0,
        failOnStatusCode: false,
        headers: {
            'accept': '*/*',
            'X-CSRF-TOKEN': '',
            "content-type": "application/json",
            "authority": "pet-shop.buckhill.com.hr",
            "origin": "https://pet-shop.buckhill.com.hr"
        }
    }).then((res) => {
        var productTitle = res.body.data[0].title
        return cy.wrap(productTitle).as('productTitle')
    })
}
module.exports = {
    listAllProducts
}