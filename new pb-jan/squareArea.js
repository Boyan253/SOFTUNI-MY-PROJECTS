function everest(input) {
  let index = 0;

  let initialhikingmeters = 5364;
  let thepeakheight = 8848;
  let daysforhiking = 1;
  let command = input[index];
  
  while (command != "END") {
      index++
    let meterstohike = Number(input[index]);

    if (command == "Yes") {
      daysforhiking += 1;

      if (daysforhiking > 5) {
        console.log("Failed!");
        console.log(`${initialhikingmeters}`);
        break;
      }
      initialhikingmeters += meterstohike;
    } else {
      initialhikingmeters += meterstohike;
    }

    if (initialhikingmeters >= thepeakheight) {
      console.log(`Goal reached for ${daysforhiking} days!`);
      break;
    }
    index++;
     command = input[index];
  }
  if (command == "END") {
    if (initialhikingmeters >= thepeakheight) {
      console.log(`Goal reached for ${daysforhiking} days!`);
    } else {
      console.log("Failed!");
      console.log(`${initialhikingmeters}`);
    }
  }
}
everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);
// function everest(input) {
// let yesno = input[0]
// let startmeters = 5364
// let countofdayswithoutrelax = 0
// let countofdays = 0
// if (yesno == "Yes")
//     countofdays = 1
// let needmeters = 8848

// while (yesno != "END" || startmeters != 8848 || countofdays != 5)
//     if (yesno == "END")
//         break
//     if (startmeters >= 8848)
//         break
//     if (countofdays == 5)
//         break

//     let nextmeters = Number(input[1])
//     startmeters += nextmeters

//     if (yesno == "Yes")
//         countofdays += 1
//     else if ( yesno == "No")
//         countofdayswithoutrelax += 1

//     if (startmeters >= 8848)
//         break
//     else{
//         yesno = input[2]
//     }

// if (startmeters >= needmeters)
//     console.log(`Goal reached for ${countofdays} days!`)

// else{
//     console.log("Failed!")
//     console.log(`${startmeters}`)
// }
// }everest(["Yes",
// "1254",
// "Yes",
// "1402",
// "No",
// "250",
// "Yes",
// "635"])
//
