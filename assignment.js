
//--------------------------------
//Problem:1  radianToDegree 
//-----------------------


function radianToDegree(radian) {

    if(typeof(radian) == 'number' && radian >= 0){
        const degree = radian * (180 / Math.PI);
        return degree.toFixed(2);
    }
    else {
        return 'plese valid radian Number';
    }
}

// const degreeResult = radianToDegree(1);






//--------------------------------
//Problem:2  isJavaScriptFile
//-----------------------

function isJavaScriptFile(file) {

    if(typeof(file) == 'string'){
        const lastThreeString = file.substring(file.length - 3);
        if (lastThreeString === '.js') {
        return true;
        }
        else {
            return false;
        }
    }
    else{
        return 'plase valid file name';
    }

}

// const typeOutput = isJavaScriptFile('.js')







//--------------------------------
//Problem 3: oilPrice
//-----------------------

function oilPrice(diesel, Petrol, octane) {
    if(typeof(diesel) == 'number' && typeof(Petrol) == 'number' && typeof(octane) == 'number' && diesel >= 0 && Petrol >= 0 && octane >= 0) {
        const dieselRate = 114;
        const petrolRate = 130;
        const octaneRate = 135;

        let dieselPrice = diesel * dieselRate;
        let petrolPrice = Petrol * petrolRate;
        let octanePrice = octane * octaneRate;

        let totalOilPrice = dieselPrice + petrolPrice + octanePrice;
        return totalOilPrice;

    }
    else{
        return 'Please valid number'
    }

}

// const oilResult = oilPrice(1, 1, 1);





//--------------------------------
//Problem 4: publicBusFare
//-----------------------


function publicBusFare(passenger) {
    
    if(typeof(passenger) === 'number' && passenger >= 0){
        const bus = 50;
        const micro = 11;

        let afterBus = passenger % bus;
        let afterMicro = afterBus % micro;

        let localBusCost = afterMicro * 250;
        return localBusCost;
    }
    else{
        return 'please valid passenger number'
    }

}

// const totalCost = publicBusFare(1);





//--------------------------------
//Problem 5: isBestFriend
//-----------------------


function isBestFriend(friends1, friends2) {
    
    if(typeof(friends1) === 'object' && typeof(friends2) === 'object') {
        if (friends1.name.toLowerCase() === friends2.friend.toLowerCase() && friends2.name.toLowerCase() === friends1.friend.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }
    else{
        return 'please  valid object friends data';
    }

}


// let friends1 = { name: 'abul', friend: 'babul' }
// let friends2 = { name: 'babul', friend: 'abul' }


// const myBestFriend = isBestFriend(friends1, friends2);



