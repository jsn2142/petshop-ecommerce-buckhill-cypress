// --- Created by Jesan Rahman ---

describe('Admin journey: Dashboard Information', () => {
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
})