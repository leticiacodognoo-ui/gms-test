/// <reference types="cypress"/>

describe('US-012 Funcionalidade: Política de privacidade', () => {

  beforeEach(() => {
    cy.visit('/')
  });
  
  afterEach(() => {
    cy.screenshot()
  });

  it('Deve clicar no link Política de privacidade', () => {
    cy.once('uncaught:exception', () => false);
    cy.visit('https://golden-movie-studio.vercel.app')
    cy.get('a').click()
    cy.get('header').should('contain','Política de Privacidade')
  })
})