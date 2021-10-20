let myHeigth = screen.width;
let myWidth = screen.width;

buy = confirm(`el alto de la pantalla es de ${myHeigth} y el ancho s de ${myWidth}, desea comprarlo?`);

if(buy){
    alert("comprado con exito");
} else {
    alert("la compra fue rechazada");
}