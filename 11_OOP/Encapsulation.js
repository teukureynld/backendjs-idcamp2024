// Encapsulation

// Membuat data yang ada di class sbg private.
// Untuk tidak dapat diubah dari luar.
class CoffeeMachine {
	constructor(waterAmount) {
		this.waterAmount = waterAmount
		this._temperature = 90
	}

	set temperature(temperature) {
		console.log("you are not allowed to change the temperature")
	}

	get temperature() {
		return this._temperature
	}
}

const coffee = new CoffeeMachine(10)
console.log("Sebelum diubah: ", coffee.temperature)
coffee.temperature = 100
console.log("Setelah diubah: ", coffee.temperature)





var rupiah = (number) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(number)
}


class ComputerDesktop{
    // encapsulation untuk private bisa gunakan #;
    #budget = rupiah(20000000);
    constructor(spec){
        this.spec = spec;
    }
    set describePC(specific){
        this.spec = specific;
    }
    get describePC(){
        return `Get my info PC spec is ${this.spec}` + `the cost all hardware are ${this.#budget}`;
    }
}
const computer = new ComputerDesktop('Intel I7 -8Th, 16GB of RAM', '1TB SSD');
console.log(computer.describePC);

try {
    computer.describePC = 'AMD RYZEN 35000';
}catch(err){
    console.error('Encapsulation Cannot Change'+err);
}