//
//
// Main Generator
//

//
shopCardGenerator = () => {
  shopCardCreator();
  addSrc();
  addPnameSpan();
  addPriceDiv();
  addShopBtn();
  addBtnSvg();
};
shopCardGenerator();

// number of filters
let filtersNumbers = 13;

let test = false;

const arrayFunction = function (id, index) {
  console.log(id);
  if (id == "inConnectorOnList") {
    id = inConnectorOnList[index];
  } else if (id == "sdOnList") {
    id = sdOnList[index];
  } else if (id == "phoneOnList") {
    id = phoneOnList[index];
  } else if (id == "openerOnList") {
    id = openerOnList[index];
    test = true;
  } else if (id == "touchOnList") {
    id = touchOnList[index];
  } else if (id == "cartOnList") {
    id = cartOnList[index];
  } else if (id == "telephoneOnList") {
    id = telephoneOnList[index];
  } else if (id == "cameraOnList") {
    id = cameraOnList[index];
  } else if (id == "twoPanelOnList") {
    id = twoPanelOnList[index];
  } else if (id == "guardOnList") {
    id = guardOnList[index];
  } else if (id == "lockOnList") {
    id = lockOnList[index];
  }

  return id;
};

let arrayName = "";
let filterFunction1 = () => {
  let counter = 0;
  for (let index = 1; index <= numberOfCards; index++) {
    if (arrayFunction(arrayName, index - 1) == "off") {
      document.getElementById(`card${index}`).classList.add("dn");
    }
    counter++;
  }
};
let filterFunction2 = () => {
  for (let index = 1; index <= numberOfCards; index++) {
    document.getElementById(`card${index}`).classList.remove("dn");
  }
};
let b = $(".filterItems > span:first-child").children("input");

b[2].onchange = function () {
  arrayName = $(this).attr("id") + "List";
  if (this.checked) {
    filterFunction1();
  } else {
    filterFunction2();
  }
};
b[3].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1();
  } else {
    filterFunction2();
  }
};
b[4].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1();
  } else {
    filterFunction2();
  }
};
b[5].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1();
  } else {
    filterFunction2();
  }
};
b[6].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1();
  } else {
    filterFunction2();
  }
};
b[7].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1();
  } else {
    filterFunction2();
  }
};
b[8].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1();
  } else {
    filterFunction2();
  }
};
b[9].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1();
  } else {
    filterFunction2();
  }
};
b[10].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1();
  } else {
    filterFunction2();
  }
};
b[11].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1();
  } else {
    filterFunction2();
  }
};
b[12].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1();
  } else {
    filterFunction2();
  }
};
