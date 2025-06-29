/// <reference types="cypress" />

Cypress.Commands.add('getPokemon', (pokemon) => {
  cy.request({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pikachu/'
  })
})