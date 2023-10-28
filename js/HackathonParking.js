let information = {
    campusLocation: "North",
    trafficStatus:"Normal",
    garageNum: 1,
    capacity1: 60,
    capacity2: 75,
    variance:  24
};

function listData(dataInput) {
    information.campusLocation = dataInput[0];
    information.trafficStatus = dataInput[1];
    information.garageNum = dataInput[2];
    information.capacity1 = dataInput[3];
    information.capacity2 = dataInput[4];
    information.variance = dataInput[5];
    console.log(information.campusLocation + " Campus");
    console.log(information.trafficStatus + " Traffic");
    console.log("Parking Garage " + information.garageNum);
    console.log("Current Capacity: " + information.capacity1 + "/" + information.capacity2);
    let isPos = '+';
    if (information.variance < 0) {
        isPos = '';
    }
    console.log("Variance from normal: " + isPos + information.variance + "%");
    console.log("");
}
let dataInput = [];
dataInput = ['North', "Normal", 1, 60,75,24];
listData(dataInput);
dataInput = ['South', "Low", 2, 30,100,-20];
listData(dataInput);
dataInput = ['West', "High", 3, 45,45, 65];
listData(dataInput);
dataInput = ['Central', "Normal", 4, 80,95,-5];
listData(dataInput);