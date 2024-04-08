// Mutabilidad

const colors = ['yellow', 'blue', 'red'];
const removedColors = colors.shift();

console.log(colors);
console.log(removedColors);

const newColors = colors.unshift('pink','purple');

console.log(colors);
console.log(newColors);

// Ejercicio lista reproduccion.

function managePlaylist(playlist, newSong) {
   playlist.shift();
   playlist.unshift(newSong)
   return playlist 
}

const initialPlaylist = ['Swerter Weather', 'What yo know', 'Eventually'];
const newSongToAdd = 'The aduls are talking'

const updatePlaylist = managePlaylist(initialPlaylist, newSongToAdd);

console.log('Inicitial playlist: ', initialPlaylist);
console.log('New song to add: ', newSongToAdd);
console.log('Updated playlist: ', updatePlaylist);
