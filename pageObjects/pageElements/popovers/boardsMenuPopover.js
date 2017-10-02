'use strict'

var BoardChooserDialog = require('../../dialogs/boardChooserDialog');
var ResourcesPage = require('../../resourcesPage/resourcesPage');


var BoardsMenuPopover = function () {


    var navMenuItems = element(by.className("nav-menu")).all(by.tagName('li'));

    this.mainBtn = navMenuItems.get(0);
    this.resources = navMenuItems.get(1);
    this.businessIdea = navMenuItems.get(2);
    this.businessModel = navMenuItems.get(3);
    this.gaps = navMenuItems.get(4);
    this.objectives = navMenuItems.get(5);
    this.risks = navMenuItems.get(6);
    this.tasks = navMenuItems.get(7);
    this.overview = navMenuItems.get(8);
    this.tests = navMenuItems.get(9);

    /**
     * Returns the resoursesPage-object
     */
    this.getResoursesPage = function () {
        this.resources.click();
        
        return new ResourcesPage();
    };
};

module.exports = BoardsMenuPopover;