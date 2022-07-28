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

// ? Adding the function for adding a new object to an array of objects
function addNewProduct(arr, obj, id) {
  const newArr = [...arr];
  newArr.push({...obj, id: id});
  return newArr;
}

module.exports = {
  deleteFromArray,
  addNewProduct,
};
