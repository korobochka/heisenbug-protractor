const doInputAndClick = require('./helpers').doInputAndClick4;

describe('Protractor Demo App', function() {
    beforeEach(function () {
        browser.get('http://localhost:8000/');
    });

    it('should display consistent info in list', function() {
        (async function() {
            doInputAndClick('Nick', '17');

            let listItem = element.all(by.className('results-item')).get(0);
            let nick = await listItem.all(by.tagName('td')).get(1).getText();
            let age = listItem.all(by.tagName('td')).get(2).getText();
            let actualNickname = listItem.element(by.className('results-result')).getText();

            expect(actualNickname).toEqual(await nick + (2017 - await age));
        })();
    });
});