// --- Created by Jesan Rahman ---
const env = Cypress.env("production")
var apiBaseUrl = env['apiBaseUrl']

function userListing(accessToken) {
    return cy.request({
        url: apiBaseUrl + '/admin/user-listing?page=1&limit=5',
        method: 'GET',
        timeout: 0,
        failOnStatusCode: false,
        headers: {
            "Authorization": "Bearer " + accessToken
        }
    }).then((res) => {
        var responseStatus = res.status
        if (responseStatus === 200) {
            var email = res.body.data[2].email
        }
        return cy.wrap(email).as('email').then(() => {
            return cy.wrap(responseStatus).as('responseStatus')
        })
    })
}
module.exports = {
    userListing
}