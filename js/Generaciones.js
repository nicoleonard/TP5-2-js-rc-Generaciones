const generaciones = [{nombre:"Generacion Z",caracteristica:"Irreverencia",intervalo:[1994,2010]},
                      {nombre:"Generacion Y",caracteristica:"Frustracion",intervalo:[1981,1993]},
                      {nombre:"Generacion X",caracteristica:"Obsesion por el exito",intervalo:[1969,1980]},
                      {nombre:"Baby Boom",caracteristica:"Ambicion",intervalo:[1949,1968]},
                      {nombre:"Silent Generation",caracteristica:"Austeridad",intervalo:[1930,1948]}];

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
    get getNombre(){
        return this.#nombre;
    }
    get getEdad(){
        return this.#edad;
    }
    get getDni(){
        return this.#dni;
    }
    get getSexo(){
        return this.#sexo;
    }
    get getPeso(){
        return this.#peso;
    }
    get getAltura(){
        return this.#altura;
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
            if(nacimiento>=generaciones[i].intervalo[0] && nacimiento<=generaciones[i].intervalo[1]){
                generacion = generaciones[i].nombre;
                caracteristica = generaciones[i].caracteristica;
            }
        }
        alert(`Generacion: ${generacion}, Caracteristica: ${caracteristica}`)
    }

    esMayorDeEdad(){
        if(this.getEdad >= 21){
            alert("Es mayor de edad");
        }else{
            alert("Es menor de edad");
        }
    }

    mostrarDatos(){
        return this;
    }
}

let persona = null
//logica de los datos del formulario
let ingreso = document.querySelector("#ingreso");
ingreso.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    let valor_nombre = document.querySelector("#input_nombre");
    let valor_edad = document.querySelector("#input_edad");
    let valor_dni = document.querySelector("#input_dni");
    let valor_sexo = document.querySelector("#input_sexo");
    let valor_peso = document.querySelector("#input_peso");
    let valor_altura = document.querySelector("#input_altura");
    switch(evento.submitter.id){
        case "boton_crear":     if(persona != null){
                                    confirm("Reemplazar persona creada?")
                                }
                                let verificar_datos = ()=>{

                                    if(valor_nombre.value === "" || valor_nombre.value === null){
                                        return false;
                                    }
                                    if(valor_edad.value === "" ||parseInt(valor_edad.value)<13 || parseInt(valor_edad.value)>93){
                                        return false;
                                    }
                                    if(valor_dni.value === "" || parseInt(valor_dni.value)<0 || parseInt(valor_dni.value)>99999999 ){
                                        return false;
                                    }
                                    if(valor_sexo.value.toUpperCase() != "M" && valor_sexo.value.toUpperCase() !="H"){
                                        return false;
                                    }
                                    if(valor_peso.value === "" || parseInt(valor_peso.value)<30 || parseInt(valor_peso.value)>900){
                                        return false;
                                    }
                                    if(valor_altura.value === "" ||parseFloat(valor_altura.value)<1 || parseFloat(valor_altura.value)>4){
                                        return false;
                                    }
                                    return true;
                                }

                                if(!verificar_datos()){
                                    alert("Ingrese los datos correctamente");
                                    return;
                                }
                                persona=new Persona(valor_nombre.value,parseInt(valor_edad.value),valor_dni.value,valor_sexo.value.toUpperCase(),valor_peso.value,valor_altura.value);
                                alert("Persona creada con exito");
                                break;

        case "boton_mostrar":   if(persona === null){
                                    alert("Debe ingresar los datos de una persona antes de consultar su generacion")
                                }else{
                                    persona.mostrarGeneracion();
                                };
                                break;

        case "boton_verificar": if(persona === null){
                                    alert("Debe ingresar los datos de una persona antes de verificar la mayoria de edad")
                                }else{
                                    persona.esMayorDeEdad();
                                };
                                break;
    }

})