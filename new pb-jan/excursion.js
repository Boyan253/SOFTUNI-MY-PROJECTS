function excursion(input) {
let priceofnigts = 20
let priceforcartoftransport = 1.60
let priceforbilet = 6

let peopleingroup = Number(input[0])

let countofnights = Number(input[1])

let countoftransportcards = Number(input[2])

let countofmuseumbilets = Number(input[3])


let allnightsprice = countofnights * priceofnigts

let allpriceforcards = priceforcartoftransport * countoftransportcards

let allpriceformuseum = countofmuseumbilets * priceforbilet

let allsum = allnightsprice + allpriceforcards + allpriceformuseum

let forpeoplesum = allsum * peopleingroup

let sumfornotexpected = forpeoplesum + (forpeoplesum * 0.25)
console.log(sumfornotexpected.toFixed(2))
} excursion(["20",
"14",
"30",
"6"])
