// --- Created by Jesan Rahman ---
const { listAllProducts } = require("./listAllProducts")
var productsNavBar = ":nth-child(4) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title"
var productPageHeader = ".text-h5"
var newProductButton = "button[class='v-btn v-btn--elevated v-theme--PetGreen bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated text-white elevation-0']"
var filterArrowButton = ".mdi-chevron-down"
var searchResetButton = '[data-testid="table-filter-reset"] > .v-btn__content'
var footerPaginatorCounter = ".mr-10"
var productTable = '.products > :nth-child(2) > :nth-child(1) > :nth-child(1)'
function searchProducts() {
    cy.wait(2000)
    cy.get(productsNavBar).should('be.visible')
    cy.get(productsNavBar).click()
    cy.get(productPageHeader).should('contains.text', 'Products')
    cy.get('[data-testid="title"]').should('be.visible')
    cy.get(filterArrowButton).click()
    listAllProducts().then(() => {
        cy.get('@productTitle').then((productTitle) => {
            cy.wait(1000)
            cy.get('input').eq(0).type(productTitle)
            cy.wait(1000)
            cy.get('input').eq(0).type('{enter}')
            cy.wait(2000)
            cy.get(productTable).should('include.text', productTitle)
        })
    })
    cy.get(searchResetButton).click()
    cy.wait(2000)
    cy.get(filterArrowButton).click()
    cy.wait(2000)
    cy.get(footerPaginatorCounter).should('include.text', '10')
}
module.exports = {
    searchProducts
}