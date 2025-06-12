import loginPage from '../SauceDemoTests/pageObjects/loginPage.cy';

const validUserName = "standard_user"
const validPassWord = "secret_sauce"

describe('Sauce Demo Buy Tests', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Should successfully login with valid credentials', () => {
        loginPage.login(validUserName, validPassWord);
        loginPage.shouldShowHomePage('Products'); // Verifica a navegação após o login
        
        cy.wait(500);

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    });

    
});