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
// console.log(pNameList[0])  


    
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
    

