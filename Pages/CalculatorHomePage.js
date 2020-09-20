let CalculatorHomePage = function(){

    let first_Input = element(by.model('first'));
    let second_Input = element(by.model('second'));
    let go_Button = element(by.id('gobutton'));
    
    this.get = function(url){
        browser.get(url);
        browser.sleep(1000);
    };
    
    this.enterFirstNumber = function(firstNum){

        first_Input.sendKeys(firstNum);
    };

    this.enterSecondNumber = function(secondNum){
        second_Input.sendKeys(secondNum);
    };

    this.clickGo = function(){
        go_Button.click();
    };

    this.verifyResult = function(expresult){
    let result= element(by.cssContainingText('.ng-binding', expresult)).getText();
    expect(result).toBe(expresult);
    browser.sleep(3000);
    };
}

module.exports = new CalculatorHomePage();