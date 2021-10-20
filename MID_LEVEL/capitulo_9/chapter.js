const apretame = document.querySelector(".apretame");

// apretame.onclick =() => {
//     alert("Holadddddd");
// }

const saludar = (e)=>{
    alert("Hola");
    console.log(e.target);
}


apretame.addEventListener("click",saludar);


const contenedor2 = document.querySelector(".contenedor2");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const input = document.querySelector(".input-prueba");
const imgprueba = document.querySelector(".img-prueba");
const input2 = document.querySelector(".input-prueba-2");
const contenedor5 = document.querySelector(".contenedor5");

button2.addEventListener("click", (e)=>{
    alert("click en el boton2");
});

button3.addEventListener("click", (e)=>{
    alert("click en el boton3, no se propaga el click");
    e.stopPropagation();
});

button4.addEventListener("click", (e)=>{
    alert("click en el boton4, doble click");
    e.stopPropagation();
});

button5.addEventListener("mouseover", (e)=>{
    alert("mause over");
    e.stopPropagation();
});

contenedor2.addEventListener("click", (e)=>{
    alert("click en el contenedor");
});

input.addEventListener("keydown", (e)=>{
    console.log("una tecla fue presionada");
});

input.addEventListener("keypress", (e)=>{
    console.log("un usuario presiono una tecla y la solto");
});

input.addEventListener("keyup", (e)=>{
    console.log("una tecla fue soltada");
});


imgprueba.addEventListener("erro", ()=>{
    console.log("ha sucedido un error");
})

window.addEventListener("load", ()=>{
    console.log("El sitio se ha cargado");
});


window.addEventListener("resize", ()=>{
    console.log("Se ha actualizado la resolucion");
});

input2.addEventListener("select", (e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let fullText = input2.value;
    contenedor5.innerHTML = fullText.substring(start, end);
});

