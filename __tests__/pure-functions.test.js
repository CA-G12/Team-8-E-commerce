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
const deleteFromArray = require("../Seller/logic");

describe("Testing the function which is responsible for deleting from an array in Seller/logic.js", () => {
  it("Should return [{id: 0, name: 'Mustafa Salem'}], when ([{id: 0, name: 'Mustafa Salem'}, {id: 1, name: 'Nader'}], 0)", () => {
    const actual = deleteFromArray(
      [
        { id: 0, name: "Mustafa Salem" },
        { id: 1, name: "Nader" },
      ],
      0
    );
    const expected = [{ id: 1, name: "Nader" }];
    expect(actual).toStrictEqual(expected);
  });
  });
