

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
module.exports= {addToCart , totalPrice}; 