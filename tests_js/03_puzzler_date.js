const doInputAndClick = require('./helpers').doInputAndClick1;

describe('Protractor Demo App', function() {
    beforeEach(function () {
        browser.get('http://localhost:8001/');
    });

    it('should display correct date', function() {
        doInputAndClick('Nick', '17');
        let now = new Date();
        let listItem = element.all(by.repeater('result in results')).get(0);
        let time = listItem.element(by.binding('timestamp'));
        expect(time.getText()).toEqual(now.toLocaleTimeString());
    });

    // Варианты ответа:
    // 1. undefined is not a function
    // 2. Fail: мы ищем не тот элемент
    // 3. Fail: даты не совпадут
    // 4. Success!

});