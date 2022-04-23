function ontimeForTheExamp(input) {
  const HourofTheExamp = Number(input[0]);
  const minutesoftheexamp = Number(input[1]);
  const HourOfArriving = Number(input[2]);
  const MinutesOfArriving = Number(input[3]);

  const TotalExamMinutes = HourofTheExamp * 60 + minutesoftheexamp;
  const TotalArrivalTime = HourOfArriving * 60 + MinutesOfArriving;
  const DifferenceInTime = Math.abs(TotalExamMinutes - TotalArrivalTime);
  const HourDiff = Math.floor(DifferenceInTime / 60);
  let MinDiif = DifferenceInTime % 60;

  if (MinDiif === 0 || (MinDiif < 10 && HourDiff > 0)) {
    MinDiif = `0${MinDiif}`;
  }
  if (TotalArrivalTime === TotalExamMinutes) {
    console.log("On time");
  } else if (TotalArrivalTime > TotalExamMinutes && DifferenceInTime < 60) {
    console.log("Late");
    console.log(`${MinDiif} minutes after the start`);
  } else if (TotalArrivalTime > TotalExamMinutes && DifferenceInTime >= 60) {
    console.log("Late");
    console.log(`${HourDiff}:${MinDiif} hours after the start`);
  } else if (DifferenceInTime <= 30) {
    console.log("On time");
    console.log(`${MinDiif} minutes before the start`);
  } else if (DifferenceInTime > 30 && DifferenceInTime < 60) {
    console.log("Early");
    console.log(`${MinDiif} minutes before the start`);
  } else {
    console.log("Early");
    console.log(`${HourDiff}:${MinDiif} hours before the start`);
  }
}
ontimeForTheExamp(["9", "00", "10", "30"]);
