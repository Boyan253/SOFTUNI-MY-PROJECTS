function hotelrooms(input) {
  const MayandOctoberapartmentprice = 65;
  const MayandOctoberstudioprice = 50;
  const JuneandSeptemberapartamentprice = 68.7;
  const juneandseptemberstudioprice = 75.2;
  const julyandaugustapartamentprice = 77;
  const julyandaugusttudioprice = 76;

  const months = input[0];
  const nights = Number(input[1]);
  let apartamentprice = 0;
  let studioprice = 0;
  switch (months) {
    case "May":
    case "Ocober":
      apartamentprice = MayandOctoberapartmentprice * nights;
      studioprice = MayandOctoberstudioprice * nights;
      if (nights > 7 && nights < 14) {
        studioprice -= studioprice * 0.05;
      } else if (nights > 14) {
        studioprice -= studioprice * 0.3;
      }
      break;
    case "June":
    case "September":
      apartamentprice = JuneandSeptemberapartamentprice * nights;
      studioprice = juneandseptemberstudioprice * nights;
      if (nights > 14) {
        studioprice -= studioprice * 0.2;
      }
      break;
    case "July":
    case "August":
      apartamentprice = julyandaugustapartamentprice * nights;
      studioprice = julyandaugusttudioprice * nights;
      break;
  }
  if (nights > 14) {
    apartamentprice -= apartamentprice * 0.1;
  }

  console.log(`Apartment: ${apartamentprice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioprice.toFixed(2)} lv.`);
}

hotelrooms(["May", "15"]);
