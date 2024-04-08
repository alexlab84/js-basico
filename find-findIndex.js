// .find nos devuelve el primer elemento de una condición.

const multipleOf5 = [5, 10, 15, 20];

const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10);

console.log(multipleOf5);
console.log(firstNumberGreaterThan10);

//.findIndex nos devuelve el indice del primer elemento del array que satisfaga esa condicion.

const randomNumber = [6, 14, 27, 56, 40];
const indexNumber = randomNumber.findIndex(number => number > 50);

console.log(randomNumber);
console.log(indexNumber);


// Encuentra al ganador de una rifa

const winningParticipants = [
    { id: 1, name: 'Jennifer', ticketNumber: 1 },
    { id: 8, name: 'Michael', ticketNumber: 8 },
    { id: 15, name: 'Emily', ticketNumber: 15 },
    { id: 47, name: 'Charlie', ticketNumber: 47 }
]

function findWinnerByName (name) {
    const winner = winningParticipants.find(participants => participants.name === name)
    return winner || 'No winner found with that name.'
}

function findIndexWinnerByTicket(ticketNumber) {
    const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber)
    return index !== -1 ? index : 'No winner found that ticket number.'
}

function displayWinnerInformation (winner) {
    if (winner !== undefined && winner !== null && winner !== 'No winner found with that name.') {
        console.log('Winner information: ', winner);
    } else {
        console.log('No winner found.');
    }
}

const winnerByName = findWinnerByName('Emily');
const indexWinnerByTicket = findIndexWinnerByTicket(8)

displayWinnerInformation(winnerByName);
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket);

