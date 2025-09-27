/// <reference types="cypress"/>

describe('US-012 Funcionalidade: Política de privacidade', () => {
  it('Deve clicar no link "Política de privacidade', () => {
    cy.visit('http://127.0.0.1:3000/')
    cy.get('a').click()
  })
})