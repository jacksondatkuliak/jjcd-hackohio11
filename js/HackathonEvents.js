let information = {
    campusLocation: "North",
    campusEvent: "Career Fair",
    time: "5:00 PM",
    expectedNumAttendees: 150
};

function listData(dataInput) {
    information.campusLocation = dataInput[0];
    information.campusEvent = dataInput[1];
    information.Time = dataInput[2];
    information.expectedNumAttendees = dataInput[3];
    console.log(information.campusLocation + " Campus");
    console.log("Event: " + information.campusEvent);
    console.log("Time: " + information.time);
    console.log("Expected Number of Attendees: " + information.expectedNumAttendees);
    console.log("");
}
let dataInput = [];
dataInput = ['South', "Picnic", "3:00 PM", 100];
listData(dataInput);
dataInput = ['North', "Career Fair", "1:00 PM", 200];
listData(dataInput);
dataInput = ['West', "Basketball", "5:30 PM", 30];
listData(dataInput);