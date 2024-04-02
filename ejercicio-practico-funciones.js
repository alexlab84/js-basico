// Vamos a crear objetos de superheroinas.

function PowerfullGirl (name, color, superpower) {
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isLeader = false

    this.displayInfo = function () {
        console.log(`Powerfull Girl Information:
         Name: ${this.name}
         Color: ${this.color}
         Superpower: ${this.superpower}
         ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
        `)
    }

    this.becomeLeader = function () {
        this.isLeader = true
        console.log(`${this.name} has become the leader of the Powerfull Girls`)
    }
}

let blossom = new PowerfullGirl('Blossom', 'Pink', 'Ice Breath')
let buttercup = new PowerfullGirl('Buttercup', 'Green', 'Super Strength')
let bubbles = new PowerfullGirl('Bubbles', 'Blue', 'Flight')

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()

blossom.becomeLeader()

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()