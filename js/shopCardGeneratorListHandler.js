

//
//
// number of cards
//
//
let myKey ="monitor";
let numberOfCards = monitorNames.length;
//
//
// Images SRC
//
//


//
// image addresses
//

//                        Images/Shop/monitors/---.png
//                        Images/Shop/panels/---.png
//                        Images/Shop/lateral/---.png

//
//
// svg variables
//
//

let btnCardSvg = `<svg
  width="19"
  height="18"
  viewBox="0 0 19 18"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.42878 18C7.13886 18 7.71449 17.4244 7.71449 16.7143C7.71449 16.0042 7.13886 15.4286 6.42878 15.4286C5.7187 15.4286 5.14307 16.0042 5.14307 16.7143C5.14307 17.4244 5.7187 18 6.42878 18Z"
    fill="#F1F1F1"
  />
  <path
    d="M15.4288 18C16.1389 18 16.7145 17.4244 16.7145 16.7143C16.7145 16.0042 16.1389 15.4286 15.4288 15.4286C14.7187 15.4286 14.1431 16.0042 14.1431 16.7143C14.1431 17.4244 14.7187 18 15.4288 18Z"
    fill="#F1F1F1"
  />
  <path
    d="M3.20143 0.516857C3.17231 0.371179 3.09364 0.240082 2.97878 0.145856C2.86393 0.0516293 2.71999 8.97198e-05 2.57143 0H0V1.28571H2.04429L4.51286 13.626C4.54197 13.7717 4.62065 13.9028 4.7355 13.997C4.85035 14.0912 4.9943 14.1428 5.14286 14.1429H16.7143V12.8571H5.67L5.15571 10.2857H16.7143C16.8605 10.2857 17.0024 10.2358 17.1165 10.1443C17.2305 10.0528 17.31 9.92511 17.3417 9.78236L18.7997 3.21429H17.4838L16.1987 9H4.89857L3.20143 0.516857Z"
    fill="#F1F1F1"
  />
  <path
    d="M11.5715 2.57143V0H10.2858V2.57143H7.71436V3.85714H10.2858V6.42857H11.5715V3.85714H14.1429V2.57143H11.5715Z"
    fill="#F1F1F1"
  />
</svg>`;

//
//
// variables
//
//
let cardCounter = 0;

//
//
//
//
//
//
//
let pNameList = [];
let pPriceList = [];
let pSrcList = [];
let inConnectorOnList=[];
let sdOnList=[]
let phoneOnList=[]
let openerOnList=[]
let touchOnList=[]
let cartOnList=[]
let telephoneOnList=[]
let cameraOnList=[]
let twoPanelOnList=[]
let guardOnList=[]
let lockOnList=[]
console.log(sdOnList)

//
//
//list handler
//
//

let key = () => {
  if ((myKey == "monitor")) {
    let counter = 0;
    for (let index = 1; index <= numberOfCards; index++) {
      let name = monitorNames[counter].productName;
      let price = monitorNames[counter].productPrice;
      let connector = monitorNames[counter].inConnectorOn;
      let sd = monitorNames[counter].sdOn;
      let phone = monitorNames[counter].phoneOn;
      let openner = monitorNames[counter].openerOn;
      let touch = monitorNames[counter].touchOn;
      let cart = monitorNames[counter].cartOn;
      let telephone = monitorNames[counter].telephoneOn;
      let camera = monitorNames[counter].cameraOn;
      let twoPanel = monitorNames[counter].twoPanelOn;
      let guard = monitorNames[counter].guardOn;
      let lock = monitorNames[counter].lockOn;
      // let src = monitorNames[counter].productSrc;
      pNameList.push(name);
      pPriceList.push(price);
      inConnectorOnList.push(connector);
      sdOnList.push(sd)
      phoneOnList.push(phone)
      openerOnList.push(openner)
      touchOnList.push(touch)
      cartOnList.push(cart)
      telephoneOnList.push(telephone)
      cameraOnList.push(camera)
      twoPanelOnList.push(twoPanel)
      guardOnList.push(guard)
      lockOnList.push(lock)
      
      // pSrcList.push(src)
      counter++;
    }
  } else if (myKey === "panel") {
    let counter = 0;
    for (let index = 1; index <= numberOfCards; index++) {
      let name = panelNames[counter].productName;
      let price = panelNames[counter].productPrice;
      // let src = panelNames[counter].productSrc;
      pNameList.push(name);
      pPriceList.push(price);
      // pSrcList.push(src)
      counter++;
    }
  } else if ((myKey ==="lateral")) {
    let counter = 0;
    for (let index = 1; index <= numberOfCards; index++) {
      let name = lateralNames[counter].productName;
      let price = lateralNames[counter].productPrice;
      // let src = lateralNames[counter].productSrc;
      pNameList.push(name);
      pPriceList.push(price);
      // pSrcList.push(src)
      counter++;
    }
  }
};

key();

// to upperCase function
toUpper = (x) => {
  return x.toUpperCase();
};

pNameList = pNameList.map(toUpper);


// src Pusher

let monitorImagesSrc = [];
let monitorImagesSrcPush = () => {
  let counter = 0;
  for (let index = 1; index <= numberOfCards; index++) {
  
    let src = `Images/Shop/${myKey}/${pNameList[counter]}.png`;
    monitorImagesSrc.push(src);
    counter++;
  }
};
monitorImagesSrcPush();
