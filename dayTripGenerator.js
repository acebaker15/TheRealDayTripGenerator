"use strict"

console.log("Hello World!")

let primoDestinatons = ["Seattle", "Portland", "Paris", "Luckenbach, TX", "San Diego", "Bozeman"];

function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
    return randomChoice
}

function destinationGenerator(){
    let userIsHappy = false

    while(userIsHappy === false){
        let randomDestination = randomGenerator(primoDestinatons)

        let userResponse = prompt(`Your randomly generated destination is ${randomDestination}. Are you OK with that?`)

        if(userResponse.toLowerCase() === "yes"){
            alert(`Enjoy ${randomDestination}`)

            userIsHappy = true
        }else if(userResponse.toLowerCase() === "no"){
            userIsHappy = false
        }
        
    }
    
}

destinationGenerator()

let primoEats = ["BBQ", "Fish and Chips", "Rocky Mountain Oysters", "Wheat Grass", "VooDoo Doughnuts", "Fondue"];

function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
    return randomChoice
}

function foodGenerator(){
    let userIsHappy = false

    while (userIsHappy === false){
        let randomDinner = randomGenerator(primoEats)

        let userResponse = prompt(`Your randomly generated food is ${randomDinner}. Are you OK with that?`)

        if(userResponse.toLowerCase() ==="yes"){
            alert(`Enjoy your ${randomDinner}`)
            userIsHappy = true
        }else if(userResponse.toLowerCase() === "no"){
            userIsHappy = false
        }


    }
}

foodGenerator()

let primoTransport = ["Bike", "Foot Mobile", "Uber", "Segway", "Horseback", "Pony Express"];

function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
    return randomChoice
}

function transportGenerator(){
    let userIsHappy = false

    while(userIsHappy === false){
        let randomTransport = randomGenerator(primoTransport)

        let userResponse = prompt(`Your randomly generated transportation is ${randomTransport}. Are you OK with that?`)

        if(userResponse.toLowerCase() === "yes"){
            alert(`Enjoy your ${randomTransport}`)
            userIsHappy = true    
        }else if(userResponse.toLowerCase() === "no"){
        userIsHappy = false
        }

    }
}

transportGenerator()

let primoEntertainment = ["Everclear", "PBR Rodeo", "Willie Nelson", "Bar Fights", "The Louvre"];

function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
}

function entertainmentGenerator(){
    let userIsHappy = false

    while(userIsHappy === false){
        let randomEntertainment = randomGenerator(primoEntertainment)

        let userResponse = prompt(`Your randomly generated entertainment is ${randomEntertainment}. Are you OK with that?`)

        if(userResponse.toLowerCase() === "yes"){
            alert(`Enjoy ${randomEntertainment}`)
            userIsHappy = true
        }else if(userResponse.toLowerCase() ==="no"){
            userIsHappy = false
        }
    }
}

entertainmentGenerator()

