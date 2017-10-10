var assert = require("assert");
var Item = require("../item");

var item;



describe("Item", function () {

  beforeEach(function (){
    item = new Item("chicken", 3, false);
  });

  it("item has name", function () {
    assert.strictEqual(item.name, "chicken");

  });

  it("item has price", function () {
    assert.strictEqual(item.value, 3);

  });

  it("item has eligibility", function () {
    assert.strictEqual(item.eligible, false);

  });

});
