describe('Protractor Demo App', function() {
    beforeEach(function () {
        browser.get('http://localhost:8000/');
    });



    function doInputAndClick(nick, age) {
        element(by.css('.input-nick')).sendKeys(nick);
        console.log('INSERTED NICK');

        element(by.id('MISTAKE')).click();

        element(by.css('.input-age')).sendKeys(age);
        console.log('INSERTED AGE');

        element(by.css('.input-submit')).click();
        console.log('CLICKED THE BUTTON');
    }

    it('should print correct logs', function() {
        doInputAndClick('Nick', '17');
    });

    // Варианты ответа:
    // 1. Undefined is not a function
    // 2. Пройдёт, но не выведется
    // 3. Выведется одно сообщение
    // 4. Все сообщения выведутся
});