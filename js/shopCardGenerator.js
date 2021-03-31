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

// number of the filters
let filtersNumbers = 13;


// assign id to p tags in filters (filtrer names)
assignIdForFilters=()=>{
  for (let index = 1; index <= filtersNumbers; index++) {
        
        if (document.querySelector(`#accordion-${index} > span > p`).innerText==="حافظه") {

        }
       
  }
}


assignIdForFilters()



//
//
// filter function
//
//

document.getElementById("inConnectorOn").onchange = function () {
  for (let index = 1; index <= numberOfCards; index++) {
    if (this.checked) {
        let counter = 0;
      let pn1 = document.getElementById(`productName${index}`).innerText;
      
      if (
        (pn1.toUpperCase() ===
          pNameList[counter] && inConnectorList[counter] == "on")
          ) {
            document.getElementById(`card${index}`).classList.add("dn");  
          }
          counter++
        }else{
          
          document.getElementById(`card${index}`).classList.remove("dn");  
        }
        }
    };
    

