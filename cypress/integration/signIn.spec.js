import 'cypress-harvester';

describe('Account functions', () => {
   
    it('Create account', () => {
        cy.visit('/');
        cy.get('a.site-nav__title').contains('My Account');
        cy.contains('Sign in').click({force: true});
        cy.get('.modal__wrap--sb').should('be.visible');
        cy.get('a#createlink').click();
        cy.get('div.modal-body').should('be.visible');
        cy.get('input[name=fullname]').type(Cypress.env('username_creation'));
        cy.get('input[name=email]').type(Cypress.env('usermail_creation'));
        cy.get('input#password').type(Cypress.env('userpass_creation'));
        cy.get('input#password1').type(Cypress.env('userpass_creation'));
        cy.get('input#create').click();
        cy.get('div.modal-body').should('be.visible');
        cy.contains('No Thanks').click();
        cy.get('.main-content-div').should('be.visible');
        cy.get('i.i-font.i-account_circle.site-nav__desktop-title').click();
        cy.get('section.article__body.article__body--right').should('be.visible'); 
    });
    beforeEach(() =>{
        cy.login();
    });
    it('See user events', ()=> {
        cy.get('.main-content-div').should('be.visible');
        cy.get('.site-nav__menu.site-nav__menu--my-account');
        cy.get('a.site-nav__link').contains('My Events').click({force: true});
        cy.get('div.main-content-div').should('be.visible');
    });
    it('See user world clock', ()=> {
        cy.get('.main-content-div').should('be.visible');
        cy.get('.site-nav__menu.site-nav__menu--my-account');
        cy.get('a.site-nav__link').contains('My World Clock').click({force: true});
        cy.get('section#clock__load').should('be.visible');
        cy.get('.site-nav__menu.site-nav__menu--my-account');
        cy.get('.site-nav__item.site-nav__item--divider .site-nav__link').contains('My Privacy').click({force: true});
        cy.get('a#download.button.submit.round').click();
        cy.verifyDownload('data.json');
    });

});