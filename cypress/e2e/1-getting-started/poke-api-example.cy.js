/// <reference types="cypress" />

const pokemon = "pikachu"

Cypress.Commands.add('getPokemon', (pokemon) => {
  cy.request({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pikachu/'
  })
})