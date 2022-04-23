function shopping(input) {
  // ⦁	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
  const budget = Number(input[0]);
  // ⦁	Броят видеокарти - цяло число в интервала [0…100]
  const videoCardsCount = Number(input[1]);
  // ⦁	Броят процесори - цяло число в интервала [0…100]
  const proccesCount = Number(input[2]);
  // ⦁	Броят рам памет - цяло число в интервала [0…100]
  const ramCount = Number(input[3]);

  //     Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната сметка. Важат следните цени:
  // ⦁	Видеокарта – 250 лв./бр.
  const videoCardPrice = 250;
  const videocardall = videoCardsCount * videoCardPrice; // ⦁	Процесор – 35% от цената на закупените видеокарти/бр.
  const processorPrice = videocardall * 0.35;
  // ⦁	Рам памет – 10% от цената на закупените видеокарти/бр.
  const ramPrice = videocardall * 0.1;

  let totalSum =
    videocardall + ramPrice * ramCount + proccesCount * processorPrice;

  if (videoCardsCount > proccesCount) {
    totalSum *= 0.85;
  }
  lastbudget = Math.abs(totalSum - budget).toFixed(2);
  if (totalSum <= budget) {
    console.log(`You have ${lastbudget} leva left!`);
  } else {
    console.log(`Not enough money! You need ${lastbudget} leva more!`);
  }
}
//shopping(["920.45", "3", "1", "1"]);
