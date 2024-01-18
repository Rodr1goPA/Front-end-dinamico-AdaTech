import Task from "./Task.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import RegisterForm from "./RegisterForm.js";
import events from "../events.js";
import { renderPages1, renderPages2 } from "./appUtils.js";

const App = () => {
    const element = document.createElement("div");
    element.classList.add("todo-app");

    const header = Header("Ada Lovelace's Todos");

    const tasks = [
        Task("Criar o primeiro programa de computador da história"),
        Task("Escrever contribuições para o desenvolvimento da teoria da computação"),
        Task("Incentivar o desenvolvimento de computadores")
    ]

    const btnBack = document.createElement("button")
    btnBack.textContent = "Voltar"

    const todoList = TodoList(tasks);

    const registerForm = RegisterForm();

    element.addEventListener(events.RegisterRequest, (e) => {
        const task = Task(e.detail.text);
        todoList.append(task);
        renderPages2(header, registerForm, todoList, btnBack);
    })

    btnBack.addEventListener('click', () => {
        renderPages1(header, registerForm, todoList, btnBack);
    })

    renderPages1(header, registerForm, todoList, btnBack);
    element.append(header);
    element.append(registerForm);
    element.append(todoList);
    element.append(btnBack)
    return element;
}

export default App;