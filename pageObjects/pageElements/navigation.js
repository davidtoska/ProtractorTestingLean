'use strict'

var BoardChooserDialog = require('../dialogs/boardChooserDialog');

var Navigation = function () {
    this.resources = element(by.className("inner-item resources resourcesColor"));
    this.ideas = element(by.className("inner-item ideas ideasColor"));
    this.model = element(by.className("inner-item models modelsColor"));
    this.gaps = element(by.className("inner-item gaps gapsColor"));
    this.objectives = element(by.className("inner-item objectives objectivesColor"));
    this.risks = element(by.className("inner-item risks risksColor"));
    this.tasks = element(by.className("inner-item tasks tasksColor"));
    this.boardselector = element(by.css("a.md-button.md-ink-ripple"));

    this.boardChooser = function () {
        element(by.css("a.md-button.md-ink-ripple")).click();
        return new BoardChooserDialog();
    };
};

module.exports = Navigation;