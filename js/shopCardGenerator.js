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
      document.getElementById(`card${index}`).classList.add("fade");

      setTimeout(function () {
        document.getElementById(`card${index}`).classList.add("dn");
      }, 700);
    }
    counter++;
  }
};
let filterFunction2 = () => {
  for (let index = 1; index <= numberOfCards; index++) {
    document.getElementById(`card${index}`).classList.remove("dn");
    setTimeout(function () {
      document.getElementById(`card${index}`).classList.add("show");
    }, 300);
  }
};

////
//// slecting the on and off buttons in filter items
////
let onBtnFilter = $(".filterItems > span:first-child").children("input");
let offBtnFilter = $(".filterItems > span:last-child").children("input");

//////
///////
/////// functions set (on) on buttons تابع برای دارد ها
///////
///////
onBtnFilter.each(function () {
  $(this).change(function () {
    arrayName = $(this).attr("id") + "List";
    if (this.checked) {
      filterFunction1("off");
    } else {
      filterFunction2();
    }
  });
});
//////
///////
/////// functions set (off) on buttons تابع برای ندارد ها
///////
///////
offBtnFilter.each(function () {
  $(this).change(function () {
    arrayName =
      $(this).parent("span").prev("span").children("input").attr("id") + "List";

    if (this.checked) {
      filterFunction1("on");
    } else {
      filterFunction2();
    }
  });
});
