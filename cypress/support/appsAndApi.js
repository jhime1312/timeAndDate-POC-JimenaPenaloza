export const appsAndApi = {
    goToAndroid(){
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Apps & API');
        cy.contains('Android Apps').click({force:true});
        cy.get('.app-text').should('be.visible');
    }
}