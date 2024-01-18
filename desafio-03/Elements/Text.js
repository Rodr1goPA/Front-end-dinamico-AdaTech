const Text = (text) => {

    const element = document.createElement("p");
    element.innerText = text;  
    
    return element;
}
export default Text;