export function renderPages1(header, registerForm, todoList, btnBack) {
    header.style.display = 'block';
    registerForm.style.display = 'block';
    todoList.style.display = 'none';
    btnBack.style.display = 'none';
}

export function renderPages2(header, registerForm, todoList, btnBack) {
    header.style.display = 'block';
    registerForm.style.display = 'none';
    todoList.style.display = 'block';
    btnBack.style.display = 'block';
}