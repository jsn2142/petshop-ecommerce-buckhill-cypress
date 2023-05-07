// --- Created by Jesan Rahman ---
import { login } from './login'
import { registration } from './registration'
import { addShippingAddress } from './addShippingAddress'
import { verifyOrderedProduct } from './verifyOrderedProduct'
import { addCreditCardinfo } from './addCreditCardinfo'
const env = Cypress.env('production') // Change the value to switch to other environments, if available.
var baseUrl = env['baseUrl']
// Selectors
var productCard = ".product-card"
var slideshowRightButton = "span[class='v-btn__content'] i[class='mdi-chevron-right mdi v-icon notranslate v-theme--PetGreen v-icon--size-default']"
var slideshowHeader = ".v-window-item--active > .v-responsive > .v-responsive__content > .promotion > .text-h1"
var promotionSection = ".v-window-item--active > .v-responsive > .v-responsive__content"
var productTitle = ".product__title"
var searchDropDownOption = ".v-list-item"
var itemPlusButton = ".mdi-plus.mdi.v-icon.notranslate.v-theme--PetGreen.v-icon--size-default"
var addToCartButton = "button[class='v-btn v-btn--elevated v-theme--PetGreen bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated text-white'] span[class='v-btn__content']"
var headerCartButton = ":nth-child(3) > :nth-child(1) > .v-btn__content"
var placeOrderButton = ".action-btns > .v-btn > .v-btn__content"
var shippingAdrEditButton = "div[class='mt-8'] span[class='v-btn__content']"
var proceedToCheckOut = ".v-btn--elevated"
var psNextButton = "button[class='v-btn v-btn--flat v-theme--PetGreen v-btn--density-default v-btn--size-default v-btn--variant-elevated primary500 text-white ml-5'] span[class='v-btn__content']"

Cypress.Commands.add('visitHomePage', () => {
    cy.visit(baseUrl)
})
Cypress.Commands.add('userLogin', (email, password) => {
    cy.visit(baseUrl)
    login(email, password)
})
Cypress.Commands.add('userSignUp', (firstName, lastName, email, password, phoneNumber, address) => {
    cy.visit(baseUrl)
    registration(firstName, lastName, email, password, phoneNumber, address)
})
Cypress.Commands.add('searchAProduct', (prodTitle) => {
    cy.get(productCard).eq(0).should('be.visible')
    cy.get('input').eq(0)
        .type(prodTitle)
        .type('{enter}')
    cy.get(searchDropDownOption).click()
    cy.get(productTitle).should('be.visible')
    cy.get(productTitle).should('include.text', prodTitle)
})
Cypress.Commands.add('checkPromotions', () => {
    for (var i = 0; i < 3; i++) {
        cy.get('input').eq(0).scrollIntoView()
        cy.get(promotionSection).trigger('mouseover')
        cy.get(promotionSection).should('be.visible')
        cy.get(slideshowHeader)
            .scrollIntoView()
            .should('be.visible')
        cy.get(slideshowRightButton).click()
        cy.wait(5000)
    }
})
Cypress.Commands.add('browseProducts', () => {
    for (var i = 0; i < 3; i++) {
        cy.get(productCard).eq(i+3)
            .should('be.visible')
            .scrollIntoView()
        cy.wait(3000)
    }
})
Cypress.Commands.add('addItemToCart', () => {
    cy.get(itemPlusButton).click()
    cy.get('input').eq(1).should('have.value', '2')
    cy.get(addToCartButton).should('be.visible')
    cy.get(addToCartButton).click()
    cy.get(headerCartButton).should('be.visible')
    cy.get(headerCartButton).click()
    cy.get('input').eq(0).should('have.value', '2')
    cy.get(proceedToCheckOut).should('be.visible')
    cy.get(proceedToCheckOut).click()
})
Cypress.Commands.add('addShippingAddress', (firstName, lastName, address, city, state, postal, country) => {
    addShippingAddress(firstName, lastName, address, city, state, postal, country)
    addCreditCardinfo()
    cy.get(psNextButton).should('be.visible')
    cy.get(psNextButton).click()
})
Cypress.Commands.add('editShippingAddress', (firstName, lastName, address, city, state, postal, country) => {
    cy.get(shippingAdrEditButton).click()
    addShippingAddress(firstName, lastName, address, city, state, postal, country)
    cy.get(psNextButton).should('be.visible')
    cy.get(psNextButton).click()
})
Cypress.Commands.add('verifyAndCheckOut', (prodName, address, city, state, postal, country) => {
    verifyOrderedProduct(prodName, address, city, state, postal, country)
    cy.get(placeOrderButton).click()    
})
