let information = {
    building: "Ohio Union",
    capacity: 34,
    variance: 17
};
let merchant = {
    name: "Union Market",
    peopleInLine: 10,
    waitTime: 5
};

function listMerchant() {
    console.log(merchant.name);
    console.log("People in line: " + merchant.peopleInLine);
    console.log("Estimated wait time: " + merchant.waitTime + " minutes");
    console.log("");
}

function getMerchantValues(merchantArray, first) {
    merchant.name = merchantArray[0];
    merchant.peopleInLine = merchantArray[1];
    merchant.waitTime = merchantArray[2];
}

function listData(dataInput) {
    information.building = dataInput[0];
    information.capacity = dataInput[1];
    information.variance = dataInput[2];

        let merchantArray1 = [];
        let merchantArray2 = [];
        let merchantArray3 = [];
        let merchantArray4 = [];

    if (first) {
         merchantArray1 = ["Union Market", 10, 5];
         merchantArray2 = ["Sloopy's Diner", 18, 6];
         merchantArray3 = ["Woody's Tavern", 3, 2];
         merchantArray4 = ["Espress OH", 8, 4];
    } else {
         merchantArray1 = ["Pasta", 10, 5];
         merchantArray2 = ["Sandwhich", 18, 6];
         merchantArray3 = ["Burrito", 3, 2];
         merchantArray4 = ["Sushi", 8, 4];
    }
    
    
    let isPos = '+';
    if (information.variance < 0) {
         isPos = '';
    } 
    
    console.log(information.building + " - " + information.capacity + "% Capacity");
    console.log("Total variance from normal traffic: " + isPos + information.variance + "%");
    console.log("");
    getMerchantValues(merchantArray1);
    listMerchant();
    getMerchantValues(merchantArray2);
    listMerchant();
    getMerchantValues(merchantArray3);
    listMerchant();
    getMerchantValues(merchantArray4);
    listMerchant();
    
}

let dataInput = [];
dataInput = ["Ohio Union", 34, 17];
let first = true;
listData(dataInput, first);
dataInput = ["Curl Market", 40, -9, "Pasta", 7, 12];
 first = false;
listData(dataInput, first);