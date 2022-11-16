const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest() // Inicializamos un objeto de tipo XMLHttpRequest

    xhttp.open('GET', urlApi, true) //para obtener el valor del API

    //para escuchar los estados que presenta la solicitud de GET
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) { //Pregunta si ya está completada la información para hacer un valor particular
            if(xhttp.status === 200) { //Para validar si la solicitud respondió de forma correcta
                callback(null, JSON.parse(xhttp.responseText)) //Con JSON.parse convertimos a JSON
            } else {
                const error = new Error('Error' + urlApi) // Se inicializa un objeto tipo error{}
                return callback(error, null)
            }
        } 
    }
    xhttp.send()
}

fetchData(`${API}/products`, function(error1, data1){
    if (error1) return console.error(error1)
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if (error2) return console.error(error2)
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if (error3) return console.error(error3)
            console.log(data1[0])
            console.log(data2.title)
            console.log(data3.name)
        })
    })
})