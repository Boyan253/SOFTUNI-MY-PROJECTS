function toyshop(input) {
  //     ⦁	Пъзел - 2.60 лв.
  const puzzle = 2.6;
  // ⦁	Говореща кукла - 3 лв.
  const doll = 3;
  // ⦁	Плюшено мече - 4.10 лв.
  const teddybear = 4.1;
  // ⦁	Миньон - 8.20 лв
  const minion = 8.2;
  // ⦁	Камионче - 2 лв.
  const truck = 2;
  // ⦁	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
  const vacationprice = Number(input[0]);
  // ⦁	Брой пъзели - цяло число в интервала [0… 1000]
  const puzzleprice = Number(input[1]);
  // ⦁	Брой говорещи кукли - цяло число в интервала [0 … 1000]
  const talkingDolls = Number(input[2]);
  // ⦁	Брой плюшени мечета - цяло число в интервала [0 … 1000]
  const teddyBearCount = Number(input[3]);
  // ⦁	Брой миньони - цяло число в интервала [0 … 1000]
  const minionCount = Number(input[4]);
  // ⦁	Брой камиончета - цяло число в интервала [0 … 1000]
  const truckCount = Number(input[5]);

  const toycount =
    puzzleprice + talkingDolls + teddyBearCount + minionCount + truckCount;
  let allprice =
    puzzle * puzzleprice +
    doll * talkingDolls +
    teddybear * teddyBearCount +
    minionCount * minion +
    truckCount * truck;

  if (toycount >= 50) {
    allprice *= 0.75;
  }

  allprice *= 0.9;

  const difference = Math.abs(allprice - vacationprice);

  if (allprice >= vacationprice) {
    console.log(`Yes! ${difference.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
  }
}

toyshop(["40.8", "20", "25", "30", "50", "10"]);
