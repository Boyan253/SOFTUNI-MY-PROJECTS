// function deers(input) {
   
// let countofdays = Number(input[0])

// let foodleft = Number(input[1])

// let foodForOnedayforfirstdeer = Number(input[2])

// let foodforonedayforseconddeer = Number(input[3])

// let foodforonedayforthirddeer = Number(input[4])

// let forfirstday = countofdays * foodForOnedayforfirstdeer
// let forsecondday = countofdays * foodforonedayforseconddeer
// let forthirdday = countofdays * foodforonedayforthirddeer

// let allsums = forfirstday + forthirdday + forsecondday

// let leftfod = foodleft - allsums

// if (allsums < foodleft) {
  
//     console.log(`${Math.abs((leftfod))} kilos of food left.`)
// } else if (allsums > foodleft) {
//     console.log(`${(Math.abs(leftfod))} more kilos of food are needed.`)
// }

// }deers(["5",
// "10",
// "2.1",
// "0.8",
// "11"])
function deers(input) {
   
    let countofdays = Number(input[0])
    
    let foodleft = Number(input[1])
    
    let foodForOnedayforfirstdeer = Number(input[2])
    
    let foodforonedayforseconddeer = Number(input[3])
    
    let foodforonedayforthirddeer = Number(input[4])
    
    let forfirstday = countofdays * foodForOnedayforfirstdeer
    let forsecondday = countofdays * foodforonedayforseconddeer
    let forthirdday = countofdays * foodforonedayforthirddeer
    
    let allsums = forfirstday + forthirdday + forsecondday
    
    let leftfod = foodleft - allsums
    
    if (allsums < foodleft) {
      
        console.log(`${Math.abs(Math.floor(leftfod))} kilos of food left.`)
    } else if (allsums > foodleft) {
        console.log(`${Math.abs(Math.floor(leftfod))} more kilos of food are needed.`)
    }
    }deers(["5",
    "10",
    "2.1",
    "0.8",
    "11"])
    