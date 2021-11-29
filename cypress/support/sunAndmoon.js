export const sunAndmoon = {
    goToEclipses(){
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Sun & Moon');
        cy.contains('Eclipses').click({force:true});
        cy.get('section#bn__next_eclipse').should('be.visible');
    }
}