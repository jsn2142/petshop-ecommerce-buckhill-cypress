// --- Created by Jesan Rahman ---

describe('Admin journey: Shipping Information', () => {
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
})