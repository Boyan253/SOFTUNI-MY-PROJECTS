function newHome(input) {
  //     Роза	Далия	Лале	Нарцис	Гладиола

  // 5	3.80	2.80	3	2.50
  const rose = 5;
  const dalia = 3.8;
  const lale = 2.8;
  const narcises = 3;
  const gladioles = 2.5;
  const rosesall = 80 * 5;
  const flowerType = input[0];
  const countOfFlowers = input[1];
  const budget = input[2];
  let finalprice = 0;
  // •	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
  switch (flowerType) {
    case "Roses":
      if (countOfFlowers > 80) {
        finalprice = countOfFlowers * rose * 0.1;
      }
      finalprice += countOfFlowers * rose;
      break;
    case "Dahlias":
      if (countOfFlowers > 90) {
        finalprice -= countOfFlowers * dalia * 0.15;
      }
      finalprice = countOfFlowers * dalia;
      break;
    case "Tulips":
      if (countOfFlowers > 80) {
        finalprice -= countOfFlowers * lale * 0.15;
      }
      finalprice = countOfFlowers * lale;
      break;
    case "Narcissus":
      if (countOfFlowers > 120) {
        finalprice -= countOfFlowers * narcises * 0.15;
      }
      finalprice = countOfFlowers * narcises;
      break;
    case "Gladiolus":
      if (countOfFlowers > 80) {
        finalprice -= countOfFlowers * gladioles * 0.2;
      }
      finalprice = countOfFlowers * gladioles;
      break;
  }
  const moneyNeeded = finalprice - budget;
  const levaleft = budget - finalprice;
  if (budget >= finalprice) {
    console.log(
      `Hey, you have a great garden with ${countOfFlowers}  ${typeofFlower} and ${levaleft} leva left.`
    );
    const moneyNeeded = finalprice - budget;
  } else {
    console.log(`Not enough money, you need ${moneyNeeded} leva more.`);
  }

  // •	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
  // •	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
  // •	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
  // •	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
  // Функцията получава 3 аргумента:
  // •	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
  // •	Брой цветя - цяло число в интервала [10…1000]
  // •	Бюджет - цяло число в интервала [50…2500]
}
newHome(["Roses", "55", "250"]);
newHome(["Tulips", "88", "260"]);
newHome;
