const calculo = (objeto) => {
    if (objeto && objeto.valor) {
        const countHomens = objeto.valor.countHomens || 0;
        const countMulheres = objeto.valor.countMulheres || 0;
        const countCriancas = objeto.valor.countCriancas || 0;
   
        const objetoResults = {
            countHomens: countHomens,
            countMulheres: countMulheres,
            countCriancas: countCriancas,
            valorTotal: countHomens + countMulheres + countCriancas,
            carne: (countHomens * 0.4) + (countMulheres * 0.32) + (countCriancas * 0.20),
            paoAlho: (countHomens * 2) + (countMulheres * 2) + (countCriancas * 1),
            carvao: countHomens + countMulheres + countCriancas,
            sal: (countHomens + countMulheres + countCriancas) * 0.4,
            gelo: (countHomens + countMulheres + countCriancas) * 2.5,
            refrigerante: (countHomens + countMulheres + countCriancas) * 0.4,
            agua: (countHomens + countMulheres + countCriancas) * 0.2,
            cerveja: (countHomens + countMulheres) * 3
        }
        
        return objetoResults;
    } else {
        const objetoResults = {
            countHomens: 0,
            countMulheres: 0,
            countCriancas: 0,
            valorTotal: 0
        }
        return objetoResults;
    }
}

export default calculo;
