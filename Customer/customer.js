let products_section = document.querySelector(".products");

let productsObject = [
  { id: 1, name: "Coffe" },
  { id: 2, name: "Tea" },
];
let id = 1; 
const displayAllProducts = () => {
  console.log("in dislpay");
  productsObject.forEach((object) => {
    console.log(object);
    let newProduct =
      `<section class="product" data-id="${id++}">
        <h2 class="name">` +
      object.name +
      `</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq85Yeu8djaAGvsk1rxT4DNxBHBFEkTCr6FQ&usqp=CAU"
          alt="Americano"
          class="image"
        />
        <p class="price">Price: $<span>5</span></p>
        <p class="details">
          Caffè Americano is a type of coffee drink prepared by diluting an
          espresso with hot water, giving it a similar strength to, but
          different flavor from, traditionally brewed coffee
        </p>
        <div class="in-line">
          <p class="category">Category: Americano</p>
          <button class = "add-to-cart"><i class="fa-solid fa-cart-shopping fa-2xl"></i></button>
        </div>
      </section>`;
      console.log(newProduct); 
    products_section.innerHTML = newProduct + products_section.innerHTML;
  });
};
let inCart = [];
localStorage.setItem("in-cart", JSON.stringify(inCart));
addEventListener("DOMContentLoaded", function () {
  displayAllProducts();
  let addBtn = document.querySelectorAll(".add-to-cart");
  console.log(addBtn);
  addBtn.forEach((button) => {
    button.addEventListener("click", function (e) {

      console.log( e.target.parentElement.parentElement.parentElement.children[2].children[0].textContent); 
      let item = {
        name: e.target.parentElement.parentElement.parentElement.children[0].textContent,
        amount: 1,
        price: e.target.parentElement.parentElement.parentElement.children[2].children[0].textContent,
        id: e.target.parentElement.parentElement.parentElement.dataset.id, 
      };
      if (JSON.parse(localStorage.getItem("in-cart")) === null) {
        inCart.push(item);
        localStorage.setItem("in-cart", JSON.stringify(inCart));
      } else {
        const localItems = JSON.parse(localStorage.getItem("in-cart"));
        localItems.forEach((data) => {
          console.log(item.id , data)
          if (item.id == data.id) {
            item.amount = data.amount +1;
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
