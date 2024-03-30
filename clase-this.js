const house = {
    dogName: 'Nico',
    dogGreeting: function () {
        console.log(`Hi, I'm ${this.dogName}`)
    }
}

house.dogGreeting();

function dogGreeting() {
    console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse = {
    dogName: 'Pepe'
}

dogGreeting.call(newHouse);

function newDogGreeting(owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}

const owner = 'Ale'
const address = 'Europe Avenue'
newDogGreeting.call(newHouse, owner, address);