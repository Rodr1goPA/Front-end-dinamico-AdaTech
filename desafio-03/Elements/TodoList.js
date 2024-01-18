const TodoList = (tasks) => {

    const element = document.createElement("div");
    element.classList.add("todo-list");

    tasks?.forEach(task => element.append(task));

    return element;
}
export default TodoList;