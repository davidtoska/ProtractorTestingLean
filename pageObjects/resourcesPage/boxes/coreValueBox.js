/**
 * Created by David Aleks Toska on 09/21/2017.
 */
var CoreValuesDialog = require('../cardDialogs/coreValuesDialog');


var CoreValueBox = function () {
    this.box = element(by.tagName('resources-board')).all(by.tagName('board-box')).get(0);
    this.cardList = this.box.all(by.tagName('sticky'));


    this.getNumberOfCards = function () {
        return this.cardList.count();
    };


    this.deleteTopCard = function () {
        this.cardList.get(0).click();
        let coreValueDialog = new CoreValuesDialog();
        browser.sleep(1000);
        coreValueDialog.deleteCard();
        browser.sleep(1000);
    };

};

module.exports = CoreValueBox;