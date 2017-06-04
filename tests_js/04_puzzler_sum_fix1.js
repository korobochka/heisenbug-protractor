const doInputAndClick = require('./helpers').doInputAndClick4;

describe('Protractor Demo App', function() {
    beforeEach(function () {
        browser.get('http://localhost:8000/');
    });

    it('should display consistent info in list', function() {
        doInputAndClick('Nick', '17');

        let listItem = element.all(by.className('results-item')).get(0);
        let nick = listItem.all(by.tagName('td')).get(1).getText();
        let age = listItem.all(by.tagName('td')).get(2).getText();

        let actualNickname = listItem.element(by.className('results-result')).getText();

        Promise.all([nick, age]).then(function([nick, age]) {
            expect(actualNickname).toEqual(nick + (2017 - age));
        });
    });
});