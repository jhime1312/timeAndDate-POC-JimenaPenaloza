export const worldClockTab = {
    goMainWorldClock(){
        cy.visit('/');
        cy.get('a.site-nav__title').contains('World Clock');
        cy.contains('Main World Clock').click({force:true});
        cy.get('table.zebra.fw.tb-theme').should('be.visible');
    }
}