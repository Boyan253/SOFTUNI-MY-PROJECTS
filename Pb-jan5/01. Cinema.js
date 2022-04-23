function cinema(input) {
    const Premiere = 12.00 
    const Normal = 7.50 
    const discount = 5.00 
    let finalMoney = 0

    const projectType = (input[0])
    const rols = Number(input[1])
    const cols = Number(input[2])
    
    switch (projectType) {
    case "Premiere":
        finalMoney = rols * cols * Premiere;
        break;
     case "Normal":
            finalMoney = Normal * rols * cols 
            break;
     case "Discount":
                finalMoney = discount * rols * cols 
            break;
                
} console.log(`${finalMoney.toFixed(2)}`);
}