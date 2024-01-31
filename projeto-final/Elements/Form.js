import Header from "./Utils/HeaderContent.js"
import InputForm from "./Utils/InputForm.js"
import btnDefault from "./Utils/BtnDefault.js"
import BtnNavContainer from "./Utils/BtnNavContainer.js"

const Form = (onBackClick, onSikClick, onBtnDefaultClick) => {

    const element = document.createElement("div")
    element.classList.add("row")
    element.classList.add("input-form-group")

    const elementHeader = Header("h1", "Fique por dentro de todas as novidades. Cadastre seu e-mail e receba promoções especiais!")
    elementHeader.id = "header-form"

    const elementForm = document.createElement("form")

    const elementInputName = InputForm("text", "name", "name", "Digite seu nome", "input-form")

    const elementInputEmail = InputForm("email", "email", "email", "Digite seu email", "input-form")

    const elementInputCep = InputForm("number", "postalCode", "postalCode", "Digite seu CEP", "input-form")

    const elementConsentInput = document.createElement("div")
    elementConsentInput.id = "consent-input"

    const elementInputCheckbox = InputForm("checkbox", "consent-checkbox", "optIn")
    elementInputCheckbox.checked = false

    const elementLabel = document.createElement("label")
    elementLabel.htmlFor = "consent-checkbox"
    elementLabel.id = "consent-label"
    elementLabel.textContent = "Concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses."

    const elementRow = document.createElement("div")
    element.classList.add("row")

    const elementBtnCadastrar = btnDefault("Cadastrar")
    elementBtnCadastrar.disabled = true
    elementBtnCadastrar.style.backgroundColor = "#afa59c2f"
    elementBtnCadastrar.style.color = "#6b5e66"

    const elementNavContainer = document.createElement("div")
    elementNavContainer.id = "nav-container"

    const elementBtnBack = BtnNavContainer("back-nav", "Voltar")
    const elementBtnSkip = BtnNavContainer("skip-register", "Pular")


    elementBtnBack.addEventListener("click", () => {
        onBackClick();
    });
    elementBtnSkip.addEventListener("click", () => {
        onSikClick()
    })

    elementInputCheckbox.addEventListener("click", () => {
        if (elementInputCheckbox.checked == true) {
            elementBtnCadastrar.disabled = false
            elementBtnCadastrar.style.backgroundColor = "#e56132"
            elementBtnCadastrar.style.color = "#181C23"
        } else if (elementInputCheckbox.checked == false) {
            elementBtnCadastrar.disabled = true
            elementBtnCadastrar.style.backgroundColor = "#afa59c2f"
            elementBtnCadastrar.style.color = "#6b5e66"
        }

    })

    elementBtnCadastrar.addEventListener("click",async () => {
        const formData = new FormData(elementForm);
        const data = Object.fromEntries(formData.entries());
        localStorage.setItem("Nome", data.name)
        localStorage.setItem("Email", data.email)
        localStorage.setItem("CEP", data.postalCode)
        localStorage.setItem("checkBox",data.optIn = true)
        console.log(data)
        /*chamada da api*/
        await fetch("https://churrascometro-api.vercel.app/leads", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    alert('Formulário enviado com sucesso!');
                } else {
                    alert('Erro ao enviar formulário. Por favor, tente novamente.');
                }
            })
            .catch(error => {
                console.error('Erro ao enviar formulário:', error);
                alert('Erro ao enviar formulário. Por favor, tente novamente.');
            });
        onBtnDefaultClick()
    })

    element.append(elementHeader)
    element.append(elementForm)
    elementForm.append(elementInputName)
    elementForm.append(elementInputEmail)
    elementForm.append(elementInputCep)
    elementForm.append(elementConsentInput)
    elementConsentInput.append(elementInputCheckbox)
    elementConsentInput.append(elementLabel)
    element.append(elementRow)
    elementRow.append(elementBtnCadastrar)
    element.append(elementNavContainer)
    elementNavContainer.append(elementBtnBack)
    elementNavContainer.append(elementBtnSkip)
    return element
}
export default Form