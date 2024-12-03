import { ErrorHandlingCallback } from "./module.mjs";

const datas = JSON.stringify([
    {
        "userName": "Teuku",
        "age": 23,
        "isAlive": true
    },
    {
        "userName": "Fizz",
        "age": null,
        "isAlive": "unknown"
    }
]);

try {
    const fetchingData = JSON.parse(datas);
    console.log(fetchingData);
} catch (err) {
    new ErrorHandlingCallback("Error!");
}
