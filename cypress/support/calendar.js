export const calendar = {
    goToPrintableCalendar(){
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Calendar');
        cy.contains('Printable Calendar (PDF)').click({force:true});
    }
}