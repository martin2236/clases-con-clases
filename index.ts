class Edificio {
    pisos: Piso[];
    constructor(pisos:Piso[]){
        this.pisos = pisos;
    }

    addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
        const pisoENcontrado = this.pisos.find(p => p.nombre == nombreDePiso)
        pisoENcontrado.pushDepartamento(departamento)
        return pisoENcontrado;
    }
    getDepartamentosByPiso(nombreDePiso:string):Departamento[]{
        const pisoEncontrado = this.pisos.find(p=>p.nombre == nombreDePiso)
        return pisoEncontrado.getDepartamentosByPiso();
    }
}
class Piso {
    nombre:string;
    deptos:Departamento[]

    constructor(pisoNumero:string) {
       this.nombre = pisoNumero;
       this.deptos = [];
     }
     pushDepartamento(algo:Departamento){
        this.deptos.push(algo)
     }
     getDepartamentosByPiso():Departamento[] {
         return this.deptos;
     }
}

class Departamento
 {
     nombre:string
    constructor(nombre:string) {
        this.nombre = nombre;
    }
    getName(){
        return this.nombre
    };

}

function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
    console.log(unEdificio)
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
    
  }
  main();