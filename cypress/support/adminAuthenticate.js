// --- Created by Jesan Rahman ---
const env = Cypress.env("production")
var apiBaseUrl = env['apiBaseUrl']

function adminAuthenticate(email, password) {
    return cy.request({
        url: apiBaseUrl + '/admin/login',
        method: 'POST',
        timeout: 0,
        // to handle fail cases as well
        failOnStatusCode: false,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'accept': '*/*',
            'X-CSRF-TOKEN': ''
        },
        form: true,
        body: {
            "email": email,
            "password": password
        }
    }).then((res) => {
        var responseStatus = res.status
        if (responseStatus === 200) {
            var accessToken = res.body.data.token
        }
        return cy.wrap(accessToken, { log: false }).as('accessToken').then(() => {
            return cy.wrap(responseStatus).as('responseStatus')
        })
    })
}
module.exports = {
    adminAuthenticate
}