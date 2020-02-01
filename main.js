const request = require('request')
const URL = 'https://fourtytwowords.herokuapp.com/'
const apikey = 'b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164'
//const conurl = URL + apikey
//cannot have a constant URL bcoz of different funcs

let data = {
    "word": "",
    "definitons": "",
    "synonyms": "",
    "antonyms": "",
    "examples": "",
}
/*total functions
    1. word definitions
    2. word synonyms 
    3. word antonyms
    4. word examples
    5. full dictionary 
    6. word of the day 
    7. Game
*/

//1. word definition
const defword = (word) =>{
    return new Promise((resolve, reject) => 
    {const conurl = URL + '/word/' + word + '/definitions?api_key=' + apikey
    request ({conurl, JSON:true}, 
                (error, body, response) => {
                    if (response.error) {
                        reject("word not in dictionary")}
                    else{resolve(response)}
    })
})
}

//2. word synonyms
const wordsyno = (word) =>{
    return new Promise((resolve, reject) => 
    {const conurl = URL + '/word/' + word + '/relatedWords?api_key=' + apikey
    request ({conurl, JSON:true},
                (error, body, response) => {
                    if (response.error) {
                        reject("word not in dictionary")}
                    else{resolve(response.words)}
    })
})
}


//3. word antonyms
const wordanto = (word) =>{
    return new Promise((resolve, reject) =>
    {const conurl = URL + '/word/' + word + '/relatedWords?api_key=' + apikey
    request ({conurl, JSON:true},
                (error, body, response) => {
                    if (response.error) {
                        reject("word not in dictionary")}
                    else 
                        {resolve(response.words)}
        })
})
}

//4. word examples
const wordexample = (word) =>{
    return new Promise((resolve, reject) =>
    {const conurl = URL + '/word/' + word + '/examples?api_key=' + apikey
    request ({conurl, JSON:true},
                (error, body, response) => {
                    if (response.error) {
                        reject("word not in dictionary")}
                    else 
                        resolve(response.examples)
        })
})
}

//5. full dictionary
async function fulldict(word){
    return new Promise((resolve, reject) =>{

    data.word = word //use the parameters
    try{
        data.definitons = defword(word)
        data.synonyms = wordsyno(word)
        data.antonyms = wordanto(word)
        data.examples = wordexample(word)
    }
    catch(error){
        reject("word no in dictionary")
    }
    resolve(data)   
    })
}

//6. word of the day (random word)
function randomWord(){
    return new Promise((resolve, reject) => {
    const conurl = URL + '/words/randomWord?api_key=' + apikey
    request ({conurl, JSON:true}, (error, body, response) => {resolve(response.word)})
    })
}

module.export = {
    defword,
    wordsyno,
    wordanto,
    wordexample,
    randomWord,
    fulldict
}



    
