describe('template spec', () => {
  it('should display app logo', () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-testid="home-logo"]').should('exist')

    cy.get('[data-testid="home-logo"]').should('have.attr', 'src', 'lrnr.png')

    cy.get('[data-testid="home-logo"]').should('have.attr', 'alt', 'Logo');
   

  })
})