// elements/App.js
import Element from "./Element.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";

class App extends Element {
    constructor() {
        const prop = {
            classList: ["todo-app"]
        };
        super("div", prop);

        const header = new Header(1, "Ada Lovelace's Todos");

        const tasks = [
            { id: "task1", text: "Criar o primeiro programa de computador da história" },
            { id: "task2", text: "Escrever contribuições para o desenvolvimento da teoria da computação" },
            { id: "task3", text: "Incentivar o desenvolvimento de computadores" }
        ];

        const todoList = new TodoList(tasks);

        this.addChild(header);
        this.addChild(todoList);
    }
}

export default App;

