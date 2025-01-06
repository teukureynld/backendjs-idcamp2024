const sumNumber = (x, y) => {
	return new Promise((resolve, reject) => {
		const result = x + y
		if (result) {
			resolve(`angka telah di tambahkan : ${result}`)
		} else {
			reject(`angka belum ditambahkan`)
		}
	})
}

sumNumber(5, 5)
	.then((msg) => {
		console.log(msg)
	})
	.catch((err) => {
		console.info(err)
	})

sumNumber(10, 5)
	.then((msg) => {
		console.log(msg)
	})
	.catch((err) => {
		console.info(err)
	})

function onFulfilled(doSomethingData) {
	// Do your jobs when "fulfilled" happens…
	console.log(doSomethingData)
}

function onRejected(doSomethingError) {
	// Do your jobs when "rejected" happens…
	console.log(doSomethingError)
}

function promiseExecutor(resolve, reject) {
	setTimeout(() => {
		console.log("Melakukan sesuatu sebelum Promise diselesaikan.")

		// Penentuan hasil dari proses asinkron
		const number = Math.random()

		// Nilai fulfillment dari Promise
		if (number > 0.5) {
			resolve("You did it!")
		}

		// Nilai rejection dari Promise
		else {
			reject(new Error("Sorry, something went wrong!"))
		}
	}, 2000)
}

function doSomething() {
	return new Promise(promiseExecutor)
}
doSomething().then(onFulfilled, onRejected).catch(err => console.info(err));

const promise = new Promise((resolve, fulfilled, rejected)=>{
	// resolve("is on going to resolve")
	fulfilled("ready to go!")
	// rejected(err)
})
promise.then((msg) => console.log(msg)).catch((err) => console.log(err));

async function tryAsyncFunction() {
    return new Promise((fulfilled, rejected) => {
        const drink = "americano";
        let day = "monday";
        switch(day) {
            case "monday":
                if(drink == "americano" && day == "monday") {
                    fulfilled("I'm at my promise!");
                }
                break;
            case "tuesday":
                if(drink == "americano" && day == "monday") {
                    fulfilled("I'm at my promise!");
                }
                break;
            default: 
                if(drink != "" && day != "") {
                    rejected("I will not do it");
                }
        }
    });
}

tryAsyncFunction()
    .then((msg) => console.log(msg))