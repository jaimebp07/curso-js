console.log("Holaaa");

const contenedor = document.querySelector(".contenedor");

const lista = document.createElement("LI");

const textoLista = document.createTextNode("este es un item de la lista");

//Colocar un nodo dentro de otro nodo
//lista.innerHTML = textoLista;

lista.appendChild(textoLista);
 contenedor.appendChild(lista);
 contenedor.appendChild(lista);
console.log(lista);