// --- Created by Jesan Rahman ---

describe('Admin journey: Various administrative tasks', () => {
    beforeEach('Admin Login', () => {
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
    it('Check and add Customer information', () => {
        cy.checkUserInfo()
    })
})