// --- Created by Jesan Rahman ---
var addressText = '.mt-8 > .pl-4 > :nth-child(2) > p'
var cityAndStateText = '.mt-8 > .pl-4 > :nth-child(4) > p'
var postalAndCountryText = '.mt-8 > .pl-4 > :nth-child(5) > p'
var prodNameText = '.text-decoration-underline'

function verifyOrderedProduct(prodName, address, city, state, postal, country) {
    cy.get(addressText).should('include.text', address)
    cy.get(cityAndStateText).should('include.text', city)
    cy.get(cityAndStateText).should('include.text', state)
    cy.get(postalAndCountryText).should('include.text', postal)
    cy.get(postalAndCountryText).should('include.text', country)
    cy.get(prodNameText).should('include.text', prodName)
}
module.exports = {
    verifyOrderedProduct
}