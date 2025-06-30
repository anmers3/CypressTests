// <reference types="Cypress"/>
import loginPage from '../SauceDemoTests/pageObjects/loginPage';


describe('Sauce Demo Logout Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Should successfully login and then logout', () => {
        // 1. Login
        const { username, password } = Cypress.env();
        
        loginPage.login(username, password);
        loginPage.shouldShowHomePage('Products');

        // 2. Open menu (with verification)
        cy.get('#react-burger-menu-btn')
            .should('be.visible')
            .click();

        // 3. Checkout logout link is visible before click action
        cy.get('[data-test="logout-sidebar-link"]')
            .should('be.visible')
            .and('not.be.disabled')
            .click();

        // 4. Verification with redirection to login page
        cy.url().should('include', '/');
        cy.get('[data-test="login-button"]').should('be.visible');
    });
});