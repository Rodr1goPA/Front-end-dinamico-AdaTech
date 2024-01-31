const ListResults = (textContent,qtdItens,typeQtd) =>{

    const elementLi = document.createElement("li")

    const elementStrong = document.createElement("strong")
    elementStrong.textContent = textContent

    const elementSpan = document.createElement("span")
    elementSpan.textContent = `${qtdItens} ${typeQtd}`

    elementLi.append(elementStrong)
    elementLi.append(elementSpan)
    
    return elementLi
}
export default ListResults