const promise = new Promise(function(resolve, reject){
    resolve("hey!")
})

const cows = 15

const countCows = new Promise(function(resolve, reject){
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`)
    } else{
        reject(`There aren't cows on the farm`)
    }
})
countCows.then((result) => { //Con .then se obtiene el resolve de la promesa
    console.log(result)
}).catch((error) => { // Con .catch se captura el reject de la promesa
    console.log(error)
}).finally(() => { // Con .finally se imprime un mensaje que indica que ya se ejecutó la promesa
    console.log('Finally')
})