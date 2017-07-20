   ///////////////////////
  //       DP ID       //
 // Creado por rodel  //
///////////////////////

var hobby = {
    "Constructor/a de ": [
        "mansiones",
        "lagos",
        "granjas de hierro",
        "laberintos sin salida",
        "parques acuaticos",
        "cabezas embrujadas",
        "jugetes diabolicos",
        "bombas atomicas"
    ],
    "Cazador/a de ": [
        "dragones",
        "pies",
        "guayabas",
        "piñatas asesinas",
        "caramelos deliciosos",
        "bosses",
        "esencias",
        "items",
        "duendes del campo"
    ],
    "Amante de ": [
        "los chocolates adorables",
        "el amor",
        "los dias del mes",
        "deadplayers",
        "deadworld",
        "den",
        "skyblock",
        "los eventos",
        "ganar esencias"
    ],
    "Le gusta oir ": [
        "musica clasica",
        "dubpstep",
        "reggaeton"
    ]
}

var ban = {
    "Asesinar ": [
        "a un rey",
        "a un boss con los ojos",
        "a un inocente conejo"
    ],
    "Hacer ": [
        "una casa de tierra",
        "un incendio forestal"
    ],
    "Caminar ": [
        "500 millas",
        "sobre la cuerda floja",
        "de espaldas"
    ],
    "Bailar ": [
        "en el spawn",
        "reggaeton"
    ],
    "Escalar ": [
        "una montaña",
        "en el spawn"
    ]
}

function generateAction(){
    var keys = Object.keys(hobby);
    var values = Object.values(hobby);
    var index = Math.floor(Math.random()*keys.length);
    var subIndex = Math.floor(Math.random()*values[index].length);
    return keys[index]+values[index][subIndex];
}

function generateBan(){
    var keys = Object.keys(ban);
    var values = Object.values(ban);
    var index = Math.floor(Math.random()*keys.length);
    var subIndex = Math.floor(Math.random()*values[index].length);
    return keys[index]+values[index][subIndex];
}

document.querySelector("#submit").onsubmit = function(e){
    e.preventDefault();
    Math.seedrandom(document.querySelector("#name").value.toLowerCase());
    document.querySelector("#char").src = "https://minotar.net/bust/"+document.querySelector("#name").value+"/100.png";
    document.querySelector("#idname").innerHTML = document.querySelector("#name").value;
    document.querySelector("#age").innerHTML = Math.floor(Math.random()*100)+10;
    document.querySelector("#hobby").innerHTML = generateAction();
    document.querySelector("#ban").innerHTML = generateBan();
    document.querySelector("#valid").innerHTML = (Math.floor(Math.random()*28)+1)+"/"+(Math.floor(Math.random()*11)+1)+"/"+(new Date().getFullYear()+Math.floor(Math.random()*11)+1);
};