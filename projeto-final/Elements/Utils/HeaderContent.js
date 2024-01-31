const Header = (TipoHeader , ContentHeader) =>{
    const header = document.createElement(TipoHeader)
    header.textContent = ContentHeader
    return header
}
export default Header