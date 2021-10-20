let nombre = "peddro";

const promesas = new Promise((resolve, reject)=>{
    if(nombre !== "pedro") reject("Lo siento. el nombre no es Pedro");
    else resolve(nombre);
})

promesas.then((resultado)=>{
    console.log(resultado)
}).catch((e)=>{
    console.log(e)
});
