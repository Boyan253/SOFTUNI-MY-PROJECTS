function bonusScore(input) {
  const starterScore = Number(input[0]);
  let bonus = 0;
  if (starterScore <= 100) {
    bonus = 5;
  } else if (starterScore > 1000) {
    bonus = starterScore * 0.1;
  } else {
    bonus = starterScore * 0.2;
  }

  if (starterScore % 2 === 0) {
    bonus += 1;
  } else if (starterScore % 10 === 5) {
    bonus += 2;
  }
  console.log(bonus);
  console.log(starterScore + bonus);
}
bonusScore(["20"]);
