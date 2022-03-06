
const colors = require('colors');
const { showMenu, pausa } = require('./helpers/messages');

console.clear();

const main = async () =>{
    let opt;

    do {
        opt = await showMenu();    
        console.log(`Opcion: ${opt}`)
        await pausa();

    } while (opt !== '7');
    
}

main();