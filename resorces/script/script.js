//Create array of data with names and authors
const firstName = ['Sam', 'Kavi', 'Jack', 'Oliver', 'Jacob'];
const secondName = ['Harry', 'David', 'Charlie', 'James', 'George'];
const detecAuthor = ['Agatha Christie', 'Dashiell Hammett', 'Raymound Chandler', 'Tana French'];
const comicAuthor = ['Stan Lee', 'Grant Morrison', 'Jim Shooter', 'Neil Gaiman'];

//Choosing random index from the array

let randomSelect = arr => {
    return arr[Math.floor(Math.random()*arr.length)];
}
// Output of the function
let sentence = `${randomSelect(firstName)} likes Detective stories by ${randomSelect(detecAuthor)} and ${randomSelect(secondName)} likes Comic stories by ${randomSelect(comicAuthor)}.`;

console.log(sentence);