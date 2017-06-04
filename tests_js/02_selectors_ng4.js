const doInputAndClick = require('./helpers').doInputAndClick4;

describe('Protractor Demo App', function() {
    beforeEach(function () {
        browser.get('http://localhost:8000/');
    });

    it('should generate nickname correctly', function() {
        doInputAndClick('Korobochka', '17');
        expect(element(by.css('.results-item .results-result')).getText()).toEqual('Korobochka2000');
    });
});