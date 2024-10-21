// class SmartPhone {
//     constructor(model, brand, cost){
//         this.model = model;
//         this.cost = cost;
//         this.brand = brand; 
//     }
//     modelPhone(){
//         return `The model is ${this.model}`;
//     }
// }
// class Android extends SmartPhone {
//     constructor(brand,cost){
//         super(brand, cost)
        
//         this.model = model;
//         this.cost = cost;

//     }
    
//     describe(){
//         return this.modelPhone(this.model) + `the brand is : ${this.brand}` + `the cost is ${this.cost}`;
//     }
// }

// const modelAndroid = new Android('X', 'Oppo', "Rp.5000000");
// console.log(modelAndroid.describe());

class SmartPhone {
    constructor(model, brand, cost) {
        this.model = model;
        this.cost = cost;
        this.brand = brand;
    }
    modelPhone() {
        return `The model is ${this.model}`;
    }
}

class Android extends SmartPhone {
    constructor(model, brand, cost) {
        // Memanggil konstruktor dari kelas induk
        super(model, brand, cost);
    }

    describe() {
        return `${this.modelPhone()} , the brand is ${this.brand}, and the cost is ${this.cost}`;
    }
}

const modelAndroid = new Android('X', 'Oppo', "Rp.5000000");
console.log(modelAndroid.describe());

class ApplePhone extends SmartPhone {
    constructor(typeOfYear, cost){
        super(typeOfYear);
        this.cost = cost;
    }
    describe(){
        return `${this.modelPhone()} , the cost is ${this.cost}`;
    }
}
const modelIphone = new ApplePhone('Iphone 11', "RP.4500000");
console.log(modelIphone.describe());

