describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-testid="flash-logo"]').should('exist')

    cy.get('[data-testid="flash-logo"]').should('have.class', 'material-icons');

    cy.get('[data-testid="flash-logo"]').should('have.text', 'flash_on');
  })
})