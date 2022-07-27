// ? Create the function which is responsible for deleting the product.

function deleteFromArray(arr, id) {
  let productsObjects = [...arr];
  productsObjects.forEach((obj, ind) => {
    if (obj.id === id) {
      productsObjects.splice(ind, 1);
    }
  });
  return productsObjects;
}

console.log(
  deleteFromArray(
    [
      { id: 0, name: "Mustafa Salem" },
      { id: 1, name: "Nader" },
    ],
    0
  )
);

module.exports = deleteFromArray;
