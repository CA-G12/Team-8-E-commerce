// ? Creating the products array of objects.
let productsObjects = JSON.parse(localStorage.getItem("productObject")) || [];

// ? Creating the function which is responsible for adding to local storage.
function addToLocalStorage(key, source) {
  window.localStorage.setItem(key, JSON.stringify(source));
}

// ? Adding the product array of objects to local storage.
addToLocalStorage("productObject", productsObjects);

// ? Create the functions which is responsible for deleting a product.
function deleteProduct(arr, id) {
  const newArray = deleteFromArray(arr, id);
  addToLocalStorage("productObject", newArray);
}
