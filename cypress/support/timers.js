export const timers = {
    goToStopWatch(){
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Timers');
        cy.contains('Stopwatch').click({force:true});
        cy.get('div.nav-tabs__wrap').should('be.visible');
    }
}