/// <reference types= "cypress"/>

describe('US-015 Funcionalidade: Busca de filmes', () => {
  it('Deve realizar a busca dos filmes', () => {
    cy.visit('http://127.0.0.1:3000/')
    cy.get('#search-input').type('Inception')
    cy.get('#search-button').click()
    cy.get('#clear-button').click()
  })
})