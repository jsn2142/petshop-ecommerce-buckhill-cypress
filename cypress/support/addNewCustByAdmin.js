var firstNameField = "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"
var lastNameField = "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)"
var emailfield = "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4)"
var phoneField = "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5)"
var locationField = "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6)"
var passwordfield = "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(7)"
var confirmPasswordfield = "body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(8)"
var confirmButton = "button[class='v-btn v-btn--elevated v-theme--PetGreen bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated w-100 text-white mb-4'] span[class='v-btn__content']"
var closeButton = '.mdi-close'
function addNewCust(firstName, lastName, email, phone, address, password) {
    cy.get(firstNameField).type(firstName)
    cy.get(lastNameField).type(lastName)
    cy.get(emailfield).type(email)
    cy.get(phoneField).type(phone)
    cy.get(locationField).type(address)
    cy.get(passwordfield).type(password)
    cy.get(confirmPasswordfield).type(password)
    cy.get(confirmButton).click()
    // closing the modal due to nonfunctioning feature
    cy.get(closeButton).click()
}
module.exports = {
    addNewCust
}