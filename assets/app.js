let trains = [];


function addTrains() {
    $("#addTrainBtn").on("click", function (event) {
        event.preventDefault();

        let trainName = $("#train-name").val().trim();
        let destinationVal = $("#destination").val().trim();
        let frequencyVal = $("#frequency").val().trim();
        let trainTimeVal = $("#train-time").val().trim();

        console.log(trainName);
        console.log(destinationVal);
        console.log(frequencyVal);
        console.log(trainTimeVal);

        let newTrainObj = {
            name: trainName,
            destination: destinationVal,
            frequency: frequencyVal,
            TrainTime: trainTimeVal,
        }

        console.log(newTrainObj);

        trains.push(newTrainObj);

        localStorage.setItem("Trains", JSON.stringify(trains));

        $("#train-name").val("");
        $("#destination").val("");
        $("#frequency").val("");
        $("#train-time").val("");


    });
}

function displayTrains() {
    $(".form-control").empty();
    const trainDisplay = JSON.parse(localStorage.getItem("Trains"));
    for (let i = 0; i < trainDisplay.length; i++)
        const tRow = $("<tr>");
    const tName = $("<td>").html(trainDisplay[i].name);
    const tDest = $("<td>").html(trainDisplay[i].destination);
    const tFreq = $("<td>").html(trainDisplay[i].frequency);
    const tTime = $("<td>").html(trainDisplay[i].TrainTime);
    const nextArv = moment()


}
