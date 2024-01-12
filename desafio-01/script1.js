var countHomens = 0;
var countMulheres = 0;
var countCriancas = 0;

function incremento(paramsIncremento) {
    if(paramsIncremento == "homens"){
        countHomens++;
        let inputValor = document.getElementById("Homens");
        inputValor.value = countHomens;
    } else if (paramsIncremento == "mulheres"){
        countMulheres++;
        let inputValor = document.getElementById("Mulheres");
        inputValor.value = countMulheres;
    }else if (paramsIncremento == "criancas"){
        countCriancas++;
        let inputValor = document.getElementById("Criancas");
        inputValor.value = countCriancas;
    }

    localStorage.setItem("countHomens", countHomens);
    localStorage.setItem("countMulheres", countMulheres);
    localStorage.setItem("countCriancas", countCriancas);
}

function decremento(paramsDecremento) {
    if(paramsDecremento == "homens" && countHomens != 0){
        countHomens--;
        let inputValor = document.getElementById("Homens");
        inputValor.value = countHomens;
    } else if (paramsDecremento == "mulheres" && countMulheres != 0){
        countMulheres--;
        let inputValor = document.getElementById("Mulheres");
        inputValor.value = countMulheres;
    } else if (paramsDecremento == "criancas" && countCriancas !=0){
        countCriancas--;
        let inputValor = document.getElementById("Criancas");
        inputValor.value = countCriancas;
    }

    localStorage.setItem("countHomens", countHomens);
    localStorage.setItem("countMulheres", countMulheres);
    localStorage.setItem("countCriancas", countCriancas);
}