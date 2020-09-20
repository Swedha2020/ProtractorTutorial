describe("MouseHoverSuite",function(){
    it("MouseHoverTest1",function(){

        browser.waitForAngularEnabled(false)
        browser.get("https://opensource-demo.orangehrmlive.com/");
        browser.manage().window().maximize();

        element(by.id("txtUsername")).sendKeys("Admin")
        element(by.id("txtPassword")).sendKeys("admin123")
        element(by.id("btnLogin")).click();

        browser.sleep(3000)

        var admin=element(by.id("menu_admin_viewAdminModule"));
        var usermgmt=element(by.id("menu_admin_UserManagement"));
        var users=element(by.id("menu_admin_viewSystemUsers"));

        browser.actions().mouseMove(admin).mouseMove(usermgmt).mouseMove(users).click().perform();

        browser.sleep(6000);

    })
})