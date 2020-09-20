let CalculatorHomePage = require('../Pages/CalculatorHomePage')

describe('Super calculator demo', function () {

    it('Addition', function () {

        CalculatorHomePage.get('https://juliemr.github.io/protractor-demo/');
        CalculatorHomePage.enterFirstNumber('2');
        CalculatorHomePage.enterSecondNumber('10');
        CalculatorHomePage.clickGo();
        CalculatorHomePage.verifyResult('12');
        
    })

})