function doInputAndClick1(nick, age) {
    element(by.model('nick')).clear();
    element(by.model('nick')).sendKeys(nick);
    element(by.model('age')).clear();
    element(by.model('age')).sendKeys(age);
    element(by.buttonText('Submit')).click();
}

function doInputAndClick4(nick, age) {
    let nameIn = element(by.css('.input-nick'));
    let ageIn = element(by.css('.input-age'));
    nameIn.clear();
    ageIn.clear();
    nameIn.sendKeys(nick);
    ageIn.sendKeys(age);
    element(by.css('.input-submit')).click();
}

module.exports.doInputAndClick1 = doInputAndClick1;
module.exports.doInputAndClick4 = doInputAndClick4;