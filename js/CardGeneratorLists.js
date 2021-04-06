"use strict";
//
//
// lists
//
//
// let monitorNames = [
//   "cdv-guardOn",
//   "cdv-43d",
//   "cdv-43dm",
//   "cdv-43win",
//   "cdv-46b",
//   "cdv-46bm",
//   "cdv-51d",
//   "cdv-51dm",
//   "cdv-70ms4",
//   "cdv-70t4",
//   "cdv-70tm4",
//   "cdv-70win",
//   "cdv-80ms4",
// ];

// let panelNames = [
//   "drc-ntc1",
//   "drc-ntc3",
//   "drc-ntc1id",
//   "drc-ntc3id",
//   "drc-ntc5id",
//   "drc-ntc128",
//   "drc-ntc128t",
//   "drc-ntc1t",
//   "drc-ntc3t",
//   "drc-ntc5t",
//   "drc-ntc1tid",
//   "drc-ntc3tid",
//   "drc-ntc6tid",
//   "drc-ntc20tid",
//   "drc-ntc24tid",
//   "expander",
// ];

let monitorNames = [
  {
    productName: "cdv-guard",
    productPrice: "1200000000",
    size: "4.3",
    sdOn: "off",
    inConnectorOn: "off",
    phoneOn: "on",
    openerOn: "on",
    touchOn: "off",
    cartOn: "on",
    telephoneOn: "off",
    cameraOn: "on",
    twoPanelOn: "off",
    guardOn: "on",
    lockOn: "on",
  },
  {
    productName: "cdv-43d",
    productPrice: "561615",
    size: "8",
    sdOn: "on",
    inConnectorOn: "on",
    phoneOn: "on",
    openerOn: "off",
    touchOn: "on",
    cartOn: "off",
    telephoneOn: "off",
    cameraOn: "off",
    twoPanelOn: "o",
    guardOn: "on",
    lockOn: "on",
  },
  {
    productName: "cdv-43dm",
    productPrice: "1200000",
    size: "4.6",
    sdOn: "on",
    inConnectorOn: "off",
    phoneOn: "on",
    openerOn: "off",
    touchOn: "off",
    cartOn: "off",
    telephoneOn: "off",
    cameraOn: "off",
    twoPanelOn: "off",
    guardOn: "on",
    lockOn: "off",
  },
  {
    productName: "cdv-43win",
    productPrice: "1200000",
    size: "8",
    sdOn: "off",
    inConnectorOn: "on",
    phoneOn: "on",
    openerOn: "off",
    touchOn: "on",
    cartOn: "off",
    telephoneOn: "on",
    cameraOn: "off",
    twoPard: "o",
    guadrd: "on",
    lockOn: "on",
  },
  {
    productName: "cdv-46b",
    productPrice: "1200000",
    size: "8",
    sdOn: "on",
    inConnectorOn: "on",
    phoneOn: "off",
    openerOn: "on",
    touchOn: "off",
    cartOn: "on",
    telephoneOn: "off",
    cameraOn: "off",
    twoPanelOn: "off",
    guardOn: "off",
    lockOn: "off",
  },
  {
    productName: "cdv-46bm",
    productPrice: "1200000",
    size: "4.3",
    sdOn: "on",
    inConnectorOn: "off",
    phoneOn: "on",
    openerOn: "on",
    touchOn: "on",
    cartOn: "on",
    telephoneOn: "on",
    cameraOn: "off",
    twoPanelOn: "on",
    guardOn: "on",
    lockOn: "on",
  },
  {
    productName: "cdv-51d",
    productPrice: "1200000",
    size: "7",
    sdOn: "on",
    inConnectorOn: "on",
    phoneOn: "on",
    openerOn: "on",
    touchOn: "off",
    cartOn: "on",
    telephoneOn: "off",
    cameraOn: "on",
    twoPanelOn: "on",
    guardOn: "off",
    lockOn: "on",
  },
  {
    productName: "cdv-51dm",
    productPrice: "1200000",
    size: "4.6",
    sdOn: "off",
    inConnectorOn: "on",
    phoneOn: "off",
    openerOn: "on",
    touchOn: "off",
    cartOn: "on",
    telephoneOn: "off",
    cameraOn: "on",
    twoPanelOn: "on",
    guardOn: "off",
    lockOn: "on",
  },
  {
    productName: "cdv-70ms4",
    productPrice: "1200000",
    size: "5.1",
    sdOn: "on",
    inConnectorOn: "off",
    phoneOn: "on",
    openerOn: "off",
    touchOn: "off",
    cartOn: "on",
    telephoneOn: "off",
    cameraOn: "on",
    twoPanelOn: "on",
    guardOn: "on",
    lockOn: "on",
  },
  {
    productName: "cdv-70t4",
    productPrice: "1200000",
    size: "4.3",
    sdOn: "on",
    inConnectorOn: "on",
    phoneOn: "on",
    openerOn: "on",
    touchOn: "on",
    cartOn: "on",
    telephoneOn: "off",
    cameraOn: "off",
    twoPanelOn: "on",
    guardOn: "on",
    lockOn: "off",
  },
  {
    productName: "cdv-70tm4",
    productPrice: "1200000",
    size: "7",
    sdOn: "off",
    inConnectorOn: "off",
    phoneOn: "off",
    openerOn: "on",
    touchOn: "off",
    cartOn: "on",
    telephoneOn: "on",
    cameraOn: "off",
    twoPanelOn: "on",
    guardOn: "on",
    lockOn: "off",
  },
  {
    productName: "cdv-70win",
    productPrice: "1200000",
    size: "5.1",
    sdOn: "on",
    inConnectorOn: "on",
    phoneOn: "on",
    openerOn: "on",
    touchOn: "off",
    cartOn: "on",
    telephoneOn: "off",
    cameraOn: "off",
    twoPanelOn: "off",
    guardOn: "off",
    lockOn: "off",
  },
  {
    productName: "cdv-80ms4",
    productPrice: "1200000",
    size: "7",
    sdOn: "on",
    inConnectorOn: "on",
    phoneOn: "off",
    openerOn: "on",
    touchOn: "on",
    cartOn: "on",
    telephoneOn: "on",
    cameraOn: "on",
    twoPanelOn: "off",
    guardOn: "off",
    lockOn: "on",
  },
];

