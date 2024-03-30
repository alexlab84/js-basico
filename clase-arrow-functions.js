const greeting = function (name) {
    return `Hi ${name}`
}

const newGreeting = (name) => {
    return `Hi ${name}`
}

const newGreetingImplicit = name =>  `Hi ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi I'm ${name} ${lastName}`

const finctionalCharacter = {
    name: 'Uncle Juan',
    messageWithTraditionalFunction : function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction : (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('Hello friend')
finctionalCharacter.messageWithArrowFunction('Hello uncle Juanito')
