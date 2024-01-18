import Element from "./Element.js";

class Header extends Element {
    constructor(size, title){
        const props = {
            innerHTML: title
        }
        super(`h${size}`, props)
    }
}
export default Header;