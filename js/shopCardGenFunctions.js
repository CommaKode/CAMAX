
//
//
// Part Functions 
//
//
toUpper = (x) => {
    return x.toUpperCase();
  };
  var shopCardCreator = function () {
    for (let index = 1; index <= numberOfCards; index++) {
      // creating new div
      var newDiv = document.createElement("div");
      document.getElementById("productGrid").appendChild(newDiv);
      // adding shopCard class to div
      newDiv.classList.add("shopCard");
      // defining id into our div
      newDiv.setAttribute("id", `card${index}`);
      // create image element
      let addImage = document.createElement("img");
      document.getElementById(`card${index}`).appendChild(addImage);
      // defining id into images
      addImage.setAttribute("id", `image${index}`);
    }
  };

  var addSrc = function () {
    for (let index = 0; index < imagesSrc.length; index++) {
      // adding src for image
      cardCounter++;
      document
        .getElementById(`image${cardCounter}`)
        .setAttribute("src", imagesSrc[index]);
      // adding class for image
      document
        .getElementById(`image${cardCounter}`)
        .classList.add("cardImg");
    }
  };
  addPnameSpan = () => {
    for (let index = 1; index <= numberOfCards; index++) {
      //    const element = array[index];
      let productNameSpan = document.createElement("span");
      //
      // cardCounter++
      //
      document.getElementById(`card${index}`).appendChild(productNameSpan);
      productNameSpan.setAttribute("id", `productName${index}`);
      document
        .getElementById(`productName${index}`)
        .classList.add("product-name");
      //
      // to upperCase the monitor names
      //
      monitorNames = monitorNames.map(toUpper);
      document.getElementById(`productName${index}`).innerHTML =
        monitorNames[index];
    }
  };
  addPriceDiv = () => {
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
        priceMonitors[index];
      /////////////////////
      //
      //append product price
      //
      let tomanForGen = document.createElement("span");
      document
        .getElementById(`priceContainer${index}`)
        .appendChild(tomanForGen);

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
