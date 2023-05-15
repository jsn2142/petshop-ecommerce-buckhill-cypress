// --- Created by Jesan Rahman ---
import 'cypress-mochawesome-reporter/register'
describe('User Journey: User logs in > Browses promotions and products > Finishes ordering a product', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  beforeEach('Using Admin credential, to fetch user email address and then login as a user', () => {
    cy.fixture('data').then((data) => {
      var adminEmail = data.admin.email
      var adminPassword = data.admin.password
      var userPassword = data.user01.password
      cy.userLogin(adminEmail, adminPassword, userPassword)
    })
  })

  it('Check Promotions in the Homepage', () => {
    cy.checkPromotions()
  })

  it('Browse through the products in the Homepage', () => {
    cy.browseProducts()
  })

  it('Search and select a product > Add shipping and billing address > Edit the shipping address > Confirm the order', () => {
    cy.fixture('data').then((data) => {
      var prodTitle = data.productTitles.product01
      var firstName = data.user01.firstName
      var lastName = data.user01.lastName
      var address = data.user01.address
      var city = data.user01.city
      var state = data.user01.state
      var postal = data.user01.postal
      var country = data.user01.country
      cy.searchAProduct(prodTitle)
      cy.addItemToCart()
      cy.addShippingAddress(firstName, lastName, address, city, state, postal, country)
      cy.editShippingAddress(firstName, lastName, address, city, state, postal, country)
      cy.verifyAndCheckOut(prodTitle, address, city, state, postal, country)
      cy.wait(3000)
      cy.screenshot('Screenshot spec 01')
    })
  })
  afterEach('Logout after all the tests are done', () => {
    cy.userLogout()
  })
})