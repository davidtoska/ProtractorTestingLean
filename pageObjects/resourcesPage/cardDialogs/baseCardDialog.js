'use strict'

var BaseCardDialog = function () {
    this.exit = element(by.className('lb-dialog-close ng-scope'));
    this.title = element(by.model('$ctrl.data.title'));
    this.moreLess = element(by.className('button button-more ng-scope ng-binding'));
    this.save = element(by.buttonText('Save'));
    this.description = element(by.model('$ctrl.data.description'));
    this.delete = element(by.className('button button-remove ng-scope'));


    this.createNewCard = function (title, description) {
        this.title.sendKeys(title);
        this.moreLess.click();
        this.description.sendKeys(description);
        this.save.click();
    }

};

module.exports = BaseCardDialog;
