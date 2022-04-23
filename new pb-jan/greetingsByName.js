function everest(input) {
    let input = input[0]
    let index = 1
    let initialhikingmeters = 5364
    
    let initialpeakheight = 8848
    
    let daysforhiking = 1
    
    while(input !== "END"){
    let meterstohike = Number(input[index])
    
    if(input === "Yes"){
    
        daysforhiking += 1
    
        if(daysforhiking > 5) {
    
            console.log("Failed!")
            console.log(`${initialhikingmeters}`)
            break;
        } initialhikingmeters += meterstohike
    } else {
        initialhikingmeters += meterstohike
    
    } if (initialhikingmeters >= initialpeakheight) {
        console.log(`Goal reached for ${daysforhiking} days!`)
        break;
    } 
    index++
    
    } if (input === "END"){
        if(initialhikingmeters >= peakheight)
        {
            console.log(`Goal reached for ${daysforhiking} days!`)
        } else {
            console.log("Failed!")
            console.log(`${initialhikingmeters}`)
        }
    }
    
    
    } 