// --- Created by Jesan Rahman ---
import { login } from './login'
import { registration } from './registration'
import { addShippingAddress } from './addShippingAddress'
import { verifyOrderedProduct } from './verifyOrderedProduct'
import { addCreditCardinfo } from './addCreditCardinfo'
import { adminLogin } from './adminLogin'
import { adminAuthenticate } from './adminAuthenticate'
import { userListing } from './userListingByAdmin'
import { addNewCust } from './addNewCustByAdmin'
import { searchProducts } from './searchProduct'
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

var dashTotalEarning = ":nth-child(2) > .v-card > .v-card-item > .v-card-item__content > .v-card-title > .d-flex > .title__text"
var dashOrdersThisMon = ':nth-child(3) > .v-card > .v-card-item > .v-card-item__content > .v-card-title > .d-flex > .title__text'
var dashPotentialEarning = ':nth-child(4) > .v-card > .v-card-item > .v-card-item__content > .v-card-title > .d-flex > .title__text'
var shipmentLocNavBar = ":nth-child(2) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title"
var shipmentLocHeader = ".text-h5"
var todayChip = '.location__table-filter > :nth-child(4)'
var monthlyChip = '.location__table-filter > :nth-child(5)'
var yearlyChip = '.location__table-filter > :nth-child(6)'
var footerPaginatorCounter = '.mr-10'
var customerNavBar = ':nth-child(3) > :nth-child(1) > a > .v-list-item'
var customerInfoHeader = ".text-h5"
var addNewCustButton = '.table-header__content > .v-btn > .v-btn__content'
var addNewCustHeader = "div[class='d-flex justify-space-between mb-5'] p[class='text-h5']"

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
        cy.get(productCard).eq(i + 3)
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

Cypress.Commands.add('adminLogin', (email, password) => {
    adminLogin(email, password)
})
Cypress.Commands.add('visitAdminLoginPage', () => {
    var url = baseUrl + '/login'
    cy.visit(url)
    cy.get('.text-h5').should('be.visible')
})
Cypress.Commands.add('checkDashboardElements', () => {
    cy.get(dashTotalEarning).should('be.visible')
    cy.get(dashOrdersThisMon).should('be.visible')
    cy.get(dashPotentialEarning).should('be.visible')
})
Cypress.Commands.add('checkShippingInfo', () => {
    cy.get(shipmentLocNavBar).should('be.visible')
    cy.get(shipmentLocNavBar).click()
    cy.get(shipmentLocHeader).should('be.visible')
    cy.get(todayChip).click()
    cy.get(footerPaginatorCounter).should('be.visible')
    cy.get(footerPaginatorCounter).should('include.text', '0')
    cy.get(monthlyChip).click()
    cy.get(footerPaginatorCounter).should('be.visible')
    cy.get(footerPaginatorCounter).should('include.text', '0')
    cy.get(yearlyChip).click()
    cy.get(footerPaginatorCounter).should('be.visible')
    cy.get(footerPaginatorCounter).should('include.text', '5')
})
Cypress.Commands.add('checkUserInfo', () => {
    cy.get(customerNavBar).should('be.visible')
    cy.get(customerNavBar).click()
    cy.get(customerInfoHeader).should('be.visible')
    cy.fixture('data').then((data) => {
        var email = data.admin.email
        var password = data.admin.password
        adminAuthenticate(email, password).then(() => {
            cy.get('@accessToken').then((accessToken) => {
                userListing(accessToken).then(() => {
                    cy.get('@email').then((email) => {
                        cy.get('tbody').should('be.visible')
                        cy.get('tbody').should('include.text', email)
                        cy.wait(2000)
                    })
                })
            })
        })
    })
    cy.get(addNewCustButton).should('be.visible')
    cy.get(addNewCustButton).click()
    cy.get(addNewCustHeader).should('be.visible')
    cy.fixture('data').then((data) => {
        var firstName = data.user01.firstName
        var lastName = data.user01.lastName
        var email = data.user01.email
        var address = data.user01.address
        var phone = data.user01.phoneNumber
        var password = data.user01.password
        addNewCust(firstName, lastName, email, phone, address, password)
        cy.wait(2000)
        cy.get(customerInfoHeader).should('be.visible')
    })
})
Cypress.Commands.add('searchProduct', () => {
    searchProducts()
})