const program = require('commander'); //for CLI app
//const {prompt} = require('inquirer'); //for game
const {defword, wordsyno, wordanto, wordexample, detailrandomword} = require('./main.js')

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

//word antonym
program
    .command('ant <word>')
    .action( (word) => {
        try{
            let data = wordanto(word)
            console.log(data)
        }
        catch(error){
            console.log(data)
        }
    });

//word examples
program
    .command('ex <word>')
    .action( (word) => {
        try{
            let data = wordexample(word)
            console.log(data)
        }
        catch(error){
            console.log(data)
        }
    });

//get some random data without messing above functions
if (process.argv.length==2){
const randomdata = async ()=>{
    let worddata = await detailrandomword() //need a function to get details
    console.log(worddata)
    }
        try
        {
            randomdata()
        }
        catch(error)
        {
            console.log(error)
        }
}





