describe('search an Item', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-testid="form-search"]').should('be.visible')
      .find('input')
      .type('Motorola')
    cy.get('[data-testid="form-search"]')
      .submit();
 
    cy.get('[data-testid="product-card"]').first().should('be.visible');

    cy.get('[data-testid="product-card"]').first()
    .find('a')
    .click();  
  
    cy.url().should('include', '/items'); 
    cy.get('[data-testid="product-header"]').should('be.visible');

    cy.log('Test completed successfully');
  })
})
