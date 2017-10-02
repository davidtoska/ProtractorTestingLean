'use strict'

var CreateCaseWizardStep2 = require('./createCaseWizardStep2');


var CreateCaseWizardStep1 = function () {


    var companyNameInputField = element(by.model('$ctrl.case.companyName'));
    var orgNrInputField = element(by.model("$ctrl.case.organisationNumber"));


    this.setCompanyName = function (companyName) {
        companyNameInputField.sendKeys(companyName);
    }



    this.setOrgNr = function (orgnr) {
        orgNrInputField.sendKeys(orgnr);
    }

    this.next = function () {
        element(by.buttonText("next")).click();
        return new CreateCaseWizardStep2();
    }
};

module.exports = CreateCaseWizardStep1;