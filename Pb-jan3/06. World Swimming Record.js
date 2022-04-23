function worldSwimmingRecord(input) {
const secondsWR = Number(input[0])
const meters = Number(input[1])
const secondsForOneMeters = Number(input[2])

const secondsAdded = Math.floor(meters / 15) * 12.5
const Swimmingtime = meters * secondsForOneMeters + secondsAdded
const secondsSlower = Swimmingtime - secondsWR

if (Swimmingtime >= secondsWR) {
    const secondsSlower = Swimmingtime - secondsWR
 console.log(`No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`)
} else  {  console.log (` Yes, he succeeded! The new world record is ${Swimmingtime.toFixed(2)} seconds.`)

}

}
worldSwimmingRecord(["55555.67",
    "3017",
    "5.00"])