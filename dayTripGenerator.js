"use strict"

console.log("Hello World!")
let randomDestination;
let primoDestinatons = ["Seattle", "Portland", "Paris", "Luckenbach, TX", "San Diego", "Bozeman"];

function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
    return randomChoice
}

function destinationGenerator(){
    let userIsHappy = false

    while(userIsHappy === false){
        randomDestination = randomGenerator(primoDestinatons)

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

let randomDinner;
let primoEats = ["BBQ", "Fish and Chips", "Rocky Mountain Oysters", "Wheat Grass", "VooDoo Doughnuts", "Fondue"];


function foodGenerator(){
    let userIsHappy = false

    while (userIsHappy === false){
        randomDinner = randomGenerator(primoEats)

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

let randomTransport;
let primoTransport = ["bike", "foot mobile", "Uber", "Segway", "horseback", "thee Pony Express"];


function transportGenerator(){
    let userIsHappy = false

    while(userIsHappy === false){
        randomTransport = randomGenerator(primoTransport)

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

let randomEntertainment;
let primoEntertainment = ["Everclear", "a PBR Rodeo", "Willie Nelson", "some bar fights", "the homies"];


function entertainmentGenerator(){
    let userIsHappy = false

    while(userIsHappy === false){
        randomEntertainment = randomGenerator(primoEntertainment)

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

function printOutTrip(){
    console.log(`Congrats! You have decided to go to ${randomDestination}, and eat some ${randomDinner}. You'll be travelling via ${randomTransport} to go see ${randomEntertainment}!!`)
}
printOutTrip()