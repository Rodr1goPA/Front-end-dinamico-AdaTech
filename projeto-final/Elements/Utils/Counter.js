import events from "./events.js"

const counts = {
    countHomens : 0,
    countMulheres : 0,
    countCriancas : 0

}
const Counter = (typeGuest) =>{

    const element = document.createElement("div")
    element.classList.add("counter")

    const TypeGuest = typeGuest
    const labelElement = document.createElement("label")
    labelElement.htmlFor = typeGuest
    labelElement.textContent = `${TypeGuest}`

    const inputElement = document.createElement("input")
    inputElement.type = "number"
    inputElement.id = `${TypeGuest}`
    inputElement.value = "0";

    const divButton = document.createElement("div")
    divButton.classList.add("button-group")

    const btnSun = document.createElement("button")
    btnSun.classList.add("input-group__button--small")
    btnSun.textContent = "+"

    const btnSub = document.createElement("button")
    btnSub.classList.add("input-group__button--small")
    btnSub.textContent = "-"
    
    btnSub.addEventListener("click", ()=>{
        if(inputElement.id == "Homens" && counts.countHomens != 0){
            counts.countHomens--
            inputElement.value = counts.countHomens
        } else if(inputElement.id == "Mulheres" && counts.countMulheres != 0){
            counts.countMulheres--
            inputElement.value = counts.countMulheres
        } else if (inputElement.id == "Criancas" && counts.countCriancas != 0){
            counts.countCriancas--
            inputElement.value = counts.countCriancas
        }
        const registerRequested = new CustomEvent(events.RegisterRequest, { bubbles: true, detail: counts });
        btnSun.dispatchEvent(registerRequested);
    })
    btnSun.addEventListener("click", ()=>{
        if(inputElement.id == "Homens"){
            counts.countHomens++
            inputElement.value = counts.countHomens
        } else if(inputElement.id == "Mulheres"){
            counts.countMulheres++
            inputElement.value = counts.countMulheres
        } else if(inputElement.id == "Criancas"){
            counts.countCriancas++
            inputElement.value = counts.countCriancas
        }
        const registerRequested = new CustomEvent(events.RegisterRequest, { bubbles: true, detail: counts });
        btnSun.dispatchEvent(registerRequested);
    })

    element.append(inputElement)
    element.append(labelElement)
    element.append(divButton)
    divButton.append(btnSub)
    divButton.append(btnSun)

    return element
}

export { counts }
export default Counter