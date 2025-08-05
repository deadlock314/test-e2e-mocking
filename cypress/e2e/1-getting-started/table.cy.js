describe('Home Page User Table', () => {
  it('should display the user table with data from API', () => {
    cy.visit('/');

    // Table should exist
    cy.get('table').should('exist');

    // Table headers
    cy.get('th').contains('ID');
    cy.get('th').contains('Name');
    cy.get('th').contains('Email');

    // Table should have at least one row
    cy.get('tbody tr').should('have.length.greaterThan', 0);

    // Check first row has expected columns
    cy.get('tbody tr').first().within(() => {
      cy.get('td').eq(0).should('not.be.empty'); // ID
      cy.get('td').eq(1).should('not.be.empty'); // Name
      cy.get('td').eq(2).should('not.be.empty'); // Email
    });
  });
});