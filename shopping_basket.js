var ShoppingBasket = function (hasDiscountCard) {
  this.items = [];
  this.hasDiscountCard = hasDiscountCard;
};

ShoppingBasket.prototype.addItem = function (item) {
  this.items.push(item);
};

ShoppingBasket.prototype.removeItem = function (item) {
  var index = this.items.indexOf(item);
  this.items.splice(index, 1);
}

ShoppingBasket.prototype.calculateTotal = function () {
  var total = 0;
  for (item of this.items){
    total += item.value;
  }
  if (this.secondFreeDiscountApplicable()){
    var freeItem = this.getSecondItemFree();
    console.log("Free item price", freeItem);
    total -= freeItem;
  }
  if (total >= 20) {
    total *= 0.9;
  }
  if (this.hasDiscountCard) {
    total *= 0.95;
  }
  return total;
};

ShoppingBasket.prototype.secondFreeDiscountApplicable = function () {
  var discountApplicable = false;
  for (item of this.items){
    if (item.eligible) discountApplicable = true;
  }
  return discountApplicable;
}

ShoppingBasket.prototype.getSecondItemFree = function () {
  var eligibleItem = null;
  counter = 0;
    for (item of this.items) {
      if (item.eligible){
        counter += 1;
        eligibleItem = item;
      };
      console.log(counter);
    };
  console.log(eligibleItem.value);
  if (counter > 1) return eligibleItem.value;
}

module.exports = ShoppingBasket;
