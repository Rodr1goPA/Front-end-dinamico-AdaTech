import Header from "./Utils/HeaderContent.js"
import ListResults from "./Utils/ListaResults.js"
import UtilResults from "./Utils/UtilsResult.js"

const Result = (valorTotal,countHomens,countMulheres,countCriancas,carne,paoAlho,carvao,sal,gelo,refrigerante,agua,cerveja) =>{
    const element = document.createElement("div")
    element.classList.add("result-total-guest")

    const elementHeader = Header("h3", "Confira a lista para o seu churrasco!")

    const elementP = document.createElement("p")
    elementP.id = "total-guest"
    elementP.textContent = `${valorTotal}`
    
    const elementSpanTotalGuest1 = UtilResults(`${countHomens} Homens`)
    const elementSpanTotalGuest2 = UtilResults(`${countMulheres} Mulheres`)
    const elementSpanTotalGuest3 = UtilResults(`${countCriancas} Crianças`)


    element.append(elementHeader)
    element.append(elementP)
    element.append(elementSpanTotalGuest1)
    element.append(elementSpanTotalGuest2)
    element.append(elementSpanTotalGuest3)
   
    /*Codigo da tabela de resultados*/
    const element2 = document.createElement("div")
    element2.classList.add("input-group-result")

    const element2HeaderResult = document.createElement("div")
    element2HeaderResult.id = "header-result"

    const element2P = document.createElement("p")
    element2P.textContent = "ITEM"

    const element2P2 = document.createElement("p")
    element2P2.textContent = "QUANTIDADE"

    const elementUl = document.createElement("ul")
    elementUl.classList.add("results")

    const elementLiCarne = ListResults("Carne", carne !== undefined ? carne.toFixed(2) : "0.00", "kg")
    const elementLiPapAlho = ListResults("Pão de Alho", paoAlho !== undefined ? paoAlho : 0, "Unidade")
    const elementLiCarvao = ListResults("Carvão", carvao !== undefined ? carvao.toFixed(2) : "0.00", "kg")
    const elementLiSal = ListResults("Sal", sal !== undefined ? sal.toFixed(2) : "0.00", "kg")
    const elementLiGelo = ListResults("Gelo", gelo !== undefined ? gelo : 0, "kg")
    const elementLiRefrigerante = ListResults("Refrigerante", refrigerante !== undefined ? refrigerante.toFixed(2) : "0.00", "ml")
    const elementLiAgua = ListResults("Agua", agua !== undefined ? agua.toFixed(2) : "0.00", "ml")
    const elementLiCerveja = ListResults("Cerveja", cerveja !== undefined ? cerveja : 0, "Guarrafa 600ml")

    element2.append(element2HeaderResult)
    element2HeaderResult.append(element2P,element2P2)
    element2.append(elementUl)
    elementUl.append(elementLiCarne)
    elementUl.append(elementLiPapAlho)
    elementUl.append(elementLiCarvao)
    elementUl.append(elementLiSal)
    elementUl.append(elementLiGelo)
    elementUl.append(elementLiRefrigerante)
    elementUl.append(elementLiAgua)
    elementUl.append(elementLiCerveja)
    
    
    return [element , element2]
}
export default Result