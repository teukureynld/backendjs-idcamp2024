// exported the class of error handling callback
const data = {
    name : "Teuku Reynaldi",
    age : 24,
    address : "JL Sesame Street",
}

function fetchingData(callback){
    const myJSON = JSON.stringify(data);
    return callback(myJSON);
}
function logData(data){
    return console.info("Data : ", `${data}`);
}

fetchingData(logData)

