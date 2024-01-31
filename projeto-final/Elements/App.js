import Header from "./Utils/HeaderContent.js"
import Counters from "./Counters.js"
import BtbCalcular from "./BtnCalcular.js"
import Form from "./Form.js"
import Result from "./Result.js"
import btnDefault from "./Utils/BtnDefault.js"
import events from "./Utils/events.js"
import calculo from "./Utils/calculo.js"

const App = () => {
    let objetoResults = {}

    const element = document.createElement("div")
    element.classList.add("container")

    const header = Header("h1", "Churrascômetro")

    const divCalculator = document.createElement("div")
    divCalculator.classList.add("calculator")

    const headerCalculator = Header("h3", "Precisa de uma ajudinha com o churrasco? :) Quantas pessoas vão participar?")

    const counters = Counters()

    let result1, result2

    let statusResult = localStorage.getItem('Nome')
    const manipularElementosApp =  () => {
        objetoResults = calculo(inputIncremento)
        divCalculator.removeChild(headerCalculator)
        divCalculator.removeChild(counters)
        divCalculator.removeChild(divRow)
        if (statusResult) {
            [result1, result2] = Result(objetoResults.valorTotal,objetoResults.countHomens,objetoResults.countMulheres,objetoResults.countCriancas,objetoResults.carne,objetoResults.paoAlho,objetoResults.carvao,objetoResults.sal,objetoResults.gelo,objetoResults.refrigerante,objetoResults.agua,objetoResults.cerveja)
            divCalculator.append(result1, result2)
            divCalculator.append(btnNovoCalculo)
        } else {
            divCalculator.append(form)
        }
    };

    const divRow = BtbCalcular(manipularElementosApp)

    const form = Form(
        () => {
            divCalculator.removeChild(form);
            divCalculator.append(headerCalculator);
            divCalculator.append(counters);
            divCalculator.append(divRow);
        },
        () => {
            divCalculator.removeChild(form);
            [result1, result2] = Result(objetoResults.valorTotal,objetoResults.countHomens,objetoResults.countMulheres,objetoResults.countCriancas,objetoResults.carne,objetoResults.paoAlho,objetoResults.carvao,objetoResults.sal,objetoResults.gelo,objetoResults.refrigerante,objetoResults.agua,objetoResults.cerveja)
            divCalculator.append(result1, result2);
            divCalculator.append(btnNovoCalculo)
        },
        () => {
            divCalculator.removeChild(form);
            [result1, result2] = Result(objetoResults.valorTotal,objetoResults.countHomens,objetoResults.countMulheres,objetoResults.countCriancas,objetoResults.carne,objetoResults.paoAlho,objetoResults.carvao,objetoResults.sal,objetoResults.gelo,objetoResults.refrigerante,objetoResults.agua,objetoResults.cerveja)
            divCalculator.append(result1, result2);
            divCalculator.append(btnNovoCalculo)
        }
    )
    
    const btnNovoCalculo = btnDefault("Novo Calculo")

    btnNovoCalculo.addEventListener("click", () => {
        window.location.reload();
    })

    let inputIncremento = {}
    element.addEventListener(events.RegisterRequest, (e)=>{
        inputIncremento = {
            valor:e.detail
        }
    })

    element.append(header)
    element.append(divCalculator)
    divCalculator.append(headerCalculator)
    divCalculator.append(counters)
    divCalculator.append(divRow)

    return element
}
export default App