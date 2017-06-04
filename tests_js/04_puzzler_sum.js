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

        expect(actualNickname).toEqual(nick + (2017 - age));
    });

    // Варианты ответа:
    // 1. Тест пройдёт
    // 2. Undefined is not a function
    // 3. Fail: Expected 'Nick2000' to equal '[object Object]'.
    // 4. Fail: Expected '[object Object]NaN' to equal 'Nick2000'.

});