function fishingBoat(input) {
    const budget = Number(input[0])
// •	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"
const typeOfSeason = (input[1])
// •	Брой рибари – цяло число в интервала [4…18]
const countOfFishermans = Number(input[2])


//     •	Цената за наем на кораба през пролетта е  3000 лв.
const priceForSpring = 3000
// •	Цената за наем на кораба през лятото и есента е  4200 лв.
const forsummerAndAutumn = 4200
// •	Цената за наем на кораба през зимата е  2600 лв.
const priceforWinter = 2600
let totalmoney = 0
// •	Ако групата е до 6 човека включително  –  отстъпка от 10%.
if (countOfFishermans <= 6) { 
    totalmoney -=  totalmoney * 0.1

}
switch(typeOfSeason) {
case "Winter": 
totalmoney = priceforWinter;
break;
case "Spring":
totalmoney = priceforSpring;
break;
case "Autumn" || "Summer": 
totalmoney = forsummerAndAutumn;
break;
}

if (countOfFishermans <= 6) { 
    totalmoney -=  totalmoney * 0.1

}
else if (countOfFishermans >= 7 && countOfFishermans <= 11) { 
    totalmoney -=  totalmoney * 0.15

}
 else if (countOfFishermans > 12) { 
    totalmoney -=  totalmoney * 0.25

} if (countOfFishermans % 2 === 0 && season != "Autumn")
{totalmoney -= totalmoney * 0.05}
// Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка. 
const moneyleft = budget - totalmoney 
const moneyNeeded = totalmoney - budget
if (budget >= totalmoney) {
    console.log(`Yes! You have ${moneyleft} leva left.`)
} else {
   console.log(` Not enough money! You need ${moneyNeeded} leva.`)
}

}

fishingBoat(["3000",
"Summer",
"11"])
