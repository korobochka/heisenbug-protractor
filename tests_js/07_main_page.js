/**
 * Created by korobochka on 4/12/17.
 */
let AboutPage = require('./07_about_page');

var MainPage = function () {
    this.aboutPage = new AboutPage();

    this.moveToAboutPage = function () {
        element(by.linkText('About')).click();
        return this.aboutPage;
    };

    this.title = function () {
        return browser.getTitle();
    };
};



module.exports = MainPage;