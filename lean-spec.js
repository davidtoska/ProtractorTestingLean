'use strict';

var LandingPage = require('./pageObjects/landingPage');
var toolboxPage;
var resourcesPage;
var boardChooserDialog;

describe('Logg in testing', function () {

    var landingPage = new LandingPage();


    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        landingPage.get("http://new.leanbusinessplanner.com/start");
        browser.sleep(1000);
        toolboxPage = landingPage.loggIn("david.toska@outlook.com", "protractor123");
        browser.sleep(4000);
    });


    xit('Should open boards-popover', function () {
        //let boardsMenuPopover = toolboxPage.toolbar.getBoardsMenuPopover();
        //browser.sleep(2000);
        //let bsd = boardsMenuPopover.getBoardsSelector();
        browser.sleep(3000);
        //bsd.exit();
        //browser.sleep(4000);
    });

    xit('Should create new case', function () {

        let casesPopover = toolboxPage.toolbar.getCasesPopover();
        browser.sleep(1000);
        let createCaseDialog = casesPopover.getNewCaseDialog();
        browser.sleep(2000);
        createCaseDialog.strateyAndProject.click();
        browser.sleep(2000);
        createCaseDialog.enterCaseName("mitt casenavn");
        browser.sleep(2000);

        let createCaseWizardStep1 = createCaseDialog.create();
        createCaseWizardStep1.setCompanyName("MyCompany");
        browser.sleep(2000);
        createCaseWizardStep1.setOrgNr("123456789");
        let step2 = createCaseWizardStep1.next();
        browser.sleep(2000);
        step2.dontFiddleWithMoney();
        browser.sleep(2000);
        step2.createCase();
        browser.sleep(5000);
        expect(browser.getCurrentUrl())
            .toBe('http://new.leanbusinessplanner.com/cases/3431');
    });

    xit('Should have logged in', function () {
        expect(browser.getCurrentUrl())
          .toBe('http://new.leanbusinessplanner.com/cases/3431');
    });

    xit('Should enter resources from navigation', function () {
        browser.sleep(1000);
        toolboxPage.navigation.resources.click();
        browser.sleep(2000);
        expect(browser.getCurrentUrl())
            .toBe('http://new.leanbusinessplanner.com/cases/3431/resources');
        //http://new.leanbusinessplanner.com/cases/3431/resources
    });

    xit('should enter resources from canvas', function () {
        resourcesPage = toolboxPage.resourcesCanvas.click();
        browser.sleep(5000);
        expect(browser.getCurrentUrl())
            .toBe('http://new.leanbusinessplanner.com/cases/3431/resources');

    });

    xit('should enter boardchooser-dialog from navigation', function () {
        boardChooserDialog = toolboxPage.navigation.boardChooser();
        browser.sleep(5000);
        boardChooserDialog.exit();
        browser.sleep(5000);
        expect(browser.getCurrentUrl())
            .toBe('http://new.leanbusinessplanner.com/cases/3431');

    });


});
