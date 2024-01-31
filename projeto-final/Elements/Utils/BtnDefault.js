const btnDefault = (BtnContent) =>{
    const btnDefault = document.createElement("button")
    btnDefault.classList.add("default-button")
    btnDefault.textContent = BtnContent
    btnDefault.href = "#"

    return btnDefault
}
export default btnDefault