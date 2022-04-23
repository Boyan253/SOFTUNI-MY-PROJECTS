function operationsBetweenNumber(input) {
  const N1 = Number(input[0]);
  const N2 = Number(input[1]);
  const operator = input[2];
  let result = 0;
  let evenorodd = 0;
  if (operator === "+" && (N1 + N2) % 2 === 0) {
    result = N1 + N2;

    console.log(`${N1} ${operator} ${N2} = ${result} - even`);
  } else if (operator === "+" && (N1 - N2) === 0 ) {
    result = N1 + N2
    
      console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
    
  }
  if (operator === "-" && (N1 - N2) % 2 === 0) {
    result = N1 - N2;
    console.log(`${N1} ${operator} ${N2} = ${result} - even`);
  } else if (operator === "-") {
    result = N1 - N2;
    console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
  }
  if (operator === "*" && (N1 * N2) % 2 === 0) {
    result = N1 * N2;
    console.log(`${N1} ${operator} ${N2} = ${result} - even`);
  } else if (operator === "*") {
    result = N1 * N2;
    console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
  }
  if (operator === "/" && (N1 / N2)  || (N2 / N1)  )  {
     
    console.log(`${N1} ${operator} ${N2} = ${result} `)
  }else if (operator === "%" &&  (N1 % N2) % 2 ) {
      result = (N1 % N2) % 2;
      console.log(`${N1} % ${N2} = ${result}`);
    } else if (N1 / N2 == 0 &&  N2 / N1 == 0) {
        (N1 / N2 == 0)
        (N2 / N1 == 0)
    console.log(`Cannot divide ${N1} by zero`) }
  }





operationsBetweenNumber(["112",
"0",
"/"])




