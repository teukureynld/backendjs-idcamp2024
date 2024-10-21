class Animal {
    constructor(name, age, isMammal){
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}
class Rabbit extends Animal {
    constructor(name, age, isMammal = true) {
        super(name, age,isMammal);
    }
    eat(){
        return `${this.name} sedang makan!`;
    }
}
const myRabbit = new Rabbit('Labi',2);
myRabbit.eat();

class Eagle extends Animal {
    constructor(name,age,isMammal = false){
        super(name, age, isMammal);
    }
    fly(){
        return `${this.name} sedang terbang!`;
    }
}

const myEagle = new Eagle("Elo", 4);
myEagle.fly();