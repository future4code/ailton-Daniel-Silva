const word:string = "astolfo"

let cont:number = 1

const anagram = (word:string):number => {
    let numberLetters:number = word.length

    if(word.length === 0 || word.length === 1 ) {
        return 1
    } else {
         for (let i = 1; i <= numberLetters; i++) {
           cont = cont * i
         }
    }
    return cont
}

console.log(anagram(word))