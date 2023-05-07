// --- Created by Jesan Rahman ---
var userLoginButton = ".ml-6 > .v-btn__content"
var adminLoginPageHeader = ".text-h5.text-center.mt-3.mb-5"
var loginButton = ".v-btn__content"
var AdminHomePageHeader = ".text-h5"

function adminLogin(email, password) {
    cy.get(adminLoginPageHeader).should('be.visible')
    cy.get('input').eq(0).type(email)
    cy.get('input').eq(1).type(password, {log: false})
    cy.get(loginButton).should('be.visible')
    cy.get(loginButton).click()
    cy.get(AdminHomePageHeader).should('be.visible')
}
module.exports = {
    adminLogin
}