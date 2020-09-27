/// <reference types="cypress" />

context('eBay Test', () => {
    beforeEach(() => {
        cy.visit('http://www.ebay.com')
    })

    it('Search for Pilas and print the number of items found to the console', function () {
        //   Completamos el campo de búsqueda con la palabra "Pilas"
        cy.get('#gh-ac').type('Pilas')
        cy.wait(2000)
        //   Hacemos click en la lupa
        cy.get('#gh-btn').click()

        // Imprimimos en consola sólo el número de resultados encontrados (por eso el split)
        cy.get(".srp-controls__count-heading").invoke('text').then((text) => {
            var arrText = text.split(" ");
            cy.log('NÚMERO DE ITEMS DEVUELTO: '+arrText[0])
            console.log('NÚMERO DE ITEMS DEVUELTO: '+arrText[0]);
        });
    })
})
