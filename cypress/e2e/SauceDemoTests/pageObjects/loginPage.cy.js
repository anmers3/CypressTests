// loginPage.js - Page Object para a página de Login do Sauce Demo

class LoginPage {
    // Getter para os elementos da página de login
    get usernameInput() {
        return cy.get('[data-test="username"]');
    }

    get passwordInput() {
        return cy.get('[data-test="password"]');
    }

    get loginButton() {
        return cy.get('[data-test="login-button"]');
    }

    get errorMessage() {
        return cy.get('[data-test="error"]');
    }

    get confirmHomePage(){
        return cy.get('[data-test="title"]')
    }

    // Métodos para interagir com os elementos
    typeUsername(username) {
        this.usernameInput.type(username);
        return this; // Permite encadeamento de métodos
    }

    typePassword(password) {
        this.passwordInput.type(password);
        return this; // Permite encadeamento de métodos
    }

    clickLoginButton() {
        this.loginButton.click();
    }

    // Métodos combinados para cenários comuns
    login(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLoginButton();
    }

    // Asserção específica da página
    shouldShowErrorMessage(message) {
        this.errorMessage.should('be.visible').and('contain', message);
    }

    // Asserção específica da home page
    shouldShowHomePage(title) {
        this.confirmHomePage.should('contain', title)
    }
}

// Exporta uma instância da classe para que possa ser importada nos testes
export default new LoginPage();