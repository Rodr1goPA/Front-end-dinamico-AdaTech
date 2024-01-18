import Element from "./Element.js";

class Task extends Element {
    constructor(taskData) {
        const { id, text } = taskData;

        const props = {
            classList: ["task"]
        };

        super("div", props);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = id;

        const taskText = document.createElement("p");
        taskText.textContent = text;

        this.getElement().appendChild(checkbox);
        this.getElement().appendChild(taskText);
    }
}

export default Task;
