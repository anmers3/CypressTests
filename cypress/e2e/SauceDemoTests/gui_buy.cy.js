import loginPage from '../SauceDemoTests/pageObjects/loginPage.cy';
import InventoryPage from '../SauceDemoTests/pageObjects/InventoryPage.cy';

const validUserName = "standard_user"
const validPassWord = "secret_sauce"

describe('Com Page Object', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Should successfully login with valid credentials', () => {
        loginPage.login(validUserName, validPassWord);
        loginPage.shouldShowHomePage('Products'); // Verifica a navegação após o login

        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
        cy.wait(500)

        cy.wrap(null).then(async () => {
            InventoryPage.findMinPrice().then(({ price, element }) => {
                cy.log(`Menor preço encontrado: $${price}`);

                // Validações
                cy.wrap(element)
                    .should('contain', `$${price}`)
                    .and('be.visible');

                // Ação no item mais barato (exemplo)
                cy.wrap(element)
                    .parent()
                    .find('[data-test^="add-to-cart"]')
                    .click();
            });
        });
    });
});