export const timeZoneTab = {
    goToEventTimeAnnouncer(){
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Time Zones');
        cy.contains('Event Time Announcer').click({force:true});
        cy.get('div.main-content-div').should('be.visible');
    }
}