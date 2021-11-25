export const homeTab = {
    goToArticles(){
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Home');
        cy.contains('Our Articles').click({force: true});
        cy.url().should('include', 'topics');
    },
}
