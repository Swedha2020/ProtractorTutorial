describe("Mysuite",function(){
    beforeAll(function(){
        browser.get("https://dassdevarajan.github.io/demo-app/");
        browser.sleep(3000);
    })
    
    it("Table view",function(){
        let Name="1001 Activities Book";
        let Description="Designed for preschool kids, the 1001 Activities Book is an educational activity book that promises to engage tiny tots with their first educative lessons in a playful and fun-filled manner.";
        let Category="Books";
        let Quantity="300";
        let Unitprice="4";
        let Supplier="ABC Publications";
        let Returnable="false";

        element.all(by.tagName("tr")).last().element(by.id("view")).click();
        expect(element(by.tagName("h3")).getText()).toBe("Product View");

        expect(element.all(by.tagName("tr")).first().element(by.tagName("td")).getText()).toBe(Name);
        expect(element.all(by.tagName("tr")).get(1).element(by.tagName("td")).getText()).toBe(Description);
        expect(element.all(by.tagName("tr")).get(2).element(by.tagName("td")).getText()).toBe(Category);
        expect(element.all(by.tagName("tr")).get(3).element(by.tagName("td")).getText()).toBe(Quantity);
        expect(element.all(by.tagName("tr")).get(4).element(by.tagName("td")).getText()).toBe(Unitprice);
        expect(element.all(by.tagName("tr")).get(5).element(by.tagName("td")).getText()).toBe(Supplier);
        expect(element.all(by.tagName("tr")).get(6).element(by.tagName("td")).getText()).toBe(Returnable);

    })

    it("View Product List",function(){
        element(by.id("list-menu")).click();
        browser.sleep(3000);
        expect(element(by.tagName("h3")).getText()).toBe("Product List");
    })

    it("Delete items",function(){
        element.all(by.tagName("tr")).get(1).element(by.id("delete")).click();
        browser.sleep(3000);
    })

})