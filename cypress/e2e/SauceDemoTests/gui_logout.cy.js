// <reference types="Cypress"/>
// Importa a instância do seu Page Object
import loginPage from '../SauceDemoTests/pageObjects/loginPage.cy';

describe('Sauce Demo Logout Tests', () => {

        beforeEach(() => {
            cy.visit('/');
        });

        it('Should successfully login and then logout', () => {
            loginPage.login('standard_user', 'secret_sauce');
            loginPage.shouldShowHomePage('Products'); // Verifica a navegação após o login

            // --- MUDANÇA AQUI ---
            // Adicione um cy.wait() para dar tempo à renderização do menu
            // 500ms (0.5 segundo) geralmente é suficiente para páginas rápidas como esta
            cy.wait(500); // Espera 500 milissegundos

            cy.get('[data-test="logout-sidebar-link"]')
                .click({ force: true }) //Ao forçar o clique, você ignora as verificações de visibilidade e clicabilidade, executando a ação independentemente.

        });
    });
