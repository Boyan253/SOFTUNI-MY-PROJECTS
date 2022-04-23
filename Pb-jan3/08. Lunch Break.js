function lunchBreak(input) {
  const NameOfSerial = input[0];
  const timeLenght = input[1];
  const timeOfBreak = input[2];

  // дали имате достатъчно време да изгледате епизода. По време на почивката отделяте време за обяд и време за отдих.
  //  Времето за обяд ще бъде 1/8 от времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка.
  const lunchtime = timeOfBreak / 8;
  const breaktime = timeOfBreak / 4;
  const remainingTime = Math.abs(timeOfBreak - lunchtime - breaktime);
  const freetime = Math.abs(remainingTime - timeLenght);

  if (remainingTime >= timeLenght) {
    console.log(`You have enough time to watch ${NameOfSerial} and left with ${Math.ceil(
      freetime
    )} minutes free time.
`);
  } else {
    console.log(`You don't have enough time to watch ${NameOfSerial}, you need ${Math.ceil(
      freetime
    )} more minutes.
   `);
  }
}
lunchBreak(["Teen Wolf", "48", "60"]);
