export default function Main(){
    return "This statement is comming from exported function Main";
}
export function countPrimeNumber(input){
    let isPrime = true;
	const sqrtInput = Math.sqrt(input);
	for (let i = 2; i <= sqrtInput; i++) {
		if (input % i === 0) {
			isPrime = false;
			break;
		}
    }
    if(isPrime){
        console.log(`${input} : adalah prime `);
    } else {
        console.log(`${input} : bukanlah prime`);
    }
    return isPrime;
}
export const helloWorld = (param = "Hello")=>{
    let value = param;
    if(value === 1){
        console.log(value)
    }
    return value
}
