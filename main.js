const firstName = "Zuzia";
const age = "16";

alert ("wtf!");
console.log(firstName);
console.log(age);

console.log (`Nazywam się ${firstName} i mam ${age} lat`);

const header = document.querySelector(".page-header__heading--js")

function calculate(myNumber) {
    return myNumber*7;
}

console.log(calculate(2))

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log (`${target} destroyed`)
    },
    isOperating: true,
    levels: 337,
    name: 'Death Star',
    population: 1000
}

console.log(deathStar)
deathStar.fire('bumbum')

console.log(header)