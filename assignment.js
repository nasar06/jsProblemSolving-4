
//--------------------------------
//Problem:1  radianToDegree 
//-----------------------


function radianToDegree(radian) {
    let degree = radian * 57.2958;
    return degree.toFixed(2);
}

var degreeResult = radianToDegree(25);
// console.log(degreeResult);





//--------------------------------
//Problem:2  isJavaScriptFile
//-----------------------

function isJavaScriptFile(string) {
    let lastThreeString = string.substring(string.length - 3);
    if (lastThreeString === '.js') {
        return true;
    }
    else {
        return false;
    }

}

let typeOutput = isJavaScriptFile('adda.js')
// console.log(typeOutput);





//--------------------------------
//Problem 3: oilPrice
//-----------------------

function oilPrice(diesel, Petrol, octane) {
    let dieselRate = 114;
    let petrolRate = 130;
    let octaneRate = 135;

    let dieselPrice = diesel * dieselRate;
    let petrolPrice = Petrol * petrolRate;
    let octanePrice = octane * octaneRate;

    let totalOilPrice = dieselPrice + petrolPrice + octanePrice;
    return totalOilPrice;
}

let oilResult = oilPrice(1, 0, 2);
// console.log(oilResult);




//--------------------------------
//Problem 4: publicBusFare
//-----------------------

function publicBusFare(passenger) {
    let bus = 50;
    let micro = 11

    let afterBus = passenger % bus;
    let afterMicro = afterBus % micro;

    let localBusCost = afterMicro * 250;
    return localBusCost;

}

let totalCost = publicBusFare(365);
// console.log(totalCost);



//--------------------------------
//Problem 5: isBestFriend
//-----------------------


function isBestFriend(friends1, friends2) {
    if (friends1.name === friends2.friend) {
        return true;
    }
    else {
        return false;
    }

}


// let friends1 = { name: 'abul', friend: 'babul' }
// let friends2 = { name: 'babul', friend: 'abul' }

let friends1 = { name: 'abul', friend: 'kabul' }
let friends2 = { name: 'kabul', friend: 'sabul' }

let myBestFriend = isBestFriend(friends1, friends2);
//console.log(myBestFriend);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//--------------------------------
//Problem:1  radianToDegree 
//-----------------------


function radianToDegree(radian) {

    if(typeof(radian) == 'number'){
        let degree = radian * 180 / Math.PI;
        return degree.toFixed(2);
    }
    else {
        return 'plese valid Number';
    }
}

var degreeResult = radianToDegree(1);
// console.log(degreeResult);





//--------------------------------
//Problem:2  isJavaScriptFile
//-----------------------

function isJavaScriptFile(file) {

    let lastThreeString = file.substring(file.length - 3);
    if (lastThreeString === '.js' && typeof(file) == 'string') {
        return true;
    }
    else if(typeof(file) !== 'string'){
        console.log('valid data')
    }
    else {
        return false;
    }

}

let typeOutput = isJavaScriptFile(false)
console.log(typeOutput);


