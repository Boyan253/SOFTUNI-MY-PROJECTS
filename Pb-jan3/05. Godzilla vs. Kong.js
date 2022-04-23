function godzillaVsKong(input) {
    // ⦁	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
    const budgetForFilm = Number(input[0])
    // ⦁	Брой на статистите – цяло число в интервала [1 … 500]
    const statists = Number(input[1])
    // ⦁	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
    const costumePerStatist = Number(input[2])
let totalpriceforclothes = statists * costumePerStatist
    let decor = budgetForFilm * 0.1

    if(statists > 150) {
        totalpriceforclothes *= 0.9
    }
    const totalMoney = decor + totalpriceforclothes
    const moneyneeded = Math.abs(totalMoney - budgetForFilm)
    if (totalMoney > budgetForFilm) {
        

        console.log("Not enough money!")
        console.log(`Wingard needs ${moneyneeded.toFixed(2)} leva more.`)
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${moneyneeded.toFixed(2)} leva left.`)

    }
}
godzillaVsKong(["15437.62","186","57.99"])
