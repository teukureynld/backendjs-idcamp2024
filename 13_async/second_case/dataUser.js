import { ErrorHandlingCallback } from "./errorHandlingCallback.js";
const datas = JSON.stringify([
    {
        "userName": "Teuku",
        "age": 2`1122   `,
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