function courier(input) {
  let weight = Number(input[0]);

  let Typeofcourier = input[1];

  let distance = Number(input[2]);

  let allprice = 0;
  
  if (Typeofcourier === ("standard")){
    if (weight < 1){
        allprice = distance * 0.03;
    } else if (weight >=1 && weight <=10){
        allprice = distance * 0.05;
    } else if (weight >=11 && weight <=40){
        allprice = distance * 0.10;
    } else if (weight >= 41 && weight <=90){
        allprice = distance *0.15;
    } else if (weight >= 91 && weight <=150){
        allprice = distance * 0.20;
    }
} else if (Typeofcourier === ("express")){
    if (weight < 1){
        allprice = distance * 0.03 + 0.03 * 0.8 * weight * distance;
    } else if (weight >=1 && weight <=10){
         allprice = distance * 0.05 + 0.05 * 0.4 * weight * distance;
    } else if (weight >=11 && weight <=40){
         allprice = distance * 0.10 + 0.10 * 0.05 * weight * distance;
    } else if (weight >=41 && weight <=90){
         allprice = distance * 0.15 + 0.15 * 0.02 * weight * distance;

    } else if (weight >=91 && weight <=150){
         allprice = distance * 0.20 + 0.20 * 0.01 * weight * distance;

    }
}
  console.log(
    `The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${allprice.toFixed(2)} lv.`
  );
}
courier(["1.5", "standard", "100"]);
