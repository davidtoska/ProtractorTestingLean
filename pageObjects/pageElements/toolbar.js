'use strict'
var CasesPopover = require('./popovers/casesPopover');
var BoardsMenuPopover = require('./popovers/boardsMenuPopover');

var Toolbar = function () {
    this.boards = element(by.css("toolbar-boards"));
    this.overview = element(by.className("mm-btn mm-item-link overview-btn ng-scope"));
    this.share = element(by.className("mm-btn mm-item-link invite-btn"));
    this.more = element(by.className("mm-icon mm-icon-about"));
    this.cases = element(by.className("mm-icon mm-icon-cases"));
    this.avatar = element(by.className("avatar-icon"));

    this.getCasesPopover = function () {
        this.cases.click();
        return new CasesPopover();
    };

    this.getBoardsMenuPopover = function () {
         this.boards.click();
         return new BoardsMenuPopover();
    };

};

module.exports = Toolbar;