// --- Created by Jesan Rahman ---
var checkBox = ".v-selection-control > .v-label"
var checkBox02 = ".shipping-details > .v-row > :nth-child(9) > .v-input > .v-input__control > .v-selection-control > .v-label"
var nextButton = ".action-btns > .v-btn > .v-btn__content"
var checkoutHeaderText = ".primary500--text"

function addShippingAddress(firstName, lastName, address, city, state, postal, country) {
    cy.get(checkoutHeaderText).should('include.text', 'Checkout')
    cy.get('input').eq(0)
                   .clear().type(firstName)
    cy.get('input').eq(1)
                   .clear().type(lastName)
    cy.get('input').eq(2)
                   .clear().type(address)
    cy.get('input').eq(3)
                   .clear().type(address)
    cy.get('input').eq(4)
                   .clear().type(city)
    cy.get('input').eq(5)
                   .clear().type(state)
    cy.get('input').eq(6)
                   .clear().type(postal)
    cy.get('input').eq(7)
                   .clear().type(country)    
    cy.get(checkBox).then(($checkbox) => {
        if ($checkbox.is(':checked')) {
            cy.get(checkBox).click()
        } else {
            cy.get(checkBox02).click()
        }
      });
    cy.get(nextButton).should('be.visible')
    cy.get(nextButton).click()
}
module.exports = {
    addShippingAddress
}