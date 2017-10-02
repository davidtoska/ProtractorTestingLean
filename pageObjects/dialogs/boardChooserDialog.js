'use strict'

var BoardChooserDialog = function () {
    this.exitButton = element(by.className("lb-dialog-close ng-scope"));

    this.exit = function () {
        this.exitButton.click();
    };

};

module.exports = BoardChooserDialog;


