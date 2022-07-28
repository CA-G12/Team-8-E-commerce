const { addNewProduct } = require("./logic");

// ? Creating the products array of objects.
let productsObjects = JSON.parse(localStorage.getItem("productsObject")) || [];

// ? Getting add new product button.
const addProductBtn = document.querySelector(".add-product");

// ? Targeting the add new button.
const addNewBtn = document.querySelector(".add-product-btn");

// ? Get the close icon and form section from HTML document.
const closeIcon = document.querySelector(".close-icon");
const formSection = document.querySelector(".form-section");

// ? Getting the input elements.
const nameInput = document.getElementById("name");
const detailsInput = document.getElementById("details");
const priceInput = document.getElementById("price");
const imageLinkInput = document.getElementById("link");
const categorySelect = document.getElementById("category");

// ? Creating the function which is responsible for adding to local storage.
function addToLocalStorage(key, source) {
  window.localStorage.setItem(key, JSON.stringify(source));
}

// ? Create the functions which is responsible for deleting a product.
function deleteProduct(arr, id) {
  const newArray = deleteFromArray(arr, id);
  addToLocalStorage("productsObject", newArray);
}

// ? Create the function which is for closing the form section.
function closeForm() {
  formSection.classList.remove("open");
  formSection.classList.add("close");
}

// ? Created the function that takes the data from the form and adds it as an object to local storage and array of objects.
let id = 0;
let newObj = {
  id: id++,
  name: nameInput.value,
  details: detailsInput.value,
  price: priceInput.value,
  imageLink: imageLinkInput.value,
  category: categorySelect.value,
};
productsObjects = addNewProduct(productsObjects, newObj, id);
addToLocalStorage("productsObject", productsObjects);

// ? Adding the function that is responsible for opening the form section.
function addNewBtnFunc() {
  formSection.classList.remove("close");
  formSection.classList.add("open");
}

// ? Adding event listener to add product button.
addProductBtn.addEventListener("click", () => {
  addNewProduct();
  closeForm();
});

// ? Adding add event listener to add new button.
addNewBtn.addEventListener("click", addNewBtnFunc);

// ? Adding the product array of objects to local storage.
addToLocalStorage("productsObject", productsObjects);

// ? Adding the event listener to the close icon.
closeIcon.addEventListener("click", closeForm);
