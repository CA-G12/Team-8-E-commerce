const addToCart = (array, object) => {
  let newArr = [...array]; 
  newArr.push(object)
  return newArr; 
};
const totalPrice =(array)=>{
  let price = 0; 
  array.forEach(item=>{
    price +=item.price;
  })
  return price; 
}
const sortingByPrice = (array)=>{
  let newArr = [...array]; 
  newArr.sort((a, b) => a.price - b.price)
  return newArr; 
}
module.exports= {addToCart , totalPrice, sortingByPrice}; 