import Counter from "./Utils/Counter.js"

const Counters = () =>{
    const element = document.createElement("div")
    element.classList.add("counters")
    
    const counterHomens = Counter("Homens")

    const counterMulheres = Counter("Mulheres")

    const counterCriancas = Counter("Criancas")

    element.append(counterHomens)
    element.append(counterMulheres)
    element.append(counterCriancas)
    
    return element
}
export default Counters