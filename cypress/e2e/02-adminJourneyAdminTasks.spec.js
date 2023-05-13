// --- Created by Jesan Rahman ---

describe('Admin journey: Dashboard Information > Check Shipping information > Check Customers page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    it('Admin Login', () => {
        cy.visitAdminLoginPage()
        cy.fixture('data').then((data) => {
            var email = data.admin.email
            var password = data.admin.password
            cy.adminLogin(email, password)
        })
    })
    it('Check dashboard elements', () => {
        cy.checkDashboardElements()
    })
    it('Check Shipment location with different filters', () => {
        cy.checkShippingInfo()
    })
    it('Check and Add Customer information', () => {
        cy.checkUserInfo()
    })
    it('Add a new Customer information', () => {
        cy.addUserInfo()
    })
})