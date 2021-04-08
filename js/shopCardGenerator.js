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
//////
////// array function to check and set the option arrays
/////
const arrayFunction = function (id, index) {
  if (id == "inConnectorOnList") {
    id = inConnectorOnList[index];
  } else if (id == "sdOnList") {
    id = sdOnList[index];
  } else if (id == "phoneOnList") {
    id = phoneOnList[index];
  } else if (id == "openerOnList") {
    id = openerOnList[index];
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
///
///
/// our functions for filtering
///
///

let arrayName = "";
let filterFunction1 = (setKey) => {
  let counter = 0;
  for (let index = 1; index <= numberOfCards; index++) {
    if (arrayFunction(arrayName, index - 1) == setKey) {
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

////
//// slecting the on and off buttons in filter items
////
let onBtnFilter = $(".filterItems > span:first-child").children("input");
let offBtnFilter = $(".filterItems > span:last-child").children("input");

//////
///////
/////// functions set on on buttons تابع برای دارد ها
///////
///////


onBtnFilter[2].onchange = function () {
  arrayName = $(this).attr("id") + "List";
  if (this.checked) {
    filterFunction1("off");
  } else {
    filterFunction2();
  }
};
onBtnFilter[3].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1("off");
  } else {
    filterFunction2();
  }
};
onBtnFilter[4].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1("off");
  } else {
    filterFunction2();
  }
};
onBtnFilter[5].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1("off");
  } else {
    filterFunction2();
  }
};
onBtnFilter[6].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1("off");
  } else {
    filterFunction2();
  }
};
onBtnFilter[7].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1("off");
  } else {
    filterFunction2();
  }
};
onBtnFilter[8].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1("off");
  } else {
    filterFunction2();
  }
};
onBtnFilter[9].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1("off");
  } else {
    filterFunction2();
  }
};
onBtnFilter[10].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1("off");
  } else {
    filterFunction2();
  }
};
onBtnFilter[11].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1("off");
  } else {
    filterFunction2();
  }
};
onBtnFilter[12].onchange = function () {
  arrayName = $(this).attr("id") + "List";

  if (this.checked) {
    filterFunction1("off");
  } else {
    filterFunction2();
  }
};
///////
///////
/////// functions set on off buttons تابع برای ندارد ها
///////
///////

offBtnFilter[2].onchange = function () {
  arrayName =
    $(this).parent("span").prev("span").children("input").attr("id") + "List";

  if (this.checked) {
    filterFunction1("on");
  } else {
    filterFunction2();
  }
};
offBtnFilter[3].onchange = function () {
  arrayName =
    $(this).parent("span").prev("span").children("input").attr("id") + "List";

  if (this.checked) {
    filterFunction1("on");
  } else {
    filterFunction2();
  }
};
offBtnFilter[4].onchange = function () {
  arrayName =
    $(this).parent("span").prev("span").children("input").attr("id") + "List";

  if (this.checked) {
    filterFunction1("on");
  } else {
    filterFunction2();
  }
};
offBtnFilter[5].onchange = function () {
  arrayName =
    $(this).parent("span").prev("span").children("input").attr("id") + "List";

  if (this.checked) {
    filterFunction1("on");
  } else {
    filterFunction2();
  }
};
offBtnFilter[6].onchange = function () {
  arrayName =
    $(this).parent("span").prev("span").children("input").attr("id") + "List";

  if (this.checked) {
    filterFunction1("on");
  } else {
    filterFunction2();
  }
};
offBtnFilter[7].onchange = function () {
  arrayName =
    $(this).parent("span").prev("span").children("input").attr("id") + "List";

  if (this.checked) {
    filterFunction1("on");
  } else {
    filterFunction2();
  }
};
offBtnFilter[8].onchange = function () {
  arrayName =
    $(this).parent("span").prev("span").children("input").attr("id") + "List";

  if (this.checked) {
    filterFunction1("on");
  } else {
    filterFunction2();
  }
};
offBtnFilter[9].onchange = function () {
  arrayName =
    $(this).parent("span").prev("span").children("input").attr("id") + "List";

  if (this.checked) {
    filterFunction1("on");
  } else {
    filterFunction2();
  }
};
offBtnFilter[10].onchange = function () {
  arrayName =
    $(this).parent("span").prev("span").children("input").attr("id") + "List";

  if (this.checked) {
    filterFunction1("on");
  } else {
    filterFunction2();
  }
};
offBtnFilter[11].onchange = function () {
  arrayName =
    $(this).parent("span").prev("span").children("input").attr("id") + "List";

  if (this.checked) {
    filterFunction1("on");
  } else {
    filterFunction2();
  }
};
offBtnFilter[12].onchange = function () {
  arrayName =
    $(this).parent("span").prev("span").children("input").attr("id") + "List";

  if (this.checked) {
    filterFunction1("on");
  } else {
    filterFunction2();
  }
};
