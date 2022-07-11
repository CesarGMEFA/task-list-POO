export class Trash {

  add() {
		const faTrash = document.createElement("i");
		faTrash.classList.add("fa");
		faTrash.classList.add("fa-trash");
		faTrash.classList.add("trash");
		return faTrash;
  };
  
};