describe('empty spec', () => {
  it('renders homepage', () => {
    cy.visit('http://localhost:3000')
  })

  it('routes to Grand Theft Auto V', () => {
    cy.get('#game-cover-1020').click()
    cy.url().should('include', '/game/grand-theft-auto-v')
  })

  it('routes back to homepage', () => {
    cy.get('header > h1 a').click()
  })
})

export {}
