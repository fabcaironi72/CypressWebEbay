/// <reference types="cypress" />

context('eBay Test', () => {
    beforeEach(() => {
        cy.visit('http://www.ebay.com')
    })

    it('Search for Pilas and print the number of items found to the console', function () {
        //   Completamos el campo de búsqueda con la palabra "Pilas"
        cy.get('#gh-ac').type('Pilas')
        //   Hacemos click en la lupa
        cy.get('#gh-btn').click()
        // Imprimimos en consola sólo el número de resultados encontrados
        cy.get(".srp-controls__count-heading").invoke('text').then((text) => {
           var itemsFound = text.split(" ");
           cy.log(itemsFound[0])
        });
    })
})
