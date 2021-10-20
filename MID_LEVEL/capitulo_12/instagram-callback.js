class Persona{
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const data = [["nombre1", "@instagram_1"], ["nombre2", null],
["nombre3", "@instagram_3"],["nombre4", "@instagram_4"]];

const peoples = [];

for (let i = 0; i < data.length; i++) {
    peoples[i] = new Persona(data[i][0], data[i][1]);
}

const getPeople = (id, cb)=>{
    if(peoples[id] == undefined){
        cb("no se ha encontrado la persona")
    } else {
        cb(null, peoples[id], id);
    }
}

const getInstagram = (peoplee, callback) => {
    if(peoplee.instagram == undefined){
        callback("No se ha encontrado el intagram");
    } else {
        callback(null, peoplee.instagram);
    }
}

getPeople(3, (err, peoplee, id)=>{
    if(err){
        console.log(err);
    } else {
        console.log(peoplee.nombre);
        getInstagram(peoplee, (err, instag)=> {
            if(err){
                console.log("No se ha encontrado el instagram");
            } else{
                console.log("El instagram es "+instag);
            }
        });
    }
})
