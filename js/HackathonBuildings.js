let information = {
    campusLocation: 'North',
    buildingName: "Scott Traditions",
    roomNumber: 3,
    capacityOfRoom: "30/70"
};

function listData(dataInput) {
    information.campusLocation = dataInput[0];
    information.buildingName = dataInput[1];
    information.roomNumber = dataInput[2];
    information.capacityOfRoom = dataInput[3];
    console.log(information.campusLocation + " Campus");
    console.log("Building: " + information.buildingName);
    console.log("Room Number: " + information.roomNumber);
    console.log("Capacity: " + information.capacityOfRoom);
    console.log("");
}
let dataInput = [];
dataInput = ['South', "Ohio Union", 123, "24/85"];
listData(dataInput);
dataInput = ['North', "Curl Market", 0, "40/50"];
listData(dataInput);
dataInput = ['West', "RPAC", 0, "400/650"];
listData(dataInput);