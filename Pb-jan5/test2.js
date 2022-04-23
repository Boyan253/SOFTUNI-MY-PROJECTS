function operationsBN(input) {
    const N1 = Number(input[0]);
  const N2 = Number(input[1]);
  const operator = input[2];
  let result = 0

  if(operator === "-" && operator === "+" && operator === "*") {
      let evenOrOdd = result % 2 === 0
      result = N1 + N2 
  } else if (operator === "-") {
  result = N1 - N2}
  else if(operator === "*") {
  result = N1 * N2} else {
      let evenOrOdd =  result % 2 !== 0
      console.log(`${N1} ${operator} ${N2} = ${result} - ${evenOrOdd}`) 
      if (N1 / 0 === 0 && N2 / 0 === 0){
      
        console.log(` Cannot divide ${N1} by zero`);

}
}
}
operationsBN(["10",
"12",
"+"])
