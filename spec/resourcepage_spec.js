'use strict';

var LandingPage = require('../pageObjects/landingPage');



describe('Logging in, and find resourcesPage', function () {

    var landingPage = new LandingPage();
    var toolboxPage;
    var resourcesPage;

    //Dummy text variables.
    var title = "new card title";
    var description = "new card description";

    beforeEach(function () {
        //Pending google analytics.
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        landingPage.get("http://new.leanbusinessplanner.com/start");
        browser.sleep(4000);
        toolboxPage = landingPage.loggIn("david.toska@outlook.com", "protractor123");
        browser.sleep(4000);
        resourcesPage = toolboxPage.getResourcesPage();
        browser.sleep(2000);
    });

    xit('Should delete all cards in the core-value-box', function () {
        var coreValueBox = resourcesPage.getCoreValueBox();

        coreValueBox.getNumberOfCards().then(function (n) {
            for(let i = 0; i < n; i++){
                coreValueBox.deleteTopCard();
                console.log("Counting: " + i);
            }
        });

        expect(coreValueBox.getNumberOfCards()).toBe(0);

    });

    xit('create and delete core-value-card.', function () {
       var coreValueDialog = resourcesPage.getCoreValuesDialog();
       browser.sleep(1000);
       coreValueDialog.createNewCard("new title here", "new text in the textfield");
       browser.sleep(1000);
       var coreValueBox = resourcesPage.getCoreValueBox();
       browser.sleep(1000);
       coreValueBox.deleteTopCard();
       browser.sleep(1000);
       expect(coreValueBox.getNumberOfCards()).toBe(0);
    });

    xit('ResoursesPage should have 9 boardBoxes', function () {
        expect(resourcesPage.getNumberOfBoxes()).toBe(9);
    });

    it('Should create new employers-and-partners card', function () {
        let eAndpDialog =
            resourcesPage.getEmployersAndPartnersDialog();
        browser.sleep(1500);
        eAndpDialog.createNewCard("AA", "DD");

        browser.sleep(2000);
    });



    xit('Should create new core-values card', function () {
        let coreValueDialog = resourcesPage.getCoreValuesDialog();
        browser.sleep(1000);
        coreValueDialog.createNewCard(title, description);
        browser.sleep(1000);

    });

    xit('Should create new company-vision card', function () {
        let companyVisionDialog = resourcesPage.getCompanyVisionDialog();
        browser.sleep(1000);
        companyVisionDialog.createCompanyVision(title, description);
        browser.sleep(1000);
    });

    xit('Should create new owners-objectives card', function () {
        let ownersObjectivesDialog = resourcesPage.getOwnersObjectivesDialog();
        browser.sleep(1000);
        ownersObjectivesDialog.createNewCard(title, description);
        browser.sleep(1000);
    });



});
