describe("My First Suite",function(){
    /*it("validate Title", function(){
        browser.get("https://angularjs.org/");
        browser.sleep(7000);
        browser.manage().window().maximize();
        //browser.waitForAngularEnabled(true);
        expect(browser.getTitle()).toBe("AngularJS — Superheroic JavaScript MVW Framework");
    })*/

    it("validate URL", function(){
        browser.get("https://angularjs.org/");
        browser.sleep(7000);
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(true);
        expect(browser.getCurrentURL()).toBe("https://angularjs.org/");
    });
})