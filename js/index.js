import { Data } from './data/Data.js';
import { Todo } from './components/Todo.js';
import { TodoLoad } from './components/TodoLoad.js'
import { AlertError } from './components/AlertError.js';
import { EmptyTask } from './components/EmptyTask.js';

document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const alert = document.getElementById('alert');
    
    const form = document.getElementById('formTodo');


    
    const data = new Data()
    const alertError = new AlertError()

    if (!data.getData().length) {
        new EmptyTask().createEmptyTask();
    }

    const dataBase = data.getData();
    dataBase.forEach(todo => new TodoLoad(todo.ID, todo.title, todo.description, todo.completed).addTodo());

    form.addEventListener('submit', function(e) {
        
        e.preventDefault();

        if (title.value === '' || description.value === '') {
            return alertError.validation(alert);
        };
        
        const completed = false;
        const todo = new Todo(title.value, description.value, completed, data);
        todo.addTodo();

        title.value = '';
        description.value = '';
    });

});

// document.addEventListener('click', event => console.log(event));