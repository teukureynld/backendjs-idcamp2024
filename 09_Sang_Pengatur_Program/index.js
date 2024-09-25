// function categorizeNumber(input) {
// 	/**
// 	 * TODO:
// 	 * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
// 	 * Dengan ketentuan sebagai berikut:
// 	 * 1. Jika input bukan number, bangkitkan (throw) error.
// 	 * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
// 	 * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
// 	 * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
// 	 * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
// 	 * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
// 	 */

//     if(input % 2 === 1) {
// 		return "Ganjil"};

// 	if(input % 2 === 0) console.log("Genap")
// 	if(input === 0) console.log("Nol");
// 	if(input < 0) console.log("Negatif")
//     if(typeof input !== "number") throw new Error('Input Harus berupa bilangan bulat');

	// initiate the prime number;
// 	let isPrime = true;
//     const sqrtInput = Math.sqrt(input);
//     for (let i = 2; i <= sqrtInput; i++) {
//         if (input % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime && input > 1) {
//         return "Prima";
//     }
// 	return "Ganjil"
// }
// // Contoh
// console.log(categorizeNumber(15)) // Output: "Ganjil"
// console.log(categorizeNumber(12)) // Output: "Genap"
// console.log(categorizeNumber(17)) // Output: "Prima"
// console.log(categorizeNumber(0)) // Output: "Nol"
// console.log(categorizeNumber(-5)) // Output: "Negatif"

// try {
// 	categorizeNumber("abc")
// } catch (error) {
// 	console.log(error.message)
// } // Output: "Input harus berupa bilangan bulat"


function categorizeNumber(input) {
	// 1. Cek apakah input adalah number
	if (typeof input !== "number") {
		throw new Error('Input harus berupa bilangan bulat');
	}
	
	if (input === 0) {
		return "Nol";
	}
	
	if (input < 0) {
		return "Negatif";
	}
	
	if (input % 2 === 0) {
		return "Genap";
	}
	
	let isPrime = true;
	const sqrtInput = Math.sqrt(input);
	for (let i = 2; i <= sqrtInput; i++) {
		if (input % i === 0) {
			isPrime = false;
			break;
		}
	}
	
	if (isPrime && input > 1) {
		return "Prima";
	}
	
	return "Ganjil";
}

// Contoh
console.log(categorizeNumber(15));  // Output: "Ganjil"
console.log(categorizeNumber(12));  // Output: "Genap"
console.log(categorizeNumber(17));  // Output: "Prima"
console.log(categorizeNumber(0));   // Output: "Nol"
console.log(categorizeNumber(-5));  // Output: "Negatif"

try {
	categorizeNumber("abc");
} catch (error) {
	console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}
