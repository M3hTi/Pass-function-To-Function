let passengers = [
                    {name : "john DoLoop", paid : true},
                    {name : "Dr.Evel", paid : true},
                    {name : "Sue Property" , paid : false},
                    {name : "John FunCall", paid : true}
                ];
function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if(testFunction(passengers[i])){
            return false;
        }    
    }
    return true;   
}


function checkNoFlyList(passenger) {
    return(passenger.name);
}


let allCanFly = processPassengers(passengers, checkNoFlyList);

if (!allCanFly) {
    console.log("The Plane Cant Take off; we have a passenger on the no-fly list.");
}
function checkNoPaid(passenger) {
    return(!passenger.paid);
}
let allPaid = processPassengers(passengers, checkNoPaid);


if(!allPaid){
    console.log("The Plane Cant Take off; not everyone has paid.");
}


function printPassenger(passenger) {
    let message = passenger.name;
    if(passenger.paid){
        message = message + " " + "has paid";
    }else{
        message = message + " " + "has not paid";
    }
    console.log(message);
}
processPassengers(passengers, printPassenger);





let products = [
                    {name: "Grapefruit", calories : 170 , color: "red", sold : 8200},
                    {name: "Orange", calories : 160, color: "orange", sold : 12101},
                    {name: "Cola", calories : 210, color: "caramel", sold : 25412},
                    {name: "Diet Cola", calories : 0, color: "caramel", sold : 43922},
                    {name: "Lemon", calories : 200, color: "clear", sold : 14983},
                    {name: "Raspberry", calories : 180, color: "pink", sold : 9427},
                    {name: "Root Beer", calories : 200, color: "caramel", sold : 9909},
                    {name: "Water", calories : 0, color: "clear", sold : 62123},
                ];
// console.log(products);



let getInput = function (products) {
        let html = "";
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            let htmlElement = ` name : ${product.name} , calories : ${product.calories} , color : ${product.color}  , sold : ${product.sold} <br>`;
            html = html + htmlElement;
        }
    document.querySelector('.js-input').innerHTML = html;
}

getInput(products);


// products.sort(compareName);
// getInput(products);



let compareName = function (colaA,ColaB) {
    if (colaA.name > ColaB.name) {
        return 1;
    }else if (colaA.name === ColaB.name) {
        return 0;
    }else{
        return -1;
    }
}



// Sort by Name
let sortNameElement = document.querySelector('.js-sort-name');
console.log(sortNameElement);
sortNameElement.onclick = function () {
    // console.log("Hello");
    products.sort(compareName);
    getInput(products);
}



// function e compare calories
let compareCalories = function (colaA,ColaB) {
    if (colaA.calories > ColaB.calories) {
        return 1;
    }else if (colaA.calories === ColaB.calories) {
        return 0;
    }else{
        return -1;
    }
}



// Sort By CAlories
let sortByCalElement = document.querySelector('.js-sort-calories');
sortByCalElement.onclick = function () {
    products.sort(compareCalories);
    getInput(products);
}




// Sort By Color

let compareColor = function (colaA,ColaB) {
    if (colaA.color > ColaB.color) {
        return 1;
    }else if (colaA.color === ColaB.color) {
        return 0;
    }else{
        return -1;
    }
}
let sortByColorElement = document.querySelector('.js-sort-color');
sortByColorElement.onclick = function () {
    products.sort(compareColor);
    getInput(products);
}





// sort by sold
let compareSold = function (colaA,ColaB) {
    if (colaA.sold > ColaB.sold) {
        return 1;
    }else if (colaA.sold === ColaB.sold) {
        return 0;
    }else{
        return -1;
    }
}


let sortBySoldElement = document.querySelector('.js-sort-sold');
sortBySoldElement.onclick = function () {
    products.sort(compareSold);
    getInput(products);
}


