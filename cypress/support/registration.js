// --- Created by Jesan Rahman ---
var userLoginButton = ".ml-6 > .v-btn__content"
var signUpPageButton = ".auth-actions > :nth-child(2)"
var signUpButton = ".login__form > .v-btn > .v-btn__content"

function registration(firstName, lastName, email, password, phoneNumber, address) {
    cy.get(userLoginButton).should('be.visible')
    cy.get(userLoginButton).click()
    cy.get(signUpPageButton).should('be.visible')
    cy.get(signUpPageButton).click()
    cy.get('input').eq(1).type(firstName)
    cy.get('input').eq(2).type(lastName)
    cy.get('input').eq(3).type(email)
    cy.get('input').eq(4).type(phoneNumber)
    cy.get('input').eq(5).type(address)
    cy.get('input').eq(6).type(password)
    cy.get('input').eq(7).type(password)
    cy.get(signUpButton).should('be.visible')
    cy.get(signUpButton).click()
}
module.exports = {
    registration
}