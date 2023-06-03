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

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarPP() {
    var contadorElemento = document.getElementById("contadorPP");
    var contadorPP = parseInt(contadorElemento.innerText);
    contadorPP--;
    if (contadorPP < 0) {
        contadorPP = 0;
    }
    contadorElemento.innerText = contadorPP;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
    contadorElemento.innerText = contador;
}

// Zona PSOE

// Función para incrementar el contador
function incrementarPSOE() {
    var contadorElemento = document.getElementById("contadorPSOE");
    var contadorPSOE = parseInt(contadorElemento.innerText);
    contadorPSOE++;
    contadorElemento.innerText = contadorPSOE;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarPSOE() {
    var contadorElemento = document.getElementById("contadorPSOE");
    var contadorPSOE = parseInt(contadorElemento.innerText);
    contadorPSOE--;

    if (contadorPSOE < 0) {
        contadorPSOE = 0;
    }
    contadorElemento.innerText = contadorPSOE;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;
    if (contador < 0) {
        contador = 0;
    }

    contadorElemento.innerText = contador;
}

// Zona Ciudadanos

// Función para incrementar el contador
function incrementarCS() {
    var contadorElemento = document.getElementById("contadorCS");
    var contadorCS = parseInt(contadorElemento.innerText);
    contadorCS++;
    contadorElemento.innerText = contadorCS;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarCS() {
    var contadorElemento = document.getElementById("contadorCS");
    var contadorCS = parseInt(contadorElemento.innerText);
    contadorCS--;
    if (contadorCS < 0) {
        contadorCS = 0;
    }

    contadorElemento.innerText = contadorCS;


    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
    contadorElemento.innerText = contador;
}

// Zona Vox

// Función para incrementar el contador
function incrementarVOX() {
    var contadorElemento = document.getElementById("contadorVOX");
    var contadorVOX = parseInt(contadorElemento.innerText);
    contadorVOX++;
    contadorElemento.innerText = contadorVOX;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarVOX() {
    var contadorElemento = document.getElementById("contadorVOX");
    var contadorVOX = parseInt(contadorElemento.innerText);
    contadorVOX--;

    if (contadorVOX < 0) {
        contadorVOX = 0;
    }

    contadorElemento.innerText = contadorVOX;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
    contadorElemento.innerText = contador;
}


// Zona Compromis 

// Función para incrementar el contador
function incrementarCOMPROMIS() {
    var contadorElemento = document.getElementById("contadorCOMPROMIS");
    var contadorCOMPROMIS = parseInt(contadorElemento.innerText);
    contadorCOMPROMIS++;
    contadorElemento.innerText = contadorCOMPROMIS;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarCOMPROMIS() {
    var contadorElemento = document.getElementById("contadorCOMPROMIS");
    var contadorCOMPROMIS = parseInt(contadorElemento.innerText);
    contadorCOMPROMIS--;

    if (contadorCOMPROMIS < 0) {
        contadorCOMPROMIS = 0;
    }

    contadorElemento.innerText = contadorCOMPROMIS;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
    contadorElemento.innerText = contador;
}

// Zona RVPE

// Función para incrementar el contador
function incrementarRVPE() {
    var contadorElemento = document.getElementById("contadorRVPE");
    var contadorRVPE = parseInt(contadorElemento.innerText);
    contadorRVPE++;
    contadorElemento.innerText = contadorRVPE;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarRVPE() {
    var contadorElemento = document.getElementById("contadorRVPE");
    var contadorRVPE = parseInt(contadorElemento.innerText);
    contadorRVPE--;
    if (contadorRVPE < 0) {
        contadorRVPE = 0;
    }

    contadorElemento.innerText = contadorRVPE;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;
    if (contador < 0) {
        contador = 0;
    }

    contadorElemento.innerText = contador;
}


// Zona PCPE

// Función para incrementar el contador
function incrementarPCPE() {
    var contadorElemento = document.getElementById("contadorPCPE");
    var contadorPCPE = parseInt(contadorElemento.innerText);
    contadorPCPE++;
    contadorElemento.innerText = contadorPCPE;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarPCPE() {
    var contadorElemento = document.getElementById("contadorPCPE");
    var contadorPCPE = parseInt(contadorElemento.innerText);
    contadorPCPE--;
    if (contadorPCPE < 0) {
        contadorPCPE = 0;
    }

    contadorElemento.innerText = contadorPCPE;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
    contadorElemento.innerText = contador;
}


// Zona Coalició Units COALICIONUNITS

// Función para incrementar el contador
function incrementarCOALICIONUNITS() {
    var contadorElemento = document.getElementById("contadorCOALICIONUNITS");
    var contadorCOALICIONUNITS = parseInt(contadorElemento.innerText);
    contadorCOALICIONUNITS++;
    contadorElemento.innerText = contadorCOALICIONUNITS;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarCOALICIONUNITS() {
    var contadorElemento = document.getElementById("contadorCOALICIONUNITS");
    var contadorCOALICIONUNITS = parseInt(contadorElemento.innerText);
    contadorCOALICIONUNITS--;
    if (contadorCOALICIONUNITS < 0) {
        contadorCOALICIONUNITS = 0;
    }

    contadorElemento.innerText = contadorCOALICIONUNITS;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
    contadorElemento.innerText = contador;
}



// Zona Alianza por el Comercio y la Vivienda

// Función para incrementar el contador
function incrementarALIANZACV() {
    var contadorElemento = document.getElementById("contadorALIANZACV");
    var contadorALIANZACV = parseInt(contadorElemento.innerText);
    contadorALIANZACV++;
    contadorElemento.innerText = contadorALIANZACV;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarALIANZACV() {
    var contadorElemento = document.getElementById("contadorALIANZACV");
    var contadorALIANZACV = parseInt(contadorElemento.innerText);
    contadorALIANZACV--;
    if (contadorALIANZACV < 0) {
        contadorALIANZACV = 0;
    }

    contadorElemento.innerText = contadorALIANZACV;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
    contadorElemento.innerText = contador;
}


// Zona Decidix

// Función para incrementar el contador
function incrementarDecidix() {
    var contadorElemento = document.getElementById("contadorDecidix");
    var contadorDecidix = parseInt(contadorElemento.innerText);
    contadorDecidix++;
    contadorElemento.innerText = contadorDecidix;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarDecidix() {
    var contadorElemento = document.getElementById("contadorDecidix");
    var contadorDecidix = parseInt(contadorElemento.innerText);
    contadorDecidix--;
    if (contadorDecidix < 0) {
        contadorDecidix = 0;
    }

    contadorElemento.innerText = contadorDecidix;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
    contadorElemento.innerText = contador;
}


// Zona Unides Podem-Esquerra Unida  UPEUPV

// Función para incrementar el contador
function incrementarUPEUPV() {
    var contadorElemento = document.getElementById("contadorUPEUPV");
    var contadorUPEUPV = parseInt(contadorElemento.innerText);
    contadorUPEUPV++;
    contadorElemento.innerText = contadorUPEUPV;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarUPEUPV() {
    var contadorElemento = document.getElementById("contadorUPEUPV");
    var contadorUPEUPV = parseInt(contadorElemento.innerText);
    contadorUPEUPV--;
    if (contadorUPEUPV < 0) {
        contadorUPEUPV = 0;
    }

    contadorElemento.innerText = contadorUPEUPV;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
    contadorElemento.innerText = contador;
}

// Zona Partido Animalista con el Medio Ambiente (PACMA)

// Función para incrementar el contador
function incrementarPACMA() {
    var contadorElemento = document.getElementById("contadorPACMA");
    var contadorPACMA = parseInt(contadorElemento.innerText);
    contadorPACMA++;
    contadorElemento.innerText = contadorPACMA;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarPACMA() {
    var contadorElemento = document.getElementById("contadorPACMA");
    var contadorPACMA = parseInt(contadorElemento.innerText);
    contadorPACMA--;
    if (contadorPACMA < 0) {
        contadorPACMA = 0;
    }

    contadorElemento.innerText = contadorPACMA;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
    contadorElemento.innerText = contador;
}

// Zona Esquerra Republicana del País Valencià (ERPV)

// Función para incrementar el contador
function incrementarERPV() {
    var contadorElemento = document.getElementById("contadorERPV");
    var contadorERPV = parseInt(contadorElemento.innerText);
    contadorERPV++;
    contadorElemento.innerText = contadorERPV;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarERPV() {
    var contadorElemento = document.getElementById("contadorERPV");
    var contadorERPV = parseInt(contadorElemento.innerText);
    contadorERPV--;
    if (contadorERPV < 0) {
        contadorERPV = 0;
    }

    contadorElemento.innerText = contadorERPV;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
    contadorElemento.innerText = contador;
}


// Zona Los Verdes-Ecopacifistas

// Función para incrementar el contador
function incrementarLOSVERDES() {
    var contadorElemento = document.getElementById("contadorLOSVERDES");
    var contadorLOSVERDES = parseInt(contadorElemento.innerText);
    contadorLOSVERDES++;
    contadorElemento.innerText = contadorLOSVERDES;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarLOSVERDES() {
    var contadorElemento = document.getElementById("contadorLOSVERDES");
    var contadorLOSVERDES = parseInt(contadorElemento.innerText);
    contadorLOSVERDES--;
    if (contadorLOSVERDES < 0) {
        contadorLOSVERDES = 0;
    }

    contadorElemento.innerText = contadorLOSVERDES;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
    contadorElemento.innerText = contador;
}


// Zona Recortes Cero

// Función para incrementar el contador
function incrementarRecortesCero() {
    var contadorElemento = document.getElementById("contadorRecortesCero");
    var contadorRecortesCero = parseInt(contadorElemento.innerText);
    contadorRecortesCero++;
    contadorElemento.innerText = contadorRecortesCero;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarRecortesCero() {
    var contadorElemento = document.getElementById("contadorRecortesCero");
    var contadorRecortesCero = parseInt(contadorElemento.innerText);
    contadorRecortesCero--;
    if (contadorRecortesCero < 0) {
        contadorRecortesCero = 0;
    }
    contadorElemento.innerText = contadorRecortesCero;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
    contadorElemento.innerText = contador;
}


// Zona Escaños Blanco

// Función para incrementar el contador
function incrementarEscañosBlanco() {
    var contadorElemento = document.getElementById("contadorEscañosBlanco");
    var contadorEscañosBlanco = parseInt(contadorElemento.innerText);
    contadorEscañosBlanco++;
    contadorElemento.innerText = contadorEscañosBlanco;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarEscañosBlanco() {
    var contadorElemento = document.getElementById("contadorEscañosBlanco");
    var contadorEscañosBlanco = parseInt(contadorElemento.innerText);
    contadorEscañosBlanco--;

    if (contadorEscañosBlanco < 0) {
        contadorEscañosBlanco = 0;
    }
    contadorElemento.innerText = contadorEscañosBlanco;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
    contadorElemento.innerText = contador;
}


// Zona Unión Demócrata del Pueblo (UDP).

// Función para incrementar el contador
function incrementarUDP() {
    var contadorElemento = document.getElementById("contadorUDP");
    var contadorUDP = parseInt(contadorElemento.innerText);
    contadorUDP++;
    contadorElemento.innerText = contadorUDP;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}

// Función para decrementar el contador
function decrementarUDP() {
    var contadorElemento = document.getElementById("contadorUDP");
    var contadorUDP = parseInt(contadorElemento.innerText);
    contadorUDP--;
    if (contadorUDP < 0) {
        contadorUDP = 0;
    }

    contadorElemento.innerText = contadorUDP;

    var contadorElemento = document.getElementById("contador");
    var contador = parseInt(contadorElemento.innerText);
    contador--;

    if (contador < 0) {
        contador = 0;
    }
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
