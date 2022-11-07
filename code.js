var palabrasCorrectas = ["hola"];
var letrasIntroducidas = [];
var huecos = [];
var palabraSeparada = [];
var slash = "_";
for (var i=0;i<palabrasCorrectas[0].length;i++){
    huecos.push(slash);
    palabraSeparada = palabrasCorrectas[0].split('');
}
document.getElementsByClassName("huecosAresolver").innerHTML = huecos;





//me divide las palabras en letras
//palabrasCorrectas[0].split("");

//recorre la palabra entera y me dice la posicion de donde se encuentra cada letra
//palabrasCorrectas[0].includes();


function introducirLetra(){
    var letra = document.getElementById("respuesta").value;
    if(letra.length==1){
        letrasIntroducidas.push(letra);
        alert(letrasIntroducidas);
        compararLetras();

    }else{
        alert("error");
    }


}

function compararLetras(){
    var letra = document.getElementById("respuesta").value;
    console.log(letra);


    if(palabrasCorrectas[0].includes(letra) == true){
        alert("correcto");
        cambiarHuecos();
    }else{
        alert("incorrecto");
    }
}

function cambiarHuecos(){
    var letra = document.getElementById("respuesta").value;
    while(palabraSeparada =! huecos){
        huecos[palabrasCorrectas[0].includes((letra))] = palabraSeparada[palabrasCorrectas[0].includes(letra)];
        alert(huecos);
    }


}