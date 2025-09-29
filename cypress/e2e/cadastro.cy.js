/// <reference types="cypress"/>

describe('US-012 Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  
  afterEach(() => {
    cy.screenshot()
  });
  
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `leticia${Date.now()}@teste.com`
    cy.preencherCadastro('Leticia', 'Teste' , email, '1455555555', 'Teste@5145411')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Deve validar mensagem de erro com o campo nome inválido' , () => {
    cy.preencherCadastro('Leticia20', 'Teste' , 'teste@teste.com', '1455555555', 'Teste@5145411')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });

  it('Deve validar mensagem de erro com o campo sobrenome inválido', () => {
    cy.preencherCadastro('Leticia', 'Teste20' , 'teste@teste.com', '1455555555', 'Teste@5145411')
    cy.get('#signup-response').should('contain', 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });

  it('Deve validar mensagem de erro com o campo email inválido',() => {
    cy.preencherCadastro('Leticia', 'Teste' , 'testeteste.com', '1455555555', 'Teste@5145411')
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  });

  it('Deve validar mensagem de erro com o campo telefone inválido',() => {
    cy.preencherCadastro('Leticia', 'Teste' , 'teste@teste.com', 'telefone', 'Teste@5145411')
    cy.get('#signup-response').should('contain', 'Telefone deve conter apenas números')
  });

  it.only('Deve validar mensagme de erro com o campo senha fraca', () => {
    cy.preencherCadastro('Leticia', 'Teste' , 'teste@teste.com', '1455555555', 'senha1')
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  });
})