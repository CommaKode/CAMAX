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

// document.getElementById("inConnectorOn").onchange = function () {
//   for (let index = 1; index <= numberOfCards; index++) {
//     if (this.checked) {
//         let counter = 0;
//       let pn1 = document.getElementById(`productName${index}`).innerText;

//       if (
//         (pn1.toUpperCase() ===
//           pNameList[counter] && inConnectorList[counter] == "on")
//           ) {
//             document.getElementById(`card${index}`).classList.add("dn");
//           }
//           counter++
//         }else{

//           document.getElementById(`card${index}`).classList.remove("dn");
//         }
//         }
//     };

// number of filters
let filtersNumbers = 13;

// assign id to p tags in filters (filtrer names)
assignIdForFilters = () => {
  for (let index = 1; index <= filtersNumbers; index++) {
    if (
      document.querySelector(`#accordion-${index} > span > p`).innerText ===
      "ازتباط داخلی"
    ) {
      document.querySelector(
        `#filterItems${index} > span:first-child > input`
      ).onchange = function () {
        if (this.checked) {
          let counter = 0;
          let pn1 = document.getElementById(`productName${index}`).innerText;
          
          let optionList = $(
            `#filterItems${index} span:first-child input`
          ).attr("id");

          if (
            pn1.toUpperCase() === pNameList[counter] &&
            `${optionList}List`[counter] == "on"
          ) {
            document.getElementById(`card${index}`).classList.add("dn");
          }
          counter++;
        }else {
                document.getElementById(`card${index}`).classList.remove("dn");
              }
      };
    }
  }
};

assignIdForFilters();




let optionList = $(
  `#filterItems4 span:first-child input`
).attr("id")+"List";
let b = optionList
console.log(optionList)
console.log(inConnectorOnList[4])
console.log(optionList[4])





//
//
// filter function
//
//

// document.getElementById("inConnectorOn").onchange = function () {
//   for (let index = 1; index <= numberOfCards; index++) {
//     if (this.checked) {
//       let counter = 0;
//       let pn1 = document.getElementById(`productName${index}`).innerText;

//       if (
//         pn1.toUpperCase() === pNameList[counter] &&
//         inConnectorList[counter] == "on"
//       ) {
//         document.getElementById(`card${index}`).classList.add("dn");
//       }
//       counter++;
//     } else {
//       document.getElementById(`card${index}`).classList.remove("dn");
//     }
//   }
// };
