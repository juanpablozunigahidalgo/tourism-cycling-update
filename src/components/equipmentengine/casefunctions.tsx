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
export const calculateEquipment  = ({
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
    { itemName: "Camping tent", quantity:  tentq , itemweight: tentw , itemvolume:tentv },
    { itemName: "Air Matress", quantity: matresq , itemweight: matresw , itemvolume: matresv },
    { itemName: "Sleeping Bag", quantity: slepbq , itemweight: slepbw , itemvolume: slepbv },
    { itemName: "Infatable Pillow", quantity: pilloq , itemweight: pillow , itemvolume: pillov },
    { itemName: "Head Lamp", quantity: headq , itemweight: headw , itemvolume: headv },
    { itemName: "Floor insulator", quantity: floorinsq , itemweight: floorinsw , itemvolume: floorinsv },
    { itemName: "Camping Pot", quantity: potq , itemweight: potw , itemvolume: potv },
    { itemName: "Camping Cup", quantity: cupq , itemweight: cupw , itemvolume: cupv },
    { itemName: "Utensil set", quantity: utensilq , itemweight: utensilw , itemvolume: utensilv },
    { itemName: "Stove", quantity: stoveq , itemweight: stovew , itemvolume: stovev },
    { itemName: "Canister", quantity: canisterq  , itemweight: canisterw , itemvolume: canisterv },
    { itemName: "Igniter", quantity: igniterq  , itemweight: igniterw , itemvolume: igniterv },
    { itemName: "Petrol", quantity: petrolq  , itemweight: petrolw , itemvolume: petrolv },
    { itemName: "Detergent", quantity: detergentq , itemweight: detergentw , itemvolume: detergentv },
    { itemName: "Dish wash liquid", quantity: dishcq , itemweight: dishcw , itemvolume: dishcv },
    { itemName: "Soap", quantity: soapq , itemweight: soapw , itemvolume: soapv },
    { itemName: "Toothbrush", quantity: tbrushq , itemweight: tbrushw , itemvolume: tbrushv },
    { itemName: "Toothpaste", quantity: tpasteq , itemweight: tpastew , itemvolume: tpastev },

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
 return {
  totalbikerelatedv,
  totalbikerelatedw,
  totalelectronicsv,
  totalelectronicsw,
  totalhealthbodyv2,
  totalhealthbodyw2,
  totaldocumv,
  totaldocumw,
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
return {
  totalropav,
  totalropaw,
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




