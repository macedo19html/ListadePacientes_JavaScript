var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparacida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc"); 

    var pesoEnValido = validaPeso(peso);
    var alturaEnValida = validaAltura(altura);

    if(!pesoEnValido){
        console.log("Peso invalido!");
        pesoEnValido = false;
        tdImc.textContent = "Peso invalido";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEnValida){
        console.log("Altura invalida!");
        alturaEnValida = false;
        tdImc.textContent = "Altura invalida";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEnValida && pesoEnValido){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}