
const URL = 'https://fourtytwowords.herokuapp.com/'
const apikey = 'b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164'
//const conurl = URL + apikey
//cannot have a constant URL bcoz of different funcs

/*total functions
    1. word definitions
    2. word synonyms 
    3. word antonyms
    4. word examples
    5. full dictionary 
    6. word of the day 
    7. Game
*/

//6. word of the day (random word)
function randomWord(){
    const conurl = URL + '/words/randomWord?api_key=' + apikey
    request ({conurl, JSON:true}, (error, body, response) => {resolve(response.word)})
}

//1. word definition
function defword(){
    const conurl = URL + '/word/' + word + '/definitions?api_key=' + apikey
    request ({conurl, JSON:true}, 
                (error, body, response) => {
                    if (response.error) {
                        reject("word not in dictionary")
                    }
                    else{resolve(response)}
}






    
