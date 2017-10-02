'use strict'

 var BaseCardDialog = require('./baseCardDialog');

var EmployeesAndPartners = function () {
    var base = new BaseCardDialog();

    this.createNewCard = function (title, description) {
        base.createNewCard(title, description);
    }
};

module.exports = EmployeesAndPartners;