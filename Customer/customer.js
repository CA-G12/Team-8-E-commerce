
let productsSection = document.querySelector(".products");
let productsObjects = localStorage.getItem("productsObjects");
const displayAllProducts = (arrayOfProducts) => {
  console.log(arrayOfProducts); 
  JSON.parse(arrayOfProducts).forEach((object) => {
    console.log(object);
    let newProduct =
      `<section class="product" data-id="${object.id}">
        <h2 class="name">` +
      object.name +
      `</h2>
        <img
          src="${object.imageLink}"
          alt="Americano"
          class="image"
        />
        <p class="price">Price: $<span>${object.price}</span></p>
        <p class="details">
         ${object.imageLink}
        </p>
        <div class="in-line">
          <p class="category">Category: ${object.category}</p>
          <button class = "add-to-cart"><i class="fa-solid fa-cart-shopping fa-2xl"></i></button>
        </div>
      </section>`;
    console.log(newProduct);
    productsSection.innerHTML = newProduct + productsSection.innerHTML;
  });
}
//make array with the products in the cart
let inCart = [];
localStorage.setItem("in-cart", JSON.stringify(inCart));
addEventListener("DOMContentLoaded", function () {
  displayAllProducts(productsObjects);
  let addBtn = document.querySelectorAll(".add-to-cart");
  console.log(addBtn);
  addBtn.forEach((button) => {
    button.addEventListener("click", function (e) {
      console.log(
        e.target.parentElement.parentElement.parentElement.children[2]
          .children[0].textContent
      );
      let item = {
        id: e.target.parentElement.parentElement.parentElement.dataset.id,
        name: e.target.parentElement.parentElement.parentElement.children[0]
          .textContent,
        price:
          e.target.parentElement.parentElement.parentElement.children[2]
            .children[0].textContent,
        details: e.target.parentElement.parentElement.parentElement.children[3],
        category: e.target.parentElement.children[0].children[0],
        amount: 1,
      };
      if (JSON.parse(localStorage.getItem("in-cart")) === null) {
        inCart.push(item);
        localStorage.setItem("in-cart", JSON.stringify(inCart));
      } else {
        const localItems = JSON.parse(localStorage.getItem("in-cart"));
        localItems.forEach((data) => {
          console.log(item.id, data);
          if (item.id == data.id) {
            item.amount = data.amount + 1;
          } else {
            inCart.push(data);
          }
        });
        inCart.push(item);
        localStorage.setItem("in-cart", JSON.stringify(inCart));
      }

      localStorage.setItem("in-cart", JSON.stringify(addToCart(inCart, item)));
    });
  });
});
//Calcualte the total price and add it to local storage
localStorage.setItem("total-price", JSON.stringify(totalPrice(inCart)));
//sorting by price
// let sortByPriceBtn = document.querySelector('#display-types')
// console.log(sortByPriceBtn.value)


