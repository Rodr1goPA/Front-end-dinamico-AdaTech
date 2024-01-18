import Element from "./Element.js";
import Task from "./Task.js";

class TodoList extends Element {
    constructor(tasks) {
        const props = {
            classList: ["todo-list"]
        };
        super("div", props);

        tasks.forEach(taskData => {
            const task = new Task(taskData);
            this.addChild(task);
        });
    }
}

export default TodoList;
