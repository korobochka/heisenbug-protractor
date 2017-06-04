/**
 * Created by korobochka on 4/12/17.
 */
let MainPage = require('./07_main_page');

var AboutPage = function () {
    this.mainPage = new MainPage();

    this.moveToMainPage = function () {
        element(by.linkText('Home')).click();
        return this.mainPage;
    };

    this.title = function () {
        return element(by.tagName('h4')).getText();
    };
};


module.exports = AboutPage;