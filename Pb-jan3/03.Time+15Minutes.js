function time15minutes(input) {
let Hours = Number(input[0])
let Minutes = Number(input[1])

 Minutes += 15;

if (Minutes >= 60) {
    Hours += 1
    Minutes -= 60
} 
if (Hours >= 24) {
    Hours = 0
}
if (Minutes < 10) {
    console.log(`${Hours}:0${Minutes}`)
} else {
    console.log(`${Hours}:${Minutes}`)

}
}
time15minutes(["23", "46"])