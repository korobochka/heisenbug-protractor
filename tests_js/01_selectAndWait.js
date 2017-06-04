describe('Protractor Demo App', function() {
    beforeEach(function () {
        browser.get('http://localhost:8001/');
    });



    function doInputAndClick(nick, age) {
        element(by.model('nick')).clear();
        element(by.model('nick')).sendKeys(nick);
        element(by.model('age')).clear();
        element(by.model('age')).sendKeys(age);
        element(by.buttonText('Submit')).click();
    }


    it('should add latest result to history', function() {
        doInputAndClick('Korobochka', '17');

        let fistRow = element.all(by.repeater('result in memory')).get(0);
        let firstRowResult = fistRow.element(by.binding('result.result'));

        expect(firstRowResult.getText()).toEqual('Korobochka2000');
    });






});