/// <reference types="cypress"/>

describe('US-012 Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o adastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:3000/')
    cy.get('#signup-firstname').type('Leticia')
    cy.get('#signup-lastname').type('Teste')
    cy.get('#signup-email').type('teste@teste.com')
    cy.get('#signup-phone').type('1422225555')
    cy.get('#signup-password').type('Teste@142525')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})