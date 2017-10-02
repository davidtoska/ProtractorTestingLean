'use strict'

var CreateCaseForm = require('./createCaseForm');
var CreateCaseWizardStep1 = require('./createCaseWizardStep1');

var NewCaseDialog = function () {
    this.inputCaseName = element(by.name("caseName"));
    this.exit = element(by.className("lb-dialog-close ng-scope"));

    this.strateyAndProject = element(by.buttonText("Strategy and Project"));
    this.stratey= element(by.buttonText("Strategy"));
    this.project = element(by.buttonText("Project"));

    var customizeBtn = element(by.buttonText("Customize"));

    var createBtn = element(by.buttonText("create"));

    this.enterCaseName = function (caseName) {
        this.inputCaseName.sendKeys(caseName);
    }

    this.customize = function () {
        customizeBtn.click();
        let createCaseForm = new CreateCaseForm();
        return createCaseForm;
    }

    this.create = function(){
        createBtn.click();
        browser.sleep(500);
        return new CreateCaseWizardStep1();
    }
};

module.exports = NewCaseDialog;