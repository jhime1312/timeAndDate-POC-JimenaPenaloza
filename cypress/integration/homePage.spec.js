import 'cypress-harvester';
import {homeTab} from '../support/homeTab';
import {worldClockTab} from '../support/worldClockTab';
import {timeZoneTab} from '../support/timeZoneTab';
import {calendar} from '../support/calendar';
import {weather} from '../support/weather';
import {sunAndmoon} from '../support/sunAndmoon';
import {timers} from '../support/timers';
import {calculators} from '../support/calculators';
import {appsAndApi} from '../support/appsAndApi';
import {freeFun} from '../support/freeFun';
/// <reference types="cypress-downloadfile"/>
/// <reference types="cypress"/>


describe('Functions bar main options', () => {
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
    });
    it('Or Articles on Home tab', () => {
        homeTab.goToArticles();
        cy.contains('Astronomy').click();
        cy.url().should('include', 'astronomy');
        cy.contains('What Causes Seasons on Earth?').click();
        cy.url().should('include', 'seasons-causes');
        cy.downloadFile('https://c.tadst.com/gfx/600x337/equinoxes-and-solstice.png?1','myDownloads','equinoxes-and-solstice.png');
        cy.contains('The Sun: Our home star').click();
        cy.url().should('include', 'sun');
        cy.downloadFile('https://c.tadst.com/gfx/600x337/istock-936863548.jpg?1','myDownloads','sun.jpg');
        cy.contains('Compare the sizes and order of the Sun and the planets').click();
        cy.get('#solarsystem-svg').should('be.visible');
    });
    it('Main world clock on World clock tab', () => {
        worldClockTab.goMainWorldClock();
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
        timeZoneTab.goToEventTimeAnnouncer();
        cy.get('input#msg').type(Cypress.env('eventVacationTime'));
        cy.get('input#p1txt').type('Cochabamba - Bolivia');
        cy.get('input#day').click({force:true});
        cy.get('a.lr').contains('02').click({force:true});
        cy.get('input#month').click({force:true});
        cy.contains('02 - Feb').click();
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
        calendar.goToPrintableCalendar();
        cy.get('a.nav-tabs__item').contains('Monthly').click();
        cy.get('div.tool__wrap').should('be.visible');
        cy.get('input.fw').type('Noviembre');
        cy.get('select.fw').select('Bolivia', {force:true}).invoke('val').should('eq', '53');
        cy.get('input.input__date-year').type('2021');
        cy.contains('Show week numbers').click();
        cy.get('button.form-submit').click();
        cy.get('.fixed.mob-nopad').should('be.visible');
    });
    it('Hour by hour on Weather tab', () => {
        weather.goToHourByHour();
        cy.get('a.read-more').contains('See weather overview').click();
        cy.get('main.tpl-banner__main.layout-grid.layout-grid--sky').should('be.visible');
        cy.get('a.read-more').contains('See more hour-by-hour weather').click();
        cy.get('main.tpl-banner__main.layout-grid.layout-grid--sky').contains('Hour-by-hour Forecast in Cochabamba — Graph').should('be.visible');
    });
    it('Eclipses on Sun & Moon tab - Play to video', ()=> {
        sunAndmoon.goToEclipses();
        cy.get('circle.umbra').click();
        cy.get('main.tpl-banner__main.layout-grid.layout-grid--sidebar-sky').should('be.visible');
        cy.get('p.mgt15').click();
        cy.get('main.tpl-banner__main.layout-grid.layout-grid--sidebar-sky').should('be.visible');
        cy.get('button.one.btn-play').click({multiple:true});
    });
    it('Stop watch on Timers tab', () => {
        timers.goToStopWatch();
        cy.get('span.stopwatch__label--action').contains('Start').click();
        cy.wait(500);
        cy.get('span.stopwatch__label--action').contains('Pause').click({force:true});
        cy.get('section.split-list.stopwatch__splits').should('be.visible');
        cy.get('span.stopwatch__label--action').contains('Reset').click();
        cy.get('div.modal-body').contains('All timings will be lost when you reset.').should('be.visible');
        cy.get('button.modal__action.modal__action--danger.button-form.button-form--danger').click();
        cy.get('div.fullscreen-wrapper__content.stopwatch__grid').should('be.visible');
    });
    it('Distance calculators in Calculators tab', () => {
        calculators.goToDistanceCalc();
        cy.get('div.fixed').contains('Distance Calculator – How far is it?').should('be.visible');
    });
    it('Android apps on Apps & API', () => {
        appsAndApi.goToAndroid();
        cy.get('p.large-link').click();
        cy.url().should('include', 'worldclock');
    });
    it('Fun holidays on Free Fun tab', () => {
        freeFun.goToFunHolidays();
        cy.contains('Buffet Day').click();
        cy.url().should('include', 'buffet-day');
        cy.get('.mgt0').should('be.visible');
        cy.get('input#boxyear').type('2021');
        cy.contains('View Calendar').click();
        cy.get('div#calarea').should('be.visible');
    })
});