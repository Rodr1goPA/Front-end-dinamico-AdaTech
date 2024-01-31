import btnDefault from "./Utils/BtnDefault.js"

const BtbCalcular = (callback) =>{
    
    const element = document.createElement("div")
    element.classList.add("row")

    const elementBtnDefault = btnDefault("Calcular")

    elementBtnDefault.addEventListener("click" , () =>{
        callback();
    })

    element.append(elementBtnDefault)
    return element
}
export default BtbCalcular