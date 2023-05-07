// --- Created by Jesan Rahman ---
import 'cypress-mochawesome-reporter/register'
import { adminAuthenticate } from '../support/adminAuthenticate'
import { userListing } from '../support/userListingByAdmin'
describe('User Journey: User logs in > Browses promotions and products > Finishes ordering a product', () => {
  beforeEach('Using Admin credential, to fetch user email address and then login as a user', () => {
    cy.fixture('data').then((data) => {
      var email = data.admin.email
      var password = data.admin.password
      var userPassword = data.user01.password
      adminAuthenticate(email, password).then(() => {
        cy.get('@accessToken').then((accessToken) => {
          userListing(accessToken).then(() => {
            cy.get('@email').then((email) => {
              cy.userLogin(email, userPassword)
            })
          })
        })
      })
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
})