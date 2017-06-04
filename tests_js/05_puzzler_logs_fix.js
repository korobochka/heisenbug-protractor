describe('Protractor Demo App', function() {
    beforeEach(function () {
        browser.get('http://localhost:8000/');
    });

    function log(text) {
        protractor.promise.controlFlow().execute(function () {
            console.log(text);
        });
    }

    it('should print correct logs', function() {
        let nameIn = element(by.className('input-nick'));
        let ageIn = element(by.className('input-age'));
        let button = by.className('input-submit');



        nameIn.clear();
        nameIn.sendKeys('Nick');
        log('INSERTED FIRST TEXT');

        element(by.id('thisIdDoesNotExist')).click(); // <<--------------------------

        ageIn.clear();
        ageIn.sendKeys('15');
        log('INSERTED SECOND TEXT');

        element(button).click();
        log('CLICKED THE BUTTON');
    });
});