"use strict"


// export function makeCoffee(callback) {
// 	const estimationTime = 5000

// 	const inSecond = Math.ceil(estimationTime / 1000)
// 	console.log(
// 		`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`,
// 	)

// 	setTimeout(() => {
// 		// Do some tasks to make coffee...
// 		console.log("Pramusaji selesai membuat kopi.")

// 		callback()
// 	}, estimationTime)
// }

// export function simpleSimulationRestaurant() {
// 	const customers = "Bang tolong ayam gepreknya satu ya!"
// 	console.log(`Customers : ${customers}`)

// 	const chef = "Oke, ditunggu dalam waktu 10 menit!"
// 	console.log(` Chef : ${chef}`)

// 	let countdown = 10 * 18

// 	const interval = setInterval(() => {
// 		const minutes = Math.floor(countdown / 60)
// 			.toString()
// 			.padStart(2, "0")
// 		const seconds = (countdown % 60).toString().padStart(2, "0")

// 		if (countdown >= 0) {
// 			console.log(`Waktu tersisa: ${minutes}:${seconds}`)
// 			countdown--
// 		} else {
// 			console.log("ayamnya sudah matang!")
// 			clearInterval(interval)
// 		}
// 	}, 1000)

// 	return interval
// }

export function makeRice(callback) {
	let estimation = 10
	let countDown = estimation;

	setInterval(()=>{
		if(countDown > 0){
			countDown--;
			console.log(`Nasi bakal mateng dalam waktu ${countDown}`);
			return;
		} else {
			if(countDown <= 0 && callback === "function"){
				clearInterval(countDown);
				callback("Nasi telah matang!");
			}
		}
	}, 1000)
}
