function inicio(){
    var boton = document.getElementById("boton");
    boton.addEventListener("click", cambiar);
    console.log("Funciona???")
}

function cambiar(){

    var lista = ["#F00", "#ccc", "#000", "#abc", "#cff"];

    var divicito = document.getElementById("body");

    divicito.style.backgroundColor = lista[Math.floor(Math.random() * lista.length)];
}



