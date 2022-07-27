const addToCart = require('../Customer/logic.js')

test("adding to cart", function () {
  expect(
    addToCart([
      { id: 1, name: "Coffee1" },
      { id: 2, name: "Coffee2" }
    ], {  id: 3, name: "Coffee3"})
  ).toStrictEqual([
    { id: 1, name: "Coffee1" },
    { id: 2, name: "Coffee2" },
  {  id: 3, name: "Coffee3"}]);
});
