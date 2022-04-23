function hotelRoom(input) {
  const MayandOctoberstudioprice = 50;
  const MayandOctoberapartmentprice = 65;
  const juneAndSemptemberstudioprice = 75.2;
  const juneAndSemptemberapartmentprice = 68.7;
  const julyAndAugustStudioprice = 76;
  const julyAndAugustapartmentprice = 77;
  const session = input[0];
  const nights = Number(input[1]);
  let moneyforstudio = 0;
  let moneyforapartment = 0;

  switch (session) {
    case "May":
    case "October":
      moneyforstudio = MayandOctoberstudioprice * nights;
      moneyforapartment = MayandOctoberapartmentprice * nights;
      if (nights > 7 && 14 > nights) {
        moneyforstudio -= moneyforstudio * 0.05;
      } else if (nights > 14) {
        moneyforstudio -= moneyforstudio * 0.3;
      }

      break;
    case "June":
    case "September":
      moneyforstudio = juneAndSemptemberstudioprice * nights;
      moneyforapartment = juneAndSemptemberapartmentprice * nights;
      if (nights > 14) {
        moneyforstudio -= moneyforstudio * 0.2;
      }
      break;
    case "July":
    case "August":
      moneyforstudio = julyAndAugustStudioprice * nights;
      moneyforapartment = julyAndAugustapartmentprice * nights;
      break;
  }
  if (nights > 14) {
    moneyforapartment -= moneyforapartment * 0.1;
  }

  console.log(`Apartment: ${moneyforapartment.toFixed(2)} lv.`);
  console.log(`Studio: ${moneyforstudio.toFixed(2)} lv.`);
}

hotelRoom(["August", "20"]);
