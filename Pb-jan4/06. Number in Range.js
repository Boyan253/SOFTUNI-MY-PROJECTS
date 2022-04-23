function invalidNumbers(input) {
    // Дадено число е валидно, ако е в диапазона [100…200] или е 0.
    const num = (input[0])
    //  Да се напише функция, която приема аргумент  цяло число, и печата "invalid" ако въведеното число не е валидно.
    if (num <= 100 && num >=-100 && num != 0){
        console.log("Yes")
    }  else  { 
        console.log("No")
       
    } 
}
invalidNumbers(["0"])