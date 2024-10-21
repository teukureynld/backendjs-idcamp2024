// function Describe(){}
// function GrizzlyCat(){
//     this.Color = Color;
//     this.Leg = Leg;
// }

// GrizzlyCat.prototype.Describe() = ()=>{
//     return Grrizzly the cat has ${this.leg} and has a color ${this.Color};
// }

// const logObj = new GrizzlyCat(4,"Black and White");
// logObj.Describe()
// console.log(logObj)

function GrizzlyCat(Leg, Color) {
    this.Color = Color;
    this.Leg = Leg;
}

GrizzlyCat.prototype.Describe = function() {
    return `Grizzly the cat has ${this.Leg} legs and has a color ${this.Color}`;
};

const logObj = new GrizzlyCat(4, "Black and White");
console.log(logObj.Describe());
