import events from "../events.js";

const RegisterForm = () => {

    const element = document.createElement("div");

    const input = document.createElement("input");
    input.setAttribute("type", "text");

    const button = document.createElement("button");
    

    button.textContent = "Cadastrar";

    button.addEventListener("click", () =>{

        const message = {
            text: input.value
        }        
        const registerRequested = new CustomEvent(events.RegisterRequest, { bubbles: true, detail: message });
        
        button.dispatchEvent(registerRequested);
    });

    element.append(input);
    element.append(button);
    
    return element;
}

export default RegisterForm;