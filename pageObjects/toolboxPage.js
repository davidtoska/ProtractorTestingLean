'use strict'

var Navigation = require("./pageElements/navigation.js");
var Toolbar = require('./pageElements/toolbar');
var ResourcesPage = require('./resourcesPage/resourcesPage');

var ToolboxPage = function () {

    this.navigation = new Navigation();
    this.toolbar = new Toolbar();

    //Main canvas elements
    this.resourcesCanvas = element(by.css("nav-canvas-resources"));
    this.overviewCanvas  = element(by.css("nav-canvas-overview"));
    this.ideaCanvas = element(by.css("nav-canvas-idea"));
    this.modelCanvas = element(by.css("nav-canvas-model"));
    this.objectivesCanvas = element(by.css("nav-canvas-objectives"));
    this.tasksCanvas = element(by.css("nav-canvas-tasks"));
    this.gapCanvas = element(by.css("nav-canvas-gap"));
    this.risksCanvas = element(by.css("nav-canvas-risks"));


    //Logo
    this.topLogo = element(by.css("lean-business-logo"));

    this.getResourcesPage = function () {
        this.resourcesCanvas.click();
        browser.sleep(1000);
        return new ResourcesPage();
    };

};

module.exports = ToolboxPage;


