console.log("holuuu");

const subjects = {
    calculo: [90, 5, 5, "calculo"],
    ingles: [93, 5, 5, "ingles"],
    software: [64, 5, 5, "software"],
    calculo: [95, 5, 5, "calculo"],
    logica: [78, 5, 5, "logica"],
    biologia: [90, 8, 7, "biologia"],
    fisica: [74, 5, 5, "fisica"],
    etica: [60, 5, 5, "etica"],
    algoritmos: [80, 3, 6, "algoritmos"]
}

const asistencia = ()=>{
    console.log("Holaaaa");
    for(subject in subjects){
        let asistencias = subjects[subject][0];
        if(asitencias >= 90){
            console.log(subjects[subject][3]);
            console.log("%cAprobado", "color:green");
        } else {
            console.log(subjects[subject][3]);
            console.log("%cDesaprobado","color:red");
        }
    }
}

