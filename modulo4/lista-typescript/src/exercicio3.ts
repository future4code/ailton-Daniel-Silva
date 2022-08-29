const nameMovie = "A volta dos que não foram"
const movieYear = 2000

enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

let objectMovie = {}

function movieInformation(name:string, year:number, genero:string, pontuacao?:number):object {

        if (pontuacao) {
          let newObj:object = {...objectMovie, name, year, genero, pontuacao}
          return newObj
        } else {
          let newObj:object = { ...objectMovie, name, year, genero}
          return newObj
        }
}

console.log(movieInformation(nameMovie, movieYear, GENERO.ACAO, 35))