export const weather = {
    goToHourByHour(){
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Weather');
        cy.contains('Hour-by-Hour').click({force:true});
        cy.get('main.tpl-banner__main.layout-grid.layout-grid--sky').contains('Hour-by-hour Forecast in Cochabamba — Graph').should('be.visible');
    }
}