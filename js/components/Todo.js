import { Pencil } from "./Pencil.js";
import { Trash } from "./Trash.js"
import { Utils } from "../utils/Utils.js";
import { Modal } from './Modal.js';

export class Todo {
	constructor( title, description, completed, data ) {
		this.title = title;
		this.description = description;
		this.completed = completed;
		this.Data = data;
		this.Utils = new Utils();
		this.Pencil = new Pencil();
		this.Trash = new Trash();
		this.Modal = new Modal();
	}

	ID() {
    let ID = this.Data.save.length;
    let found = this.Data.save.find(todo => todo.id === ID);

    if (found) {
      ID += 1
    };

    return ID;
	};
	

	addTodo() {
		const lista = document.getElementById("lista");
		this.ID()
		const sectionContainer = document.createElement("section");
		sectionContainer.setAttribute('id', `${this.ID()}`);
		sectionContainer.classList.add("lista--edit");

		const firstP = document.createElement("p");
		firstP.classList.add("lista--edit_titulo");
		firstP.textContent = `${this.title}`;
		sectionContainer.appendChild(firstP);

		const secondP = document.createElement("p");
		secondP.classList.add("lista--edit_descripcion");
		secondP.textContent = `${this.description}`;
		sectionContainer.appendChild(secondP);

		const sectionEdit = document.createElement("section");
		sectionEdit.classList.add("lista--edit_botones");

		const divCheckbox = document.createElement("div");
		divCheckbox.classList.add("checkbox");
		sectionEdit.appendChild(divCheckbox);

		const checkboxLabel = document.createElement("label");
		checkboxLabel.textContent = "Completed";
		checkboxLabel.setAttribute("for", "completed");
		divCheckbox.appendChild(checkboxLabel);

		const checkboxInput = document.createElement("input");
		checkboxInput.setAttribute("type", "checkbox");
		checkboxInput.setAttribute("name", "completed");
    checkboxInput.checked = this.completed;
    checkboxInput.onclick = () => this.Utils.toggleCompleted(this.title, this.description);
		divCheckbox.appendChild(checkboxInput);

		const divButtons = document.createElement("div");
		divButtons.classList.add("buttons");
		sectionEdit.appendChild(divButtons);

		const buttonPencil = this.Pencil.add();
		buttonPencil.onclick = (e) => this.Modal.toggleModal(this.ID());
		divButtons.appendChild(buttonPencil);

		const buttonTrash = this.Trash.add();
    buttonTrash.onclick = (e) => this.Utils.deleteTodo(this.ID());
    divButtons.appendChild(buttonTrash);

		sectionContainer.appendChild(sectionEdit);
		lista.appendChild(sectionContainer);

		if (this.Data != undefined) this.Data.keep(this.ID(), this.title, this.description, this.completed);
    
	};
};