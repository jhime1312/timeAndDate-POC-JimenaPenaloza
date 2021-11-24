import 'cypress-harvester'

describe('Functions bar main options', () => {
    it('Or Articles on Home tab', () => {
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Home');
        // cy.get('.site-nav__sub-menu').invoke('show');
        cy.contains('Our Articles').click({force: true});
        cy.url().should('include', 'topics');
        cy.contains('Astronomy').click();
        cy.url().should('include', 'astronomy');
        cy.contains('What Causes Seasons on Earth?').click();
        cy.url().should('include', 'seasons-causes');
        cy.contains('The Sun: Our home star').click();
        cy.url().should('include', 'sun');
        cy.contains('Compare the sizes and order of the Sun and the planets').click();
        cy.get('#solarsystem-svg').should('be.visible');
    });
    it('Main world clock on World clock tab', () => {
        cy.visit('/');
        cy.get('a.site-nav__title').contains('World Clock');
        cy.contains('Main World Clock').click({force:true});
        cy.get('table.zebra.fw.tb-theme').should('be.visible');
        cy.contains('Bogota').click();
        cy.get('main.tpl-banner__main.layout-grid.layout-grid--sky').should('be.visible');
        cy.get('div#tl-tz').click();
        cy.get('main.tpl-banner__main.layout-grid.layout-grid--sky').should('be.visible');
        cy.get('div.tz-period.mtt').click();
        cy.get('main.content__main.pdflexi').should('be.visible');
        cy.get('div.detail.clean.small').contains('Colombia').click();
        cy.get('main.tpl-banner__main.layout-grid.layout-grid--sky').should('be.visible');
        cy.get('.tzmp_fig.clearfix').should('be.visible');
    });
    it('Event time anouncer on Time Zones tab', () => {
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Time Zones');
        cy.contains('Event Time Announcer').click({force:true});
        cy.get('div.main-content-div').should('be.visible');
        cy.get('input#msg').type(Cypress.env('eventVacationTime'));
        // cy.get('button.btn-citypicker').click();
        cy.get('input#p1txt').type('Cochabamba - Bolivia');
        cy.get('input#month').click({force:true});
        cy.contains('02 - Feb').click();
        cy.get('input#day').click({force:true});
        cy.get('a.lr').contains('02').click({force:true});
        cy.get('input#year').click({force:true});
        cy.get('input#year').type('2022');
        cy.get('input#hour').click({force:true});
        cy.get('input#hour').type('08');
        cy.get('input#min').click({force:true});
        cy.get('input#min').type('00');
        cy.get('input#sec').click({force:true});
        cy.get('input#sec').type('00');
        cy.get('select#ah').select('8', {force:true}).invoke('val').should('eq', '8');
        cy.get('select#am').select('00', {force:true}).invoke('val').should('eq', '0');
        cy.get('input#eta-wc').click({force:true});
        cy.get('div.main-content-div').should('be.visible');
    });
    it('Printable calendar to PDF on Calendar tab', () => {
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Calendar');
        cy.contains('Printable Calendar (PDF)').click({force:true});
        cy.get('a.nav-tabs__item').contains('Monthly').click();
        cy.get('div.tool__wrap').should('be.visible');
        cy.get('input.fw').type('Noviembre');
        cy.get('select.fw').select('Bolivia', {force:true}).invoke('val').should('eq', '53');
        cy.get('input.input__date-year').type('2021');
        // cy.get('select').select('November', {force:true}).invoke('val').should('eq', '11');
        // cy.get('select').select('5', {force:true}).invoke('val').should('eq', '5');
        // cy.get('select').select('Letter', {force:true}).invoke('val').should('eq', '1');
        cy.contains('Show week numbers').click();
        // cy.contains(' Download PDF Calendar ').click();
        //cy.url().should('include', 'November');
    });
    it('Hour by hour on Weather tab', () => {
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Weather');
        cy.contains('Hour-by-Hour').click({force:true});
        cy.get('main.tpl-banner__main.layout-grid.layout-grid--sky').contains('Hour-by-hour Forecast in Cochabamba — Graph').should('be.visible');
        cy.get('a.read-more').contains('See weather overview').click();
        cy.get('main.tpl-banner__main.layout-grid.layout-grid--sky').should('be.visible');
        cy.get('a.read-more').contains('See more hour-by-hour weather').click();
        cy.get('main.tpl-banner__main.layout-grid.layout-grid--sky').contains('Hour-by-hour Forecast in Cochabamba — Graph').should('be.visible');
    });
    it('Eclipses on Sun & Moon tab - Play to video', ()=> {
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Sun & Moon');
        cy.contains('Eclipses').click({force:true});
        cy.get('section#bn__next_eclipse').should('be.visible');
        cy.get('circle.umbra').click();
        cy.get('main.tpl-banner__main.layout-grid.layout-grid--sidebar-sky').should('be.visible');
        cy.get('p.mgt15').click();
        cy.get('main.tpl-banner__main.layout-grid.layout-grid--sidebar-sky').should('be.visible');
        cy.get('button.one.btn-play').click({multiple:true});
    });
    it('Stop watch on Timers tab', () => {
        cy.visit('/');
        cy.get('a.site-nav__title').contains('Timers');
        cy.contains('Stopwatch').click({force:true});
        cy.get('div.nav-tabs__wrap').should('be.visible');
        cy.get('span.stopwatch__label--action').contains('Start').click();
        cy.wait(500);
        cy.get('span.stopwatch__label--action').contains('Pause').click({force:true});
        cy.get('section.split-list.stopwatch__splits').should('be.visible');
        cy.get('span.stopwatch__label--action').contains('Reset').click();
        cy.get('div.modal-body').contains('All timings will be lost when you reset.').should('be.visible');
        cy.get('button.modal__action.modal__action--danger.button-form.button-form--danger').click();
        cy.get('div.fullscreen-wrapper__content.stopwatch__grid').should('be.visible');
    });
    it('Tabs content', () => {
        cy.visit('/');
        cy.get('.site-nav-bar__menu-wrap .site-nav__menu ')
            .scrapeElements({
                elementsToScrape: [
                { label: 'tab_title', locator: '.site-nav__title' },
                ],
            })
            .then((scrapedData) => {
                expect(scrapedData.data).to.deep.eq([
                {
                    tab_title: 'Home',
                },
                {
                    tab_title: 'World Clock',
                },
                {
                    tab_title: 'Time Zones',
                },
                {
                    tab_title: 'Calendar',
                },
                {
                    tab_title: 'Weather',
                },
                {
                    tab_title: 'Sun & Moon',
                },
                {
                    tab_title: 'Timers',
                },
                {
                    tab_title: 'Calculators',
                },
                {
                    tab_title: 'Apps & API',
                },
                {
                    tab_title: 'Free Fun',
                },
                {
                    tab_title: 'My Account',
                },
                ]);
            });
    })
});