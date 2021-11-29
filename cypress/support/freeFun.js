export const freeFun = {
    goToFunHolidays() {
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Free Fun');
        cy.contains('Fun Holidays').click({force:true});
        cy.url().should('include', 'holidays');
    }
}