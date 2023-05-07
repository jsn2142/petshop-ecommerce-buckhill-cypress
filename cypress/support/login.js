// --- Created by Jesan Rahman ---
var userLoginButton = ".ml-6 > .v-btn__content"
var loginButton = ".login__form > .v-btn"
var homepageHeader = "div[class='v-window-item v-window-item--active v-carousel-item'] h1[class='text-h1']"

function login(email, password) {
    cy.get(userLoginButton).should('be.visible')
    cy.get(userLoginButton).click()
    cy.get('input').eq(1).type(email)
    cy.get('input').eq(2).type(password, {log: false})
    cy.get(loginButton).should('be.visible')
    cy.get(loginButton).click()
    cy.get(homepageHeader).should('be.visible')
}
module.exports = {
    login
}