// function prueba(callback){
//     callback("Roberto");
// }

// function decirNombre(nombre){
//    console.log(nombre);
// }

// prueba(decirNombre)
// https://www.youtube.com/watch?v=xOinGb2MZSk&t=18049s
// 5 horas 

function prueba(callback){
    callback(3+3, "suma");
}

prueba((resultado, operacion) => {
    console.log(resultado+"  " +operacion);
})