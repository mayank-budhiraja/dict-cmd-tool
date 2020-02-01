const program = require('commander'); //packages
const {prompt} = require('inquirer'); //for CLI app
const {defword, wordsyno, wordanto, wordexample, randomWord, fulldict} = require('main.js')

program 
    .description('Main')

//word definition
program
    .command('defn <word>')
    .action( (word) => {
        try{
            let data = defword(word)
            console.log(data)
        }
        catch(error){
            console.log(data)
        }
    });

//word synonym 
program
    .command('syn <word>')
    .action( (word) => {
        try{
            let data = wordsyno(word)
            console.log(data)
        }
        catch(error){
            console.log(data)
        }
    });





