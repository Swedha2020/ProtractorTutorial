describe("Frames TEst Suite", function(){
    it("Test Case1", function(){
        browser.waitForAngularEnabled(false)
        browser.get("https://www.selenium.dev/selenium/docs/api/java/index")
        
        browser.switchTo().frame("packageListFrame");
        element(by.linkText("org.openqa.selenium")).click();
        browser.sleep(3000);
        browser.switchTo().defaultContent();

        browser.switchTo().frame("packageFrame");
        element(by.linkText("WebElement")).click();
        browser.sleep(3000);
        browser.switchTo().defaultContent();

        browser.switchTo().frame("classFrame");
        element(by.xpath("/html/body/div[1]/ul/li[6]")).click();
        browser.sleep(3000);
        
    })
})