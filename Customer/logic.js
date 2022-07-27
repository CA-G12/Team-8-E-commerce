

const addToCart = (array, object) => {
  let newArr = [...array]; 
  newArr.push(object)
  return newArr; 
};

console.log(addToCart([
  { id: 1, name: "Coffee1" },
  { id: 2, name: "Coffee2" }
], {  id: 3, name: "Coffee3"}))

module.exports= addToCart; 

// console.log("in add to cart function");
// let item = {
//   name: e.target.parentElement.parentElement.children[0],
//   amount: 1,
//   price: e.target.parentElement.parentElement.children[2],
// };
// price += e.target.parentElement.parentElement.children[2];
// if (JSON.parse(localStorage.getItem("in-cart")) === null) {
//   inCart.push(item);
//   localStorage.setItem("in-cart", JSON.stringify(inCart));
//   localStorage.setItem("total-price", JSON.stringify(price));
// } else {
//   const localItems = JSON.parse(localStorage.getItem("in-cart"));
//   localItems.map((data) => {
//     if (item.id == data.id) {
//       item.amount++;
//     } else {
//       inCart.push(data);
//     }
//   });
//   inCart.push(item);
//   localStorage.setItem("in-cart", JSON.stringify(inCart));
// }