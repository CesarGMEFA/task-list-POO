export class Data {
	constructor() {
		this.save = this.getData();
	}

	keep(ID, title, description, completed) {
		const objectSaveData = { ID, title, description, completed };
		this.save.push(objectSaveData);
    this.storage(this.save);
	}

  storage(dataToLocalStorage) {
    localStorage.setItem('TASK', JSON.stringify(dataToLocalStorage));
  }

  getData() {
    const getlocalStorage = localStorage.getItem('TASK');
    
    let parsed = [];
    if(!getlocalStorage) {
      localStorage.setItem('TASK', JSON.stringify([]));
    } else {
      parsed = JSON.parse(getlocalStorage);
    }

    this.save = [...parsed];

    return this.save;
  
  }
};
