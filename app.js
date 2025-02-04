// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables
let amigos = []

//elementos
const listaAmigos=document.getElementById("listaAmigos");
const nombreAmigo=document.getElementById("amigo");
const resultado=document.getElementById("resultado");
//funciones
function agregarAmigo(){
    let nombre=nombreAmigo.value;
        nombreAmigo.value="";
        //verifico si el nombr esta vacio
    if (nombre=="") {
        return;
    }
    //agrego el nombre
    amigos.push(nombre)
    listaAmigos.innerHTML="";
    //recooro el arreglo
    amigos.forEach(amigo => {
        //creo elemento y lo agrego
        const am=document.createElement("li");
        am.innerHTML=`<li>${amigo}</li>`
        listaAmigos.appendChild(am)
        
    });

}

function sortearAmigo() {
    //veo cuantos elementtos tiene el array
    let maximoNombres=amigos.length;
    //limpio el resultado
    resultado.innerHTML="";
    if (maximoNombres>0) {
        //creo elemento y agrego un nombre random
        const resultadoAmigo=document.createElement("li")
        resultadoAmigo.innerHTML=`<li>${amigos[Math.floor(Math.random()*maximoNombres)]}</li>`
        resultado.appendChild(resultadoAmigo)
        //limpio lista
        listaAmigos.innerHTML=""
    }
}