let panelNames = [
  { productName: "drc-ntc1", productPrice: "1200000", productSrc: "" },
  { productName: "drc-ntc3", productPrice: "1200000", productSrc: "" },
  { productName: "drc-ntc1id", productPrice: "1200000", productSrc: "" },
  { productName: "drc-ntc3id", productPrice: "1200000", productSrc: "" },
  { productName: "drc-ntc5id", productPrice: "1200000", productSrc: "" },
  { productName: "drc-ntc128", productPrice: "1200000", productSrc: "" },
  { productName: "drc-ntc128t", productPrice: "1200000", productSrc: "" },
  { productName: "drc-ntc5t", productPrice: "1200000", productSrc: "" },
  { productName: "drc-ntc1tid", productPrice: "1200000", productSrc: "" },
  { productName: "drc-ntc3tid", productPrice: "1200000", productSrc: "" },
  { productName: "drc-ntc6tid", productPrice: "1200000", productSrc: "" },
  { productName: "drc-ntc20tid", productPrice: "1200000", productSrc: "" },
  { productName: "drc-ntc24tid", productPrice: "1200000", productSrc: "" },
  { productName: "expander", productPrice: "1200000", productSrc: "" },
];
let lateralNames = ["ntcs", "tag", "video-amplifire", "trans1", "trans2"];
let filterNames = [
  "",
  "",
  "sdOn",
  "inConnectorOn",
  "phoneOn",
  "openerOn",
  "touchOn",
  "cartOn",
  "telephoneOn",
  "cameraOn",
  "twoPanelOn",
  "guardOn",
  "lockOn",
];
