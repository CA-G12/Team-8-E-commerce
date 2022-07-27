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

// ? Get the close icon and form section from HTML document.
const closeIcon = document.querySelector(".close-icon");
const formSection = document.querySelector(".form-section");

// ? Create the function which is for closing the form section.
function closeForm() {
  formSection.classList.add("close");
}

// ? Adding the event listener to the close icon.
closeIcon.addEventListener("click", closeForm);
