// Función para incrementar el contador
function incrementar() {
    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementar() {
    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;
    contadorElemento.innerText = contador;
}

// Zona PP

// Función para incrementar el contador
function incrementarPP() {
    var contadorElemento = document.getElementById("contadorPP");
    var contadorPP = parseInt(contadorElemento.innerText);
    contadorPP++;
    contadorElemento.innerText = contadorPP;
}

// Función para decrementar el contador
function decrementarPP() {
    var contadorElemento = document.getElementById("contadorPP");
    var contadorPP = parseInt(contadorElemento.innerText);
    contadorPP--;
    contadorElemento.innerText = contadorPP;
}

// Zona PSOE

// Función para incrementar el contador
function incrementarPSOE() {
    var contadorElemento = document.getElementById("contadorPSOE");
    var contadorPSOE = parseInt(contadorElemento.innerText);
    contadorPSOE++;
    contadorElemento.innerText = contadorPSOE;
}

// Función para decrementar el contador
function decrementarPSOE() {
    var contadorElemento = document.getElementById("contadorPSOE");
    var contadorPSOE = parseInt(contadorElemento.innerText);
    contadorPSOE--;
    contadorElemento.innerText = contadorPSOE;
}

// Zona Ciudadanos

// Función para incrementar el contador
function incrementarCS() {
    var contadorElemento = document.getElementById("contadorCS");
    var contadorCS = parseInt(contadorElemento.innerText);
    contadorCS++;
    contadorElemento.innerText = contadorCS;
}

// Función para decrementar el contador
function decrementarCS() {
    var contadorElemento = document.getElementById("contadorCS");
    var contadorCS = parseInt(contadorElemento.innerText);
    contadorCS--;
    contadorElemento.innerText = contadorCS;
}

// Zona Vox

// Función para incrementar el contador
function incrementarVOX() {
    var contadorElemento = document.getElementById("contadorVOX");
    var contadorVOX= parseInt(contadorElemento.innerText);
    contadorVOX++;
    contadorElemento.innerText = contadorVOX;
}

// Función para decrementar el contador
function decrementarVOX() {
    var contadorElemento = document.getElementById("contadorVOX");
    var contadorVOX = parseInt(contadorElemento.innerText);
    contadorVOX--;
    contadorElemento.innerText = contadorVOX;
}


// Zona Compromis FALTAAAA

// Función para incrementar el contador
function incrementarCOMPROMIS() {
    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementar() {
    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;
    contadorElemento.innerText = contador;
}




















// Zona 

// Función para incrementar el contador
function incrementar() {
    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementar() {
    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;
    contadorElemento.innerText = contador;
}







// Función para abrir el diálogo
function abrirDialogo() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  }
  
  // Función para cerrar el diálogo
  function cerrarDialogo() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
  // Función para guardar el nuevo título
  function guardarTitulo() {
    var nuevoTitulo = document.getElementById("nuevo-titulo").value;
    var tituloElemento = document.getElementById("titulo");
    tituloElemento.innerText = nuevoTitulo;
    cerrarDialogo();
  }
  