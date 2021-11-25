import 'cypress-harvester'

describe('Account functions', () => {
    it('Create account', () => {
        cy.visit('/');
        cy.get('a.site-nav__title').contains('My Account');
        cy.contains('Sign in').click({force: true});
        cy.get('.modal__wrap--sb').should('be.visible');
        cy.get('a#createlink').click();
        cy.get('div.modal-body').should('be.visible');
        cy.get('input[name=fullname]').type('Marcia');
        cy.get('input[name=email]').type('marcia@tester.com');
        cy.get('input#password').type('Tester.123');
        cy.get('input#password1').type('Tester.123');
        cy.get('input#create').click();
        cy.get('div.modal-body').should('be.visible');
        cy.contains('No Thanks').click();
        cy.get('.main-content-div').should('be.visible');
        cy.get('i.i-font.i-account_circle.site-nav__desktop-title').click();
        cy.get('section.article__body.article__body--right').should('be.visible');
        // cy.logout(); 
    }); // solo una vez
    

});