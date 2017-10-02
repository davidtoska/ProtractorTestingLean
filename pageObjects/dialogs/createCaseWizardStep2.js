'use strict'


var CreateCaseWizardStep2 = function () {
    this.createForcast = function () {
        element(by.id("md-radio-button#radio_6")).click();
    };

    this.dontFiddleWithMoney = function (){
        element.all(by.id("radio_7")).get(0).click();
        //console.log("Heisan....  kdkkdkdkskjf" + element(by.id("#radio_7")).isPresent());
    };

    this.createCase = function () {
        element(by.className("md-raised md-primary md-button ng-scope md-ink-ripple"));
    };
};

module.exports = CreateCaseWizardStep2;