//* ======================================================
//*                     TODO APP
//* ======================================================
//? Selectors
const btn = document.getElementById('todo-button');
const todoInput = document.getElementById('todo-input');
const todoUl = document.getElementById('todo-ul');
const container = document.getElementById('container');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

renderSavedTodos();

function renderSavedTodos() {
    todos.forEach((todo) => {
        createListElement(todo);
    });
}

function createListElement(todo) {
    //? her bir todo objesini destructure yaptık
    const { id, content, isDone } = todo;
    todoUl.innerHTML += `
    <li id=${id} class=${isDone && 'checked'}>
      <i class="fa fa-check"></i>
      <p>${content}</p>
      <i class="far fa-edit"></i>
      <i class="fa fa-trash"></i>
    </li>`;
}

//? Baslangicta input aktif olsun
window.onload = function() {
    todoInput.focus();
};

//? Add Buton Event'inin tanimanmasi
btn.addEventListener('click', () => {
    if (!todoInput.value) {
        alert('Please enter your todo');
    } else {
        const todoObject = {
            id: new Date().getTime(),
            isDone: false,
            content: todoInput.value,
        };

        //?Yeni olsuturulan todo'yu diziye sakla
        todos.push(todoObject);

        //?todos dizisinin son halini localStorage'e sakla
        localStorage.setItem('todos', JSON.stringify(todos));

        createListElement(todoObject);
        todoInput.value = '';
    }
});

//? Klavyeden enter tusuna basilmasi ile add butonunun click fonksiyonunun cagrilmasi
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        btn.click();
    }
});

//? delete ve ok butonları için event tanimlamasi
todoUl.addEventListener('click', (e) => {
    const id = e.target.parentElement.getAttribute("id")

    //!Event, sil butonlarının birisinden geldi ise
    if (e.target.classList.contains('fa-trash')) {
        todos = todos.filter((todo) => todo.id != id);
        //? ilgili li elementini silerek DOM'u güncelle
        e.target.parentElement.remove();
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    let cont;
    //!Event, Edit butonlarının birisinden geldi ise
    if (e.target.classList.contains('fa-edit')) {
        todos = todos.filter((todo) => {
            todo.id != id
        });
        console.log('Edit butonuna basildi');
        let editInput = document.createElement('input');
        let editBtn = document.createElement('button');
        editInput.setAttribute("type", "text");
        editInput.className = 'edit';
        container.appendChild(editInput);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    //!Event, silme veya ok butonlarından geldi ise
    if (e.target.classList.contains('fa-check')) {
        todos.map((todo, index) => {
            if (todo.id == id) {
                todos[index].isDone = !todos[index].isDone;
            }
        });

        localStorage.setItem('todos', JSON.stringify(todos));
        //? ilgili li elementinde checked adinda bir class varsa bunu sil
        if (e.target.parentElement.classList.contains('checked')) {
            e.target.parentElement.classList.remove('checked');
        } else {
            //? ilgili li elementinde checked adinda bir class yoksa ekle
            e.target.parentElement.classList.add('checked');
        }
    }
});