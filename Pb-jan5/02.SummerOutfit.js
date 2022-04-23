function SummerOutfit(input) {
  const degrees = Number(input[0]);
  const Timeofday = input[1];

  switch (Timeofday) {
    case "Morning":
      if (degrees <= 18) {
        console.log(
          `It's ${degrees} degrees, get your Sweatshirt and Sneakers.`
        );
      } else if (degrees > 18 && degrees <= 24) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
      } else {
        console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
      }
      break;
  }
  switch (Timeofday) {
    case "Afternoon":
      if (degrees <= 18) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
      } else if (degrees > 18 && degrees <= 24) {
        console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
      } else {
        console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);
      
  };
   break;
    case "Evening":
      if (degrees >= 28) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
        break;
      }
  }
}
Timeofday(["16", "Morning"]);
