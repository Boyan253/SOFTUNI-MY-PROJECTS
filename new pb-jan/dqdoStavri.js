function DqdoStavri(input) {
    let index = 0
    let days = Number(input[index])
    let totalLiters = 0;
    let averageDegrees = 0;
index++
    for (let i = 1; i <= days; i++)
    {
        let quantity = Number(input[index])
        index++
        let degrees = Number(input[index])
        index++
        totalLiters = totalLiters + quantity;
        let partidaDegree = degrees * quantity;
        averageDegrees = averageDegrees + partidaDegree;
    }
    let finalDegree = averageDegrees / totalLiters;

    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${finalDegree.toFixed(2)}`);
    if (finalDegree < 38)
    {
        console.log("Not good, you should baking!");
    }
    else if (finalDegree >= 38 && finalDegree <= 42)
    {
        console.log("Super!");
    }
    else if (finalDegree > 42)
    {
        console.log("Dilution with distilled water!");
    }
} DqdoStavri(["3",
"100",
"45",
"50",
"55",
"150",
"36"])




