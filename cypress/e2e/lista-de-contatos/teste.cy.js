/// <reference types="cypress" />

describe('testes para a pgina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato a agenda', () => {
        cy.get('[type="text"]').type('giselle barbosa')
        cy.get('[type="email"]').type('giselle.barbosa@teste.com')
        cy.get('[type="tel"]').type('24 992689494')
        cy.get('.adicionar').click()
    })

    it('Deve editar o contato do FELIPE da agenda', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Felipe Lacerda')
        cy.get('.alterar').click()
    })

        it('Deve excluir o contato BRUNA COSTA da agenda', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
    })
})