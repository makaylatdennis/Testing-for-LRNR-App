

describe('Check Begin Journey Button', () => {
  it('should find the Begin Journey button', () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-testid="begin-bttn"]').should('exist')
    .should('have.text', "Begin Journey")

    cy.get('[data-testid="begin-bttn"]').click();

   
    cy.url().should('include', '/generate');
    ;
  });
});
