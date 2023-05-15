// --- Created by Jesan Rahman ---
var firstNameField = "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"
var lastNameField = "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)"
var emailfield = "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4)"
var phoneField = "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5)"
var locationField = "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6)"
var passwordfield = "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(7)"
var confirmPasswordfield = "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(8)"
var confirmButton = "button[class='v-btn v-btn--elevated v-theme--PetGreen bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated w-100 text-white mb-4'] span[class='v-btn__content']"
var closeButton = '.mdi-close'
function addNewCust(firstName, lastName, phone, address, password) {
    var tempNum = parseInt(Math.random() * 100000)
    var emailAddress = firstName + lastName + tempNum + "@mail.com"
    cy.get(firstNameField).type(firstName)
    cy.get(lastNameField).type(lastName)
    cy.get(emailfield).type(emailAddress)
    cy.get(phoneField).type(phone)
    cy.get(locationField).type(address)
    cy.get(passwordfield).type(password)
    cy.get(confirmPasswordfield).type(password)
    cy.get(confirmButton).click()
    cy.wait(1000)
    cy.get(closeButton).click()
    cy.get('tbody').should('be.visible')
    cy.get('tbody').should('include.text', emailAddress)
}
module.exports = {
    addNewCust
}