/// <reference types="cypress" />


const pokemonName = "pikachu"

describe('example to-do api pokemon', () => {
    beforeEach(() => {
        cy.visit('https://pokeapi.co/')
    })
    it('displays pokemon on page', () => {
        cy.get('.Header-module__link_active--nehDk')
        cy.get('#url-input').clear().type('pokemon/' + pokemonName)
        cy.get('.Input-module__button--3cQfp').click()

    });

    after(() => {
        cy.clearAllLocalStorage()
    })
});