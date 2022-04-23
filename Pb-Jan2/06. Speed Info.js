function speedInfo(input) {
   
    const num2 = (input[0])

if (num2 <= 10) {
    console.log("Slow")
} else if (num2 <= 50) {
    console.log("average")
} else if (num2 <= 150) {
    console.log("fast")
} else if (num2 <= 1000){
    console.log("ultra fast")
} else {
    console.log("extremely fast")
 }
 
}
speedInfo(["151"])