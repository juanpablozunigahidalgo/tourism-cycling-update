import React, { useState } from 'react';
//A couple of variables for usage. 
let tshirtw=110;
let tshirtv=0.22;
let fleecew=220;
let fleecev=0.44;
let lwindjw=180;
let lwindjv=0.36;
let wpjackw=300;
let wpjackv=0.6;
let tjackw=800;
let tjackv=1.6;
let fllegsw=150;
let fllegsv=0.3;
let flsleevsw=150;
let flsleevsv=0.3;
let lwpantw=150;
let lwpantv=0.3;
let skiw=560;
let skiv=1.2;
let shortw=100;
let shortv=0.2;
let boxerw=100;
let boxerv=0.2;
let socketw=100;
let socketv=0.2;
let glovew=180;
let glovev=0.36;
let shoew=800;
let shoev=1.5;
let capw=100;
let capv=0.2;
let feetw=100;
let feetv=0.2;
let neckw=30;
let neckv=0.06;
let towellw=100;
let towellv=0.2;
let helmw=220;
let helmv=2;
let multitw=130;
let multitv=0.09;
let stubew=130;
let stubev=0.25;
let pumpw=50;
let pumpv=0.09;
let sgooglew=30;
let sgooglev=0.1;
let tubefixw=30;
let tubefixv=0.05;
let leverw=30;
let leverv=0.05;
let tentw=1800;
let tentv=3.5;
let matresw=500;
let matresv=1;
let slepbw=900;
let slepbv=4;
let pillow=60;
let pillov=0.2;
let headw=70;
let headv=0.3;
let floorinsw=200;
let floorinsv=0.5;
let soapw=20;
let soapv=0.016;
let tbrushw=10;
let tbrushv=0.012;
let tpastew=30;
let tpastev=0.108;
let suncw=50;
let suncv=0.04;
let potw=260;
let potv=1.8;
let cupw=100;
let cupv=0.2;
let utensilw=100;
let utensilv=0.05;
let stovew=300;
let stovev=0.3;
let canisterw=200;
let canisterv=1;
let igniterw=30;
let igniterv=0.05;
let petrolw=200;
let petrolv=0.2;
let detergentw=20;
let detergentv=0.05;
let dishcw=10;
let dishcv=0.05;
let docuw=150;
let docuv=0.2;
let phonew=180;
let phonev=0.1;
let chargerw=40;
let chargerv=0.05;
let pbankw=350;
let pbankv=0.05;
let pannierw=500;
let pannierv=23;
let lightfirstaidw=200;
let lightfirstaidv=0.2;
let equipment;
let equipment2;
let equipment3;
let equipment4;
var totalcampingv: number;
var totalcampingw: number;
var totalelectronicsv: number;
var totalelectronicsw: number;
var totalhealthbodyv1: number;
var totalhealthbodyw1: number;
var totalhealthbodyv2: number;
var totalhealthbodyw2: number;
var totalhealthbodyv3;
var totalhealthbodyw3;
var totalbikerelatedv: number;
var totalbikerelatedw: number;
var totalropav: number;
var totalropaw: number;
var totaldocumv: number;
var totaldocumw: number;
var volumenresume: number;
var weightresume: number;
var graphf;
//Interface to handle the Props. It is standard. 
export interface Props {
    camping: number;
    minimumTripTemperature: number;
    rain: number;
    tripLength: number;
  }
//First Function. 
//This function resumes the camping equipment required for camping. 
//Notice it only depends if the user is going to camp or not. And the trip lenght.
export const calculateEquipment1  = ({
  tripLength,
  camping,
  minimumTripTemperature,
  rain,
}: Props) => {
  let tentq, matresq, slepbq, pilloq, headq, floorinsq, potq, cupq, utensilq,
    stoveq, canisterq, igniterq, petrolq, detergentq, dishcq, soapq, tbrushq, tpasteq;
  if (camping >= 1 && tripLength >= 2) {
    tentq = 1;
    matresq = 1;
    slepbq = 1;
    pilloq = 1;
    headq = 1;
    floorinsq = 1;
    potq = 1;
    cupq = 1;
    utensilq = 1;
    stoveq = 1;
    canisterq = 1;
    igniterq = 1;
    petrolq = 1;
    detergentq = 1;
    dishcq = 1;
    soapq = 1;
    tbrushq = 1;
    tpasteq = 1;
  } else {
    tentq = 0;
    matresq = 0;
    slepbq = 0;
    pilloq = 0;
    headq = 0;
    floorinsq = 0;
    potq = 0;
    cupq = 0;
    utensilq = 0;
    stoveq = 0;
    canisterq = 0;
    igniterq = 0;
    petrolq = 0;
    detergentq = 0;
    dishcq = 0;
    soapq = 0;
    tbrushq = 0;
    tpasteq = 0;
  };
  // poner aqui la suma del equipo.
  const totalcampingv = ((tentq*tentv)+(matresq*matresv)+(slepbq*slepbv)+(pilloq*pillov)+(headq*headv)+(floorinsq*floorinsv)+(potq*potv)+(cupq*cupv)+(utensilq*utensilv)+(stoveq*stovev)+(canisterq*canisterv)+(igniterq*igniterv)+(petrolq*petrolv)+(detergentq*detergentv)+(dishcq*dishcv));
  const totalcampingw = ((tentq*tentw)+(matresq*matresw)+(slepbq*slepbw)+(pilloq*pillow)+(headq*headw)+(floorinsq*floorinsw)+(potq*potw)+(cupq*cupw)+(utensilq*utensilw)+(stoveq*stovew)+(canisterq*canisterw)+(igniterq*igniterw)+(petrolq*petrolw)+(detergentq*detergentw)+(dishcq*dishcw))/1000;
  const totalhealthbodyv1=((soapq*soapv)+(tbrushq*tbrushv)+(tpasteq*tpastev));
  const totalhealthbodyw1=((soapq*soapw)+(tbrushq*tbrushw)+(tpasteq*tpastew))/1000;

  //Lets create an specific table. 

  const tableData = [
    { itemName: "Camping tent", quantity:  tentq , itemweight: tentw , itemvolume:tentv, itemlink: "https://www.amazon.se/gp/product/B0047T69SC/ref=as_li_tl?ie=UTF8&tag=tourismcycling-21&camp=247&creative=1211&linkCode=as2&creativeASIN=B0047T69SC&linkId=891804322b938b6bfda79eca6a1d7649" },
    { itemName: "Air Matress", quantity: matresq , itemweight: matresw , itemvolume: matresv , itemlink: "https://www.amazon.se/Kingcamp-Klassisk-super-sj%C3%A4lvuppbl%C3%A5sande-matta/dp/B00AFE5MEA/ref=sr_1_2_sspa?crid=1BV9J77GFBTLH&keywords=sj%C3%A4lvuppbl%C3%A5sande+matta&qid=1684768459&sprefix=sj%C3%A4lvuppbl%C3%A5sande+matta%2Caps%2C117&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"},
    { itemName: "Sleeping Bag", quantity: slepbq , itemweight: slepbw , itemvolume: slepbv , itemlink: "https://www.amazon.se/Hagl%C3%B6fs-Tarius-5-Sovs%C3%A4ck-Vuxna-Unisex/dp/B083FM4Q6V/ref=sr_1_3?crid=1AV1OFW14LM66&keywords=Hagl%C3%B6fs+Sovs%C3%A4ck&qid=1684768509&sprefix=hagl%C3%B6fs+sovs%C3%A4ck%2Caps%2C93&sr=8-3" },
    { itemName: "Infatable Pillow", quantity: pilloq , itemweight: pillow , itemvolume: pillov , itemlink: "https://www.amazon.se/gp/product/B007SN5J6W/ref=as_li_tl?ie=UTF8&tag=tourismcycling-21&camp=247&creative=1211&linkCode=as2&creativeASIN=B007SN5J6W&linkId=bf927263865d6021933de1ca6cc046e5" },
    { itemName: "Head Lamp", quantity: headq , itemweight: headw , itemvolume: headv , itemlink: "https://www.amazon.se/Gritin-Pannlampa-Laddningsbar-Str%C3%A5lkastare-R%C3%B6relsesensor/dp/B08CXZHJ7K/ref=sr_1_7?crid=1N2G0EJ3U2S4L&keywords=head+lamp&qid=1684768590&sprefix=head+lamp%2Caps%2C114&sr=8-7"},
    { itemName: "Floor insulator", quantity: floorinsq , itemweight: floorinsw , itemvolume: floorinsv , itemlink: "https://www.amazon.se/GardenMate-UNIVERSELL-Presenning-Skyddspresenning-B%C3%A5tpresenning/dp/B0738VD1B4/ref=sr_1_5?crid=A4YS05MQUDBW&keywords=PRESENNING&qid=1684768709&sprefix=presenning%2Caps%2C137&sr=8-5"},
    { itemName: "Camping Pot", quantity: potq , itemweight: potw , itemvolume: potv , itemlink: "https://www.amazon.se/Camping-Cookware-vandring-Barbecue-Tillbeh%C3%B6r/dp/B0C38Y7MKP/ref=sr_1_22_sspa?crid=OXLV9G2LLC68&keywords=camping+cooking+set&qid=1684768750&sprefix=camping+cooking+set%2Caps%2C98&sr=8-22-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1" },
    { itemName: "Camping Cup", quantity: cupq , itemweight: cupw , itemvolume: cupv , itemlink: "https://www.amazon.se/Camping-Cookware-vandring-Barbecue-Tillbeh%C3%B6r/dp/B0C38Y7MKP/ref=sr_1_22_sspa?crid=OXLV9G2LLC68&keywords=camping+cooking+set&qid=1684768750&sprefix=camping+cooking+set%2Caps%2C98&sr=8-22-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1"},
    { itemName: "Utensil set", quantity: utensilq , itemweight: utensilw , itemvolume: utensilv , itemlink: "https://www.amazon.se/MAGWARE-Magnetic-Camping-Utensils-Pocket-Sized/dp/B09GT9X4JX/ref=sr_1_13?crid=2OVFVJ1G6S1AA&keywords=camping+utensil+set&qid=1684768788&sprefix=camping+utensil+se%2Caps%2C98&sr=8-13"},
    { itemName: "Stove", quantity: stoveq , itemweight: stovew , itemvolume: stovev , itemlink: "https://www.amazon.se/BRS-Ryggs%C3%A4ck-Camping-Ultral%C3%A4tt-Titanlegering/dp/B06XNLSNFR/ref=sr_1_7?crid=3UQF4EBYNSBAG&keywords=camping+stove&qid=1684768818&sprefix=camping+stove%2Caps%2C100&sr=8-7" },
    { itemName: "Canister", quantity: canisterq  , itemweight: canisterw , itemvolume: canisterv , itemlink: "https://www.amazon.se/Coleman-Gaspatron-C300-Performance-300004540/dp/B01BKKYM2K/ref=sr_1_6?crid=1S9OXH21UY71J&keywords=canister+gas&qid=1684768863&sprefix=canister+gas%2Caps%2C111&sr=8-6" },
    { itemName: "Igniter", quantity: igniterq  , itemweight: igniterw , itemvolume: igniterv , itemlink: "" },
    { itemName: "Petrol", quantity: petrolq  , itemweight: petrolw , itemvolume: petrolv , itemlink: "https://www.amazon.se/Gasoline-Kerosene-Alcohol-Storage-JIANNI/dp/B0BW3TBHBM/ref=sr_1_3_sspa?crid=37FSL8CJ0UN8P&keywords=petrol+bottle&qid=1684768894&sprefix=petrol+botle%2Caps%2C106&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
    { itemName: "Detergent", quantity: detergentq , itemweight: detergentw , itemvolume: detergentv , itemlink: "" },
    { itemName: "Dish wash liquid", quantity: dishcq , itemweight: dishcw , itemvolume: dishcv , itemlink: "" },
    { itemName: "Soap", quantity: soapq , itemweight: soapw , itemvolume: soapv , itemlink: "" },
    { itemName: "Toothbrush", quantity: tbrushq , itemweight: tbrushw , itemvolume: tbrushv , itemlink: "" },
    { itemName: "Toothpaste", quantity: tpasteq , itemweight: tpastew , itemvolume: tpastev , itemlink: "" },
  ].filter((item) => item.quantity > 0);
  return {
    totalcampingv,
    totalcampingw,
    totalhealthbodyv1,
    totalhealthbodyw1,
    tableData
  };
};
//Second Function
  
export const calculateEquipment2  = ({
  tripLength,
  camping,
  minimumTripTemperature,
  rain,
}: Props) => {
  var helmq;
  var multitq;
  var stubeq;
  var pumpq;
  var sgoogleq;
  var tubefixq;
  var leverq;
  var docuq;
  var phoneq;
  var chargerq;
  var pbankq;
  var suncq;
  var lightfirstaidq;
  if ( tripLength >= 1 ){
       docuq=1;
       phoneq=1;
       lightfirstaidq=1;
       helmq=1;
       multitq=1;
       pumpq=1;
       sgoogleq=1;
       stubeq=1;
       leverq=1;
     } else {
       docuq=0;
       phoneq=0;
       lightfirstaidq=0;
       helmq=0;
       multitq=0;
       pumpq=0;
       sgoogleq=0;
       stubeq=0;
       leverq=0;
     };

  if (tripLength >= 2){
        chargerq=1;
        pbankq=1;
        tubefixq=1;
      } else {
        chargerq=0;
        pbankq=0;
        tubefixq=0;
      };
  if ( (tripLength >= 1) && (minimumTripTemperature >= 10) ){
    suncq=1;
  } else {
    suncq=0;
  };
  //poner aqui la suma del equipo
  totalbikerelatedv=((helmq*helmv)+(multitq*multitv)+(stubeq*stubev)+(pumpq*pumpv)+(sgoogleq*sgooglev)+(tubefixq*tubefixv)+(leverq*leverv));
  totalbikerelatedw=((helmq*helmw)+(multitq*multitw)+(stubeq*stubew)+(pumpq*pumpw)+(sgoogleq*sgooglew)+(tubefixq*tubefixw)+(leverq*leverw))/1000;
  totalelectronicsv=((phoneq*phonev)+(chargerq*chargerv)+(pbankq*pbankv));
  totalelectronicsw=((phoneq*phonew)+(chargerq*chargerw)+(pbankq*pbankw))/1000;
  totalhealthbodyv2=((suncq*suncv)+(lightfirstaidq*lightfirstaidv));
  totalhealthbodyw2=((suncq*suncw)+(lightfirstaidq*lightfirstaidw))/1000;
  totaldocumv=((docuq*docuv));
  totaldocumw=((docuq*docuw))/1000;
//Aqui va la tabla con los valores. 
  const tableData = [
    { itemName: "Helmet", quantity:  helmq , itemweight: helmw , itemvolume:helmv , itemlink: "" },
    { itemName: "Multi Tool", quantity: multitq , itemweight: multitw , itemvolume: multitv , itemlink: ""},
    { itemName: "Standard Tube", quantity: stubeq , itemweight: stubew , itemvolume: stubev , itemlink: ""},
    { itemName: "Air Pump", quantity: pumpq , itemweight: pumpw , itemvolume: pumpv, itemlink: "" },
    { itemName: "Cycling Googles", quantity: sgoogleq , itemweight: sgooglew , itemvolume: sgooglev , itemlink: ""},
    { itemName: "Tube Fix Kit", quantity: tubefixq , itemweight: tubefixw , itemvolume: tubefixv , itemlink: "" },
    { itemName: "Bike Tube Levers", quantity: leverq , itemweight: leverw , itemvolume: leverv , itemlink: ""},
    { itemName: "Wallet. With you documents", quantity: docuq , itemweight: docuw , itemvolume: docuv , itemlink: ""},
    { itemName: "Phone", quantity: phoneq , itemweight: phonew , itemvolume: phonev ,itemlink: ""},
    { itemName: "Phone Charger", quantity: chargerq, itemweight:  chargerw , itemvolume: chargerv , itemlink: ""},
    { itemName: "Power Bank", quantity: pbankq  , itemweight: pbankw , itemvolume: pbankv , itemlink: ""},
    { itemName: "SunScreen", quantity: suncq  , itemweight: suncw , itemvolume: suncv , itemlink: ""},
    { itemName: "First Aid Kit", quantity: lightfirstaidq  , itemweight: lightfirstaidw , itemvolume: lightfirstaidv ,itemlink: "" },
  ].filter((item) => item.quantity > 0);


 return {
  totalbikerelatedv,
  totalbikerelatedw,
  totalelectronicsv,
  totalelectronicsw,
  totalhealthbodyv2,
  totalhealthbodyw2,
  totaldocumv,
  totaldocumw,
  tableData
 };
};
// Third Function. Written to fix the clothing equipment.
export const calculateEquipment3  = ({
  tripLength,
  camping,
  minimumTripTemperature,
  rain,
}: Props) => {
  var tshirtq;
  var fleeceq;
  var lwindjq;
  var wpjackq;
  var tjackq;
  var fllegsq;
  var flsleevsq;
  var lwpantq;
  var skiq;
  var shortq;
  var boxerq;
  var socketq;
  var gloveq;
  var shoeq;
  var capq;
  var feetq;
  var neckq;
  var towellq;
  //lets fix one at a time.
  //Tshirt
  if (minimumTripTemperature >= 5 ) {
          if (tripLength >= 4 ) {
            tshirtq = 4;
          } else if (tripLength >= 3) {
            tshirtq = 3;
          } else if (tripLength >= 2) {
            tshirtq = 2;
          } else if (tripLength >= 1) {
            tshirtq = 1;
          } else {
            tshirtq = 0;
          }
        } else {
          if (tripLength >= 4 ) {
            tshirtq = 3;
          } else if (tripLength >= 2) {
            tshirtq = 1;
          } else if (tripLength>=1) {
            tshirtq = 0;
          } else {
            tshirtq = 0;
          }
        };
//Fleece
      if (minimumTripTemperature >= 15 ) {
        fleeceq=0;
        } else if( minimumTripTemperature >= 10) {
            if (tripLength >= 1 ) {
                fleeceq = 1;
                } else {
                fleeceq = 0;
                }
      } else {
            if (tripLength >= 4 ) {
                fleeceq = 2;
                } else if (tripLength >= 1 ) {
                  fleeceq = 1;
                } else {
                  fleeceq = 0;
                }
      };
      //Light weight wind stop jacket
      if (minimumTripTemperature >= 15 && rain===0 && tripLength >0 ) {
        lwindjq=1;
      } else {
        lwindjq=0;
      };
      //water proof rain jacekt goretex shit.
      if  ( rain===1 && tripLength >0) {
        wpjackq=1;
      } else {
        wpjackq=0;
      };
      //thermal waterproof jacket tjack
      if  ( (minimumTripTemperature  < 0) && (tripLength > 0) ) {
        tjackq=1;
      } else if (minimumTripTemperature  <5 && tripLength>=4){
        tjackq=1;
      } else {
        tjackq=0;
      };
      //First Layer Leg fllegs
      if  ( (minimumTripTemperature < 10) && (tripLength >= 4) ) {
              fllegsq=2;
            } else if ((minimumTripTemperature < 10) && (tripLength>=1)){
            fllegsq=1;
          } else {
            fllegsq=0;
      };
      //First Layer sleeve flsleevs
      if  ( (minimumTripTemperature < 10) && (tripLength >= 4) ) {
              flsleevsq=2;
            } else if ((minimumTripTemperature < 10) && (tripLength>=1)){
            flsleevsq=1;
          } else {
            flsleevsq=0;
      };
      //light weight pants lwpant
      if  ( (minimumTripTemperature <= 7) && (tripLength > 1) ) {
        lwpantq=1;
        } else {
        lwpantq=0;
      };
      //ski pant ski
      if  ( (minimumTripTemperature < 0) && (tripLength > 0) ) {
        skiq=1;
      } else if (minimumTripTemperature <5 && tripLength>=4){
        skiq=1;
      } else {
        skiq=0;
      };
      //short pant short
      if ((tripLength > 0)) {
        shortq=1;
      } else if ((tripLength >= 4)) {
        shortq=2;
      } else {
        shortq=0;
      }
      //boxer boxer
      if (tripLength >= 4) {
        boxerq=4;
      } else if (tripLength >= 3) {
        boxerq=3;
      } else if (tripLength >= 2) {
        boxerq=2;
      } else if (tripLength >= 1) {
        boxerq=1;
      } else {
        boxerq=0;
      };
      //socks socket
      if (tripLength >= 4) {
        socketq=4;
      } else if (tripLength >= 3) {
        socketq=3;
      } else if (tripLength >= 2) {
        socketq=2;
      } else if (tripLength >= 1) {
        socketq=1;
      } else {
        socketq=0;
      };
      //thermal gloves glove
      if  ( (minimumTripTemperature < 8) && (tripLength > 0) ) {
        gloveq=1;
      } else {
        gloveq=0;
      };
      //All terrain running shoes
      if  ( tripLength > 0 ) {
        shoeq=1;
      } else {
        shoeq=0;
      };
      //thermal cap
      if  ( (minimumTripTemperature <= 5) && (tripLength > 0) ) {
        capq=1;
      } else {
        capq=0;
      };
      //feet insulation feet
      if  ( (minimumTripTemperature <= 5) && (tripLength > 0) ) {
        feetq=1;
      } else {
        feetq=0;
      };
      //neck neck
      if  ( (minimumTripTemperature <= 8) && (tripLength > 0) ) {
        neckq=1;
      } else {
        neckq=0;
      };
      //towell towell
      if  ( ( camping === 1 ) && (tripLength >= 2) ) {
        towellq=1;
      } else {
        towellq=1;
      };
//poner aqui la suma del equipo
totalropav=((tshirtq*tshirtv)+(fleeceq*fleecev)+(lwindjq*lwindjv)+(wpjackq*wpjackv)+(tjackq*tjackv)+(fllegsq*fllegsv)+(flsleevsq*flsleevsv)+(lwpantq*lwpantv)+(skiq*skiv)+(shortq*shortv)+(boxerq*boxerv)+(socketq*socketv)+(gloveq*glovev)+(shoeq*shoev)+(capq*capv)+(feetq*feetv)+(neckq*neckv)+(towellq*towellv));
totalropaw=((tshirtq*tshirtw)+(fleeceq*fleecew)+(lwindjq*lwindjw)+(wpjackq*wpjackw)+(tjackq*tjackw)+(fllegsq*fllegsw)+(flsleevsq*flsleevsw)+(lwpantq*lwpantw)+(skiq*skiw)+(shortq*shortw)+(boxerq*boxerw)+(socketq*socketw)+(gloveq*glovew)+(shoeq*shoew)+(capq*capw)+(feetq*feetw)+(neckq*neckw)+(towellq*towellw))/1000;
//Tabla con la informacion de las cantidades. 
const tableData = [
  { itemName: "T-shirt", quantity:  tshirtq , itemweight: tshirtw , itemvolume:tshirtv , itemlink: "" },
  { itemName: "Fleece", quantity: fleeceq , itemweight: fleecew , itemvolume: fleecev , itemlink: "" },
  { itemName: "Light Wind Jacket", quantity: lwindjq , itemweight: lwindjw , itemvolume: lwindjv , itemlink: "" },
  { itemName: "Water Proof Jacket", quantity: wpjackq, itemweight: wpjackw , itemvolume: wpjackv , itemlink: "" },
  { itemName: "Thermal Jacket", quantity: tjackq , itemweight: tjackw , itemvolume: tjackv , itemlink: "" },
  { itemName: "First Layer Leg", quantity: fllegsq , itemweight: fllegsw , itemvolume: fllegsv , itemlink: "" },
  { itemName: "First Layer Sleeve", quantity: flsleevsq , itemweight: flsleevsw , itemvolume: flsleevsv , itemlink: "" },
  { itemName: "Light Weight Pant", quantity: lwpantq , itemweight: lwpantw , itemvolume: lwpantv, itemlink: "" },
  { itemName: "Sky Pant", quantity: skiq , itemweight: skiw , itemvolume: skiv , itemlink: "" },
  { itemName: "Short Pant", quantity: shortq, itemweight:  shortw , itemvolume: shortv , itemlink: "" },
  { itemName: "Interior Clothing", quantity: boxerq , itemweight: boxerw , itemvolume: boxerv ,  itemlink: ""},
  { itemName: "Socket", quantity: socketq  , itemweight: socketw , itemvolume: socketv , itemlink: "" },
  { itemName: "Gloves", quantity: gloveq  , itemweight: glovew , itemvolume: glovev , itemlink: "" },
  { itemName: "Shoes", quantity: shoeq  , itemweight: shoew , itemvolume: shoev , itemlink: "" },
  { itemName: "Thermal Cap", quantity: capq , itemweight: capw , itemvolume: capv , itemlink: "" },
  { itemName: "Thermal Feet Cover", quantity: feetq  , itemweight: feetw , itemvolume: feetv , itemlink: "" },
  { itemName: "Neck Wind protection", quantity: neckq , itemweight: neckw , itemvolume: neckv , itemlink: "" },
  { itemName: "Neck Wind protection", quantity: towellq , itemweight: towellw , itemvolume: towellv, itemlink: "" },
].filter((item) => item.quantity > 0);

return {
  totalropav,
  totalropaw,
  tableData 
};
};

//Resuming totals function here.
//This part of the code will sum up the weight the ciclist will bring for the trip.
export function calculateEquipment4() {
  volumenresume = Math.round((totalropav+totalbikerelatedv+totalelectronicsv+totalhealthbodyv2+totaldocumv+totalcampingv+totalhealthbodyv1));
  weightresume = Math.round((totalropaw+totalbikerelatedw+totalelectronicsw+totalhealthbodyw2+totaldocumw+totalcampingw+totalhealthbodyw1));
  return {
    volumenresume,
    weightresume
  };
};




