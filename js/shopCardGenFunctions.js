//
//
// Part Functions
//
//
// toUpper = (x) => {
//   return x.toUpperCase();
// };
function shopCardCreator() {
  for (let index = 1; index <= numberOfCards; index++) {
    // creating new div
    var newDiv = document.createElement("div");
    document.getElementById("productGrid").appendChild(newDiv);
    // adding shopCard class to div
    newDiv.classList.add("shopCard");
    // defining id into our div
    newDiv.setAttribute("id", `card${index}`);

  }
}
var addSrc = function () {
  let counter = 0;
  for (let index = 1; index <= numberOfCards; index++) {
     // create image element
     let addImage = document.createElement("img");
     document.getElementById(`card${index}`).appendChild(addImage);
     // defining id into images
     addImage.setAttribute("id", `image${index}`);
    // adding src for image
    document
      .getElementById(`image${index}`)
      .setAttribute("src", monitorImagesSrc[counter]);

    // adding class for image
    document.getElementById(`image${index}`).classList.add("cardImg");
    counter++;
  }
};
addPnameSpan = () => {
  let counter = 0;
  for (let index = 1; index <= numberOfCards; index++) {
    //
    // create element
    //

    let productNameSpan = document.createElement("span");
    //
    // append
    //
    document.getElementById(`card${index}`).appendChild(productNameSpan);

    //
    // set id
    //
    productNameSpan.setAttribute("id", `productName${index}`);

    //
    // set class
    //
    document
      .getElementById(`productName${index}`)
      .classList.add("product-name");
  
    //
    // inner names
    //

    document.getElementById(`productName${index}`).innerHTML =
      pNameList[counter].toUpperCase();
    counter++;
  }
};
addPriceDiv = () => {
  let counter=0;
  for (let index = 1; index <= numberOfCards; index++) {
    let priceTagForGen = document.createElement("div");
    document.getElementById(`card${index}`).appendChild(priceTagForGen);
    //
    //set id to priceContainer
    //
    priceTagForGen.setAttribute("id", `priceContainer${index}`);

    //
    //append product price
    //
    let productPriceForGen = document.createElement("span");
    document
      .getElementById(`priceContainer${index}`)
      .appendChild(productPriceForGen);

    //
    //set id to product price
    //
    productPriceForGen.setAttribute("id", `productPrice${index}`);
    //
    //set class to product price
    //

    document
      .getElementById(`productPrice${index}`)
      .classList.add("product-price");

    //
    //inner product price
    //
    document.getElementById(`productPrice${index}`).innerHTML =
    pPriceList[counter];
      counter++
    /////////////////////
    //
    //append product price
    //
    let tomanForGen = document.createElement("span");
    document.getElementById(`priceContainer${index}`).appendChild(tomanForGen);

    //
    //set id to product price
    //
    tomanForGen.setAttribute("id", `tomanTag${index}`);
    //
    //set class to product price
    //
    document.getElementById(`tomanTag${index}`).classList.add("toman");
    //
    //inner product price
    //
    document.getElementById(`tomanTag${index}`).innerHTML = "تومان";
  }
};
addShopBtn = () => {
  for (let index = 1; index <= numberOfCards; index++) {
    //
    //append btn to cards
    //
    let shopBtnForGen = document.createElement("a");
    document.getElementById(`card${index}`).appendChild(shopBtnForGen);
    //
    //set id to btn
    //
    shopBtnForGen.setAttribute("id", `shopbtn${index}`);
    //
    //set class to btn
    //
    document.getElementById(`shopbtn${index}`).classList.add("shopBtn");
    //
    //inner btn
    //
    document.getElementById(`shopbtn${index}`).innerHTML = "خرید";
  }
};

addBtnSvg = () => {
  for (let index = 1; index <= numberOfCards; index++) {
    //
    //append btn to cards
    //
    let spanSvgForGen = document.createElement("span");
    document.getElementById(`shopbtn${index}`).appendChild(spanSvgForGen);
    //
    //set id to btn
    //
    spanSvgForGen.setAttribute("id", `btnSpanSvg${index}`);
    //
    //inner svg
    //
    document.getElementById(`btnSpanSvg${index}`).innerHTML = btnCardSvg;
  }
};
