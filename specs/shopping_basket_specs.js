var assert = require("assert");
var Item = require("../item");
var ShoppingBasket = require("../shopping_basket");

var item;
var item2;
var item3;
var item4;
var shoppingBasket;
var shoppingBasket2;



describe("Shopping Basket", function(){

  beforeEach(function (){
    item = new Item("chicken", 3, false);
    item2 = new Item("vegetables", 2, false);
    item3 = new Item("caviar", 15, false);
    item4 = new Item("toilet paper", 4, true);
    shoppingBasket = new ShoppingBasket(false);
    shoppingBasket2 = new ShoppingBasket(true);
    console.log(shoppingBasket);
  });

  it("Shopping basket starts empty", function(){
    assert.strictEqual(shoppingBasket.items.length, 0);
  });

  it("Shopping can add items", function(){
    shoppingBasket.addItem(item);
    assert.strictEqual(shoppingBasket.items.length, 1);
  });

  it("Shopping can remove items", function(){
    shoppingBasket.addItem(item);
    shoppingBasket.removeItem(item);
    assert.strictEqual(shoppingBasket.items.length, 0);
  });

  it("Shopping basket can calculate total amount", function(){
    shoppingBasket.addItem(item);
    shoppingBasket.addItem(item2);
    assert.strictEqual(shoppingBasket.calculateTotal(), 5);
  });

  it("Shopping basket should apply discount if total >= 20", function() {
    shoppingBasket.addItem(item);
    shoppingBasket.addItem(item2);
    shoppingBasket.addItem(item3);
    assert.strictEqual(shoppingBasket.calculateTotal(), 18);
  })

  it("Shopping basket should apply discount if discount card present", function() {
    shoppingBasket2.addItem(item);
    shoppingBasket2.addItem(item2);
    assert.strictEqual(shoppingBasket2.calculateTotal(), 4.75);
  })

  it("Shopping basket should stack discounts", function () {
    shoppingBasket2.addItem(item);
    shoppingBasket2.addItem(item2);
    shoppingBasket2.addItem(item3);
    assert.strictEqual(Math.round( shoppingBasket2.calculateTotal() * 10) / 10, 17.1);
  })

  it("Shopping basket should use by one get one free", function () {
    shoppingBasket.addItem(item4);
    shoppingBasket.addItem(item4);
    assert.strictEqual(shoppingBasket.calculateTotal(), 4);
  })





});
