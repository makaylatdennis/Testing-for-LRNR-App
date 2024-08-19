describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-testid="rewarding"]').should('exist')

    cy.get('[data-testid="rewarding"]').should('have.class', 'rewarding-paragraph')

    cy.get('[data-testid="rewarding"]').should('have.text', 'Our app is designed to be both challenging and rewarding, so you can learn new concepts while enjoying the process. With our personalized quiz app, you can track your progress, compete with your peers, and discover new areas of expertise. The journey of a thousand lines of code begins with a single keystroke.')
  })
})