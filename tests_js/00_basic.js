describe('Protractor Demo App', function() {
    beforeEach(function () {
        browser.ignoreSynchronization = false;
        browser.get('http://localhost:8001/');
    });



    it('should have a page title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should have a document title', function() {
        expect(element(by.tagName('h3')).getText()).toEqual('Super Calculator');
    });


});