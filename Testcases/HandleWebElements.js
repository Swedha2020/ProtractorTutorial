describe("HandleWebElementSuite",function(){
    it("webelements in AngularJS", function(){
        browser.get("https://www.trycatchclasses.com/code/demo/angular_crud/#");
        browser.sleep(3000);
        
        element(by.css('[ng-click="addUser()"]')).click();

        element(by.model("UserFirstname")).sendKeys("Meenu");
        element(by.model("UserLastname")).sendKeys("kutty");
        element(by.model("UserType")).sendKeys("5");
        element(by.model("UserActive")).click()

        element(by.css('[ng-click="AddUpdateUser()"]'));
        browser.sleep(3000);
        let alert=browser.switchTo().alert();
        expect(alert.getText()).toEqual("User Information Added Successfully");

        alert.accept();
        browser.sleep(3000);

        element(by.model("search.type")).element(by.css('option[value="number:2"]'));
        browser.sleep(3000);



    })
})