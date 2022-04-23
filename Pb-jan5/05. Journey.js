function journey(input) {
  const budget = Number(input[0]);
  const typeOfSeason = input[1];
  let totalmoney = 0;

  if (budget <= 100) {
    if (typeOfSeason === "summer") {
      totalmoney = budget * 0.3
      console.log("Somewhere in Bulgaria")
      console.log(`Camp - ${totalmoney.toFixed(2)}`);
    } else {
      totalmoney = budget * 0.7;
      console.log("Somewhere in Bulgaria");
      console.log(` Hotel - ${totalmoney.toFixed(2)}`);
    }
  } else if (budget > 100 && budget <= 1000) {
    if (typeOfSeason === "summer") {
      totalmoney = budget * 0.4;
      console.log("Somewhere in Balkans");
      console.log(`Camp - ${totalmoney.toFixed(2)}`);
    } else {
      totalmoney = budget * 0.8;
      console.log("Somewhere in Balkans");
      console.log(`Hotel - ${totalmoney.toFixed(2)}`);
    }
  } else {
    totalmoney = budget * 0.9;
    console.log("Somewhere in Europe");
    console.log(`Hotel - ${totalmoney.toFixed(2)}`);
  }
}

journey(["75", "winter"]);
