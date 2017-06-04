describe('Protractor Demo App', function() {
    beforeEach(function () {
        browser.get('http://localhost:8000/');
    });


    const MainPage = require('./07_main_page');
    it('should work with circular deps', function () {
        let main = new MainPage();
        let about = main.moveToAboutPage();
        expect(about.title()).toEqual('About');


        browser.waitForAngular()
    });

});