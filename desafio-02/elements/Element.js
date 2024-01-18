class Element {
    #element;
    constructor(tagName, props){   
        
        const { classList, innerHTML } = props;

        this.#element = document.createElement(tagName);

        classList?.forEach(styleClass => {
            this.#element.classList.add(styleClass);
        });

        if(innerHTML){
            this.#element.innerHTML = innerHTML;
        }
    }

    getElement(){
        return this.#element;
    }

    addChild(elementChild){
        this.#element.appendChild(elementChild.getElement());
    }
}
export default Element;


