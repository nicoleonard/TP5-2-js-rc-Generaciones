const generaciones = [{nombre:"Generacion Z",caracteristica:"Irreverencia",intervalo:[1994,2010]},
                      {nombre:"Generacion Y",caracteristica:"Frustracion",intervalo:[1981,1993]},
                      {nombre:"Generacion X",caracteristica:"Obsesion por el exito",intervalo:[1969,1980]},
                      {nombre:"Baby Boom",caracteristica:"Ambicion",intervalo:[1949,1968]},
                      {nombre:"Silent Generation",caracteristica:"Austeridad",intervalo:[1930/1948]}];

class Persona{
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;

    constructor(nombre,edad,dni,sexo,peso,altura){
        this.#nombre=nombre;
        this.#edad=edad;
        this.#dni=dni;
        this.#sexo=sexo;
        this.#peso=peso;
        this.#altura=altura;
    }

    get getEdad(){
        return this.#edad;
    }

    set setNombre(nombre){
        this.#nombre = nombre;
    }
    set setEdad(edad){
        this.#edad = edad;
    }
    set setDni(dni){
        this.#dni = dni;
    }
    set setSexo(sexo){
        this.#sexo = sexo;
    }
    set setPeso(peso){
        this.#peso = peso;
    }
    set setAltura(altura){
        this.#altura = altura;
    }

    mostrarGeneracion(){
        let fecha = new Date();
        let año = parseInt(fecha.getFullYear());
        let nacimiento = año - this.getEdad;
        let generacion = "";
        let caracteristica = "";
        for(let i=0;i<generaciones.length;i++){
            if(nacimiento>generaciones[i].intervalo[0] && nacimiento<generaciones[i].intervalo[1]){
                generacion = generaciones[i].nombre;
                caracteristica = generaciones[i].caracteristica;
            }
        }
        alert(`Generacion: ${generacion}, Caracteristica: ${caracteristica}`)
    }
}

let persona = new Persona("marcelo gallardo", 58, 22327188,"M","65kg","1,70m")