import { Data } from '../data/Data.js';

export class Utils {
  constructor() {
    this.Data = new Data()
  };
  
  toggleCompleted(ID) {
    const save = this.Data.getData();
    const found = save.find( todo => todo.ID === ID);
    found.completed = !found.completed;
    this.Data.storage(save);
  };

  deleteTodo(ID) {
    const save = this.Data.getData();
    const foundIndex = save.findIndex( todo => todo.ID === ID );
    save.splice(foundIndex, 1);
    this.Data.storage(save);
    const selectedTodo = document.getElementById(`${ID}`)
    selectedTodo.remove();
    
  };

  keepChenges(ID, title, description, completed) {
    const save = this.Data.getData();
    const found = save.find( todo => todo.ID === ID);
    found.title = title;
    found.description = description;
    found.completed = completed;
    this.Data.storage(save);
  };

};
