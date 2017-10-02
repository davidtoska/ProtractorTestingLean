/**
 * Created by David Aleks Toska on 09/19/2017.
 */
'use strict'

var BaseCardDialog = require('./baseCardDialog');

var Name = function () {
    this.base = new BaseCardDialog();

    this.createNewCard = function (title, description) {
        this.base.createNewCard(title, description);
    };
};

module.exports = Name;