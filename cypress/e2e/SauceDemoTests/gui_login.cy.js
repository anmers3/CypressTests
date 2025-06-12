// <reference types="Cypress"/>
// use 'ntl' to run this task
// Importa a instância do seu Page Object
import loginPage from '../SauceDemoTests/pageObjects/loginPage.cy';

const messageError = "Epic sadface: Username and password do not match any user in this service"
const validUserName = "standard_user"
const validPassWord = "secret_sauce"
const invalidUserName = "no_user"
const invalidPassWord = "no_secret"

describe('Sauce Demo Login Tests', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Should display an error message for invalid user', () => {
        loginPage.login(invalidUserName, validPassWord);
        loginPage.shouldShowErrorMessage(messageError);// Mensagem de erro para usuário inválido no Sauce Demo
    });

    it('Should display an error message for invalid password', () => {
        loginPage.login(validUserName, invalidPassWord);
        loginPage.shouldShowErrorMessage(messageError);// Mensagem de erro para senha inválida no Sauce Demo
    });

    it('Should display an error message for null username', () => {
        // Note: ' ' é considerado um usuário inválido pelo Sauce Demo.
        // Se você quer testar um campo completamente vazio, passaria uma string vazia ''
        loginPage.login(' ', validPassWord);
        loginPage.shouldShowErrorMessage(messageError); // Mensagem de erro para usuário vazio no Sauce Demo
    });

    it('Should display an error message for null password', () => {
        loginPage.login(validUserName, ' ');
        loginPage.shouldShowErrorMessage(messageError); // Mensagem de erro para senha vazia no Sauce Demo
    });

    it('Should successfully login with valid credentials', () => {
        loginPage.login(validUserName, validPassWord);
        loginPage.shouldShowHomePage('Products'); // Verifica a navegação após o login
    });
});