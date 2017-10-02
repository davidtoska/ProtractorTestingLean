'use strict';

var LandingPage;
var ToolBoxPage = require("./toolboxPage");

LandingPage = function () {
    var toolboxPage = new ToolBoxPage();

    this.loginButton = element(by.css('div.welcome_button.login_btn'));
    this.emailField = element(by.id('email'));
    this.passwordField = element(by.model('$ctrl.ngModel'));
    this.submitButton = element(by.buttonText("Login"));


    this.get = function (url) {
        browser.get(url);
    };


    /**
     * The loggIn function returns a page-object that represents
     * the toolbox-page inside the application.
     * @param email
     * @param password
     */
    this.loggIn = function(email, password){
        this.loginButton.click();
        this.emailField.sendKeys(email);
        this.passwordField.sendKeys(password);
        this.submitButton.click();
        return toolboxPage;
    };
    
};

module.exports = LandingPage;