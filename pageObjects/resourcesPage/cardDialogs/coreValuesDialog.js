'use strict'

var BaseCardDialog = require('./baseCardDialog');

var CoreValues = function () {

    var base = new BaseCardDialog();

    this.createNewCard = function (title, description) {
        base.createNewCard(title, description);
    };

    this.deleteCard = function () {
        base.delete.click();
    };

};


module.exports = CoreValues;