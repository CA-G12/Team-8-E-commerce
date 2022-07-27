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
