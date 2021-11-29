export const calculators = {
    goToDistanceCalc(){
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Calculators');
        cy.contains('Distance Calculator').click({force:true});
    }
}