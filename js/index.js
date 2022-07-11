import { Data } from './data/Data.js';
import { Todo } from './components/Todo.js';
import { TodoLoad } from './components/TodoLoad.js'
import { AlertError } from './components/AlertError.js';
import { Modal } from './components/Modal.js';

// const nums = [0, 3,2,0]
// const target = 0;
// const twoSum = function(nums, target) {
//     const result = [];
//     let a = 0;
//     for (let i=0; i < nums.length - 1; i++) {
//         if (nums[i] + ( nums[i + 1] ) == target) {
//             result.push(i);
//             result.push(i+1);
//             console.log('1: ', result);
//             // a = nums[i] + ( nums[i + 1] )
//         } else if (nums[i] + ( nums[i + 2] ) == target) {
//             result.push(i);
//             result.push(i+2);
//             console.log('2: ', result);
//         } else if (nums[i] + ( nums[i + 3] ) == target) {
//             result.push(i);
//             result.push(i+3);
//             console.log('3: ', result);
//         }
//     };
// };
// twoSum(nums, target);

document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const alert = document.getElementById('alert');
    
    const form = document.getElementById('formTodo');
    
    const data = new Data()
    const alertError = new AlertError()

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