/* const owner = 'Ale'
const address = 'Europe Avenue 8'

function dogGreeting(owner, address) {
   console.log(`Hi I'm ${this.dogName} and I live with ${owner} on ${address}`) 
}

const newHouse = {
    dogName: 'Nico'
}

dogGreeting.call(newHouse, owner, address)

const necessaryValues = [owner, address]
dogGreeting.apply(newHouse, necessaryValues)

const bindingWithBind = dogGreeting.bind(newHouse, owner, address)
bindingWithBind() */

const caricatura = {nombre: 'Vaca y pollito'}
function recuerdo(personaje) {
    console.log(`${this.nombre} era mi caricatura favorita. Me encantaba ver las averturas de ${personaje}`)
}

recuerdo.call(caricatura, 'Vaca')
recuerdo.bind(caricatura, 'Pollito')