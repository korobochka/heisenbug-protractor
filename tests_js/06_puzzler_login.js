describe('Protractor Demo App', function() {
    beforeEach(function () {
        browser.get('http://localhost:8000/');
    });

    it('should have correct title on login page', function() {
        element(by.linkText('Login')).click();

        browser.ignoreSynchronization = true;

        expect(browser.getTitle()).toEqual('Login page');
    });
});

// TODO