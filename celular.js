class Celular {
    constructor(color, peso, resolucion, camara, RAM){
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.RAM = RAM;
    }

    turnOn(){
        document.write(`encendido`);
    }

    restart(){
        document.write(`reiniciado \n`);
    }

    takePhotos(){
        document.write(`foto tomada en una resolucion de ${this.resolucion}`);
    }

    record(){
        document.write(`Grabando`);
    }

    set setRAM(sizeRAM){
        this.RAM = sizeRAM;
    }

    get getRAM(){
        return this.RAM;
    }
}

const celular1 = new Celular("negro", "200g", "hd", 16, "2GB");

celular1.restart();
celular1.setRAM = "3GB";
document.write(celular1.getRAM);


class HighEndCellPhone extends Celular{
    constructor(color, peso, resolucion, camara, RAM){
        super(color, peso, resolucion, camara, RAM);
    }

    recordInSlowMotion(){
        document.write(`Grabacion en camara lenta`);
    }
    
    facialRecognition(){
        document.write(`Reconocimiento facial`);
    }
}

document.write("<br>");
document.write("<br>");
const highEndCellPhone1 = new HighEndCellPhone("azul", "200g", "full HD", 16, "6GB");
highEndCellPhone1.takePhotos();
document.write(highEndCellPhone1.getRAM);