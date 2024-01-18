import CheckBox from "./CheckBox.js";
import Text from "./Text.js";

const Task = (text) => {

const element = document.createElement("div");
      element.classList.add("task");

const checkbox = CheckBox()
const description = Text(text)

element.append(checkbox);
element.append(description);

      return element;
}

export default Task;