function inicializarValores() {
    countHomens = parseInt(localStorage.getItem("countHomens")) || 0;
    countMulheres = parseInt(localStorage.getItem("countMulheres")) || 0;
    countCriancas = parseInt(localStorage.getItem("countCriancas")) || 0;

    let totalConvidados = countHomens + countMulheres + countCriancas;
    
    let inputTotalConvidados = document.getElementById("qtdConvidados")
    inputTotalConvidados.innerHTML = `${totalConvidados} convidados`

    let inputTipoConvidados = document.getElementById("tipoConvidados")
    inputTipoConvidados.innerHTML = `${countHomens} Homem ${countMulheres} Mulher ${countCriancas} Criança`
}
inicializarValores();