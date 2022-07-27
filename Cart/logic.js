function getAllTheCount(testObject) {
  let sum = 0;
  for (let i = 0; i < productsObjects.length; i++) {
    sum += productsObjects[i].price;
  }
  return sum;
}
console.log(getAllTheCount());
