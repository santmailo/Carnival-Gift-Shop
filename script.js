// write your code here
let input = require("sync-input");
let gifts = {
    1 : {"Teddy Bear" : 10},
    2 : {"Big Red Ball" : 5},
    3 :{ "Huge Bear" : 50},
    4 :{ "Candy" : 8},
    5 :{ "Stuffed Tiger" : 15},
    6 :{ "Stuffed Dragon" : 30},
    7 :{ "Skateboard" : 100},
    8 :{ "Toy Car": 25},
    9 :{ "Basketball": 20},
    10 :{ "Scary Mask" : 75}
};

let ticketCount = 0;
function wecomeGreet(){
    console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
    console.log("Hello friend! Thank you for visiting the carnival!");
    rewards();
    userInput();
}

function rewards(){
    console.log("Here's the list of gifts:\n");
    for(let gift in gifts){
        let val = gifts[gift];
        console.log(`${gift}- ${Object.keys(val)[0]}, Cost: ${Object.values(val)[0]} tickets`);
    }
}

function userInput(){
    console.log("What do you want to do?");
    console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
    let userVal = input();
    if(isNaN(userVal) || userVal<1 || userVal>5){
        console.log("Please enter a valid number!");
        console.log();
        userInput();
        return;
    }
    if(userVal==1){
        if(Object.keys(gifts).length==0){
            console.log("Wow! There are no gifts to buy.\n");
        }
        else{
            gift();
        }
    }

    if(userVal==2){
        purchaseTicket();
        // return;
    }

    if(userVal==3){
        showTickets();
        // return;
    }

    if(userVal==4){
        count = 1;
        showGiftList();
        // return;
    }

    if(userVal!=5){
        userInput();
        // return;
    }

    if(userVal==5){
        console.log("Have a nice day!");
        return;
    }
}


function gift(){
    let giftCount = input("Enter the number of the gift you want to get: ");
    let ticket = gifts[giftCount];
    if(isNaN(giftCount)){
        console.log("Please enter a valid number!");
        console.log();
        return;
    }

    if(giftCount<1 || giftCount>10){
        console.log("There is no gift with that number!\n");
        // userInput();
        return;
    }

    if(gifts[giftCount]==undefined){
        console.log("There is no gift with that number!\n");
        return;
    }

    if((ticketCount-Object.values(ticket)[0])<0){
        console.log("You don't have enough tickets to buy this gift.");
        console.log(`Total tickets: ${ticketCount}`);
        console.log();
        // userInput();
        return;
    }
    else{
        ticketCount-= Object.values(ticket)[0];
        console.log(`Here you go, one ${Object.keys(ticket)[0]}!`);
        console.log(`Total tickets: ${ticketCount}`);
        delete gifts[giftCount];
        console.log();
    }

}

function purchaseTicket(){
    let val = parseInt(input("Enter the ticket amount: "));
    if(isNaN(val) || val<0 || val>1000){
        console.log("Please enter a valid number between 0 and 1000.\n");
        return;
    }
    ticketCount += val;
    console.log(`Total tickets: ${ticketCount}`);
    console.log();
}

function showTickets(){
    console.log(`Total tickets: ${ticketCount}`);
    console.log();
    return;
}

function showGiftList(){
    rewards();
    if(Object.keys(gifts).length==0){
        console.log("Wow! There are no gifts to buy.\n");
    }
    return;
}

wecomeGreet();
