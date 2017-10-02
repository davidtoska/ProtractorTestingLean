'use strict'
var NewCaseDialog = require('../../dialogs/createCaseDialog');

var CasesPopover = function () {
    this.searchField = "";
    this.caseList = "";
    this.newCase = element(by.className("md-raised md-primary md-button md-ink-ripple"));

    this.getNewCaseDialog = function(){
        this.newCase.click();
        return new NewCaseDialog();
    };


};



module.exports = CasesPopover;