function run() {
    let btn = document.querySelector('#todo-add');
    btn.addEventListener('click', addNewToDo);
}

function addNewToDo(event) {
    event.preventDefault();

    const todo = document.querySelector('#todo-label');
    const value = todo.value.trim();

    if (value.length > 0) {
        const hash = (Date.now().toString(36).substr(2, 4) + performance.now().toString(36).replace('.','').substr(0, 4) + Math.random().toString(36).substr(3, 4)).toUpperCase();

        const id = `todo-select-${hash}`;
        const template = document.querySelector('#todo-item');
        const item = document.importNode(template.content, true);
        const label = item.querySelector('label[for]');
        const input = item.querySelector('#todo-select')
        const list = document.querySelector('#todo-list');

        input.setAttribute('id', id);
        label.setAttribute('for', id);

        label.textContent = value;

        list.appendChild(item);
    }

    todo.value = '';
}

run();