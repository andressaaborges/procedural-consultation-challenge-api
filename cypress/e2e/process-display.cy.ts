describe('process display', () => {
  it('should be able to display data from an existing process', () => {
    cy.searchByQuery('8500235-12.2019.4.05.8000')

    cy.location('pathname').should('include', '/process')

    cy.location('pathname').should(
      'equal',
      '/process/8500235-12.2019.4.05.8000',
    )

    cy.contains('Processo nº 8500235-12.2019.4.05.8000 do TRF5')
  })
})
