let getAllDataFromLocalStorage = JSON.parse(
  window.localStorage.getItem("productsObjects")
);


let productsObjects = [
  {
    id: 1,
    name: "Ahmed1",
    price: 10,
    details: "Product Text Details",
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq85Yeu8djaAGvsk1rxT4DNxBHBFEkTCr6FQ&amp;usqp=CAU",
  },
  {
    id: 2,
    name: "Ahmed2",
    price: 10,
    details: "Product Text Details",
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq85Yeu8djaAGvsk1rxT4DNxBHBFEkTCr6FQ&amp;usqp=CAU",
  },
  {
    id: 3,
    name: "Ahme3",
    price: 10,
    details: "Product Text Details",
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq85Yeu8djaAGvsk1rxT4DNxBHBFEkTCr6FQ&amp;usqp=CAU",
  },
  {
    id: 4,
    name: "Ahmed4",
    price: 10,
    details: "Product Text Details",
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq85Yeu8djaAGvsk1rxT4DNxBHBFEkTCr6FQ&amp;usqp=CAU",
  },
];


let forTitle = document.querySelector(".my-products1");
let title = document.createElement("section");
title.textContent = "My Products";
title.className="title";



forTitle.appendChild(title);



let onLoad = document.addEventListener(
    "DOMContentLoaded",
    importFromLocalStorage()
);


function importFromLocalStorage() {
    productsObjects.forEach((testObject) => {
    let cardDiv = document.createElement("section");
    let cardName = document.createElement("h2");
    let cardPrice = document.createElement("p");
    let cardImage = document.createElement("img");
    let cardDetails = document.createElement("p");
    let buttons = document.createElement("div");
    let countBnt1 = document.createElement("button");
    let deletBnt2 = document.createElement("button");

    

    buttons.appendChild(countBnt1);
    buttons.appendChild(deletBnt2);

    countBnt1.textContent ="count";
    deletBnt2.textContent = "Delete";

    deletBnt2.className ="button delete";
    buttons.className = "buttons";
    countBnt1.className = "button count"

    cardDiv.className = "product";
    cardName.className = "name";
    cardPrice.className = "price";
    cardImage.className = "image";
    cardDetails.className = "details";

    deletBnt2.className = "button delete";
    deletBnt2.onclick = (e) => {
            e.target.parentElement.parentElement.remove();
        }

    
    cardName.textContent = testObject.name;
  cardPrice.textContent = testObject.price;
  cardImage.src = testObject.imageLink;
  cardDetails.textContent = testObject.details;

  
  
  buttons.appendChild(countBnt1);
  buttons.appendChild(deletBnt2);
  
  cardDiv.appendChild(cardName);
  cardDiv.appendChild(cardImage);
  cardDiv.appendChild(cardDetails);
  cardDiv.appendChild(cardPrice);
  cardDiv.appendChild(buttons);
  title.appendChild(cardDiv);
});
}
