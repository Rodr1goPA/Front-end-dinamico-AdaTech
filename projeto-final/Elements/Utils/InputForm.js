const InputForm = (type, id, name, placeholder,classe) =>{
    const element = document.createElement("input")
    element.type = type
    element.id = id
    element.name = name
    element.placeholder = placeholder
    element.classList.add(classe)

    return element
}
export default InputForm