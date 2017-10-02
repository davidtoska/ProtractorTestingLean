'use strict'

var BaseCardDialog = require('./baseCardDialog');


var CompanyVision = function () {
    var base = new BaseCardDialog();

    this.createCompanyVision = function (title, description) {
        base.createNewCard(title, description);
    };

};

module.exports = CompanyVision;