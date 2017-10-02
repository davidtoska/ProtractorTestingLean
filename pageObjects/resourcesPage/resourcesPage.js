'use strict'

//Top menu
var Navigation = require('../pageElements/navigation');
//var Toolbar = require('../pageElements/toolbar');

//All the dialogs
var CoreValues = require('./cardDialogs/coreValuesDialog');
var CompanyVision = require('./cardDialogs/companyVisionDialog');
var OwnersObjectivesDialog = require('./cardDialogs/ownersObjectivesDialog');
var EmployeesAndPartnersDialog = require('./cardDialogs/employeesAndPartnersDialog');

//All boxes
var CoreValueBox = require('./boxes/coreValueBox');

var ResourcesPage = function () {

    //Index-constants
    const CORE_VALUES_INDEX = 0;
    const COMPANY_VISION_INDEX = 1;
    const OWNERS_OBJECTIVES_INDEX = 2;
    const EMPLOYERS_AND_PARTNERS_INDEX = 3;
    const BUILDINGS_AND_CONTRACTS_INDEX = 4;
    const CASH_AND_CREDIT_INDEX = 5;
    const PATENT_AND_IPR_INDEX = 6;
    const PRODUCTS_AND_SERVICES_INDEX = 7;
    const CONTRACTS_AND_GRANTS_INDEX = 8;



    //Navigation elements
    var navigation = new Navigation();
    //var toolbar = new Toolbar();

    //Selectors
    var addNewCardButtonsList = $('resources-board').all(by.className('box-header__actions'));
    var boardBoxList = element(by.tagName('resources-board')).all(by.tagName('board-box'));


    //this.coreValueBox = boardBoxList.get(CORE_VALUES_INDEX);


    /**
     * get number of elements i board-box-array.
     * @returns {*|wdpromise.Promise<number>|!webdriver.promise.Promise}
     */
    this.getNumberOfBoxes = function () {
        return boardBoxList.count();
    };

    this.box = function () {
        let rb = element(by.tagName('resources-board')).all(by.tagName('board-box'));
        browser.actions().doubleClick(rb.get(4)).perform();
        browser.sleep(5000);
    };

    this.getCoreValueBox = function () {
        return new CoreValueBox();
    };

    //Get dialogs
    this.getCoreValuesDialog = function () {
        addNewCardButtonsList.get(CORE_VALUES_INDEX).click();
        return new CoreValues();
    };

    this.getCompanyVisionDialog = function () {
        addNewCardButtonsList.get(COMPANY_VISION_INDEX).click();
        return new CompanyVision();
    };

    this.getOwnersObjectivesDialog = function () {
        addNewCardButtonsList.get(OWNERS_OBJECTIVES_INDEX).click();
        return new OwnersObjectivesDialog();
    };

    this.getEmployersAndPartnersDialog = function () {
        addNewCardButtonsList.get(EMPLOYERS_AND_PARTNERS_INDEX).click();
        return new EmployeesAndPartnersDialog();
    }


};

module.exports = ResourcesPage;
