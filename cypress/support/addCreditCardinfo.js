// --- Created by Jesan Rahman ---
var creditCard = ":nth-child(1) > .v-card"
var creditCardNum = ".payment > .v-window > .v-window__container > .v-window-item--active > .v-row > .v-col-12"
var expDate = ".payment > .v-window > .v-window__container > .v-window-item--active > .v-row > :nth-child(2)"
var cvv = ".payment > .v-window > .v-window__container > .v-window-item--active > .v-row > :nth-child(3)"

function addCreditCardinfo() {
    cy.get(creditCard).click()
    cy.get(creditCardNum).type("4000000000000001")
    cy.get(expDate).type('12/28')
    cy.get(cvv).type('111')
}
module.exports = {
    addCreditCardinfo
}