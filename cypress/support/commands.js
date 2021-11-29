// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-downloadfile/lib/downloadFileCommand');

Cypress.Commands.add('login', () => {
    cy.visit('/');
    cy.get('a.site-nav__title').contains('My Account');
    cy.contains('Sign in').click({force: true});
    cy.get('input#email').type(Cypress.env('user_email'));
    cy.get('input#password').type(Cypress.env('user_password'));
    cy.get('input#create').click();
})



