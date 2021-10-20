class Persona{
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const data = [["nombre1", "@instagram_1"], ["nombre2", null],
["nombre3"],["nombre4", "@instagram_4"]];

const peoples = [];

for (let i = 0; i < data.length; i++) {
    peoples[i] = new Persona(data[i][0], data[i][1]);
}

const getPeople = (id) => {
    return new Promise(
        (resolve, reject)=>{
            if(peoples[id] == undefined) reject("no se ha encontrado la persona");
            else resolve(peoples[id]);
        }
    )
} 

const getInstagram = (peoplee) => {
    return new Promise((res, rej) => {
        if(peoplee.instagram == undefined) rej("No se ha encontrado el instagram");
        else res(peoplee.instagram);
    })
}

getPeople(2).then(
    (per) => {
    console.log(per.nombre);
    return getInstagram(per);
    }).then(
        (insta) => {
            console.log("El instagram es: "+insta);
        }
    ).catch((e)=>{
    console.log(e);
})

 // getInstagram(peoplee, (err, instag)=> {
        //     if(err){
        //         console.log("No se ha encontrado el instagram");
        //     } else{
        //         console.log("El instagram es "+instag);
        //     }
        // });