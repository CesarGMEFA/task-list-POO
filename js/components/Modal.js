import { Data } from "../data/Data.js";
import { Utils } from "../utils/Utils.js";
import { AlertError } from "./AlertError.js";

export class Modal {
  constructor() {
    this.Data = new Data();
    this.Utils = new Utils();
    this.AlertError = new AlertError();
  }

  createModal(ID) {
    const body = document.querySelector('body');
    const main = document.querySelector('main');

    const section = document.createElement('div');
    section.classList.add('background--modal');
    section.classList.add('background--modal_display');

    const sectionModal = document.createElement('section');
    sectionModal.classList.add('modal');
    
    const inputTitleEdit = document.createElement('input');
    inputTitleEdit.classList.add('form--input');
    inputTitleEdit.setAttribute('id', 'form--input_editTitle')
    sectionModal.appendChild(inputTitleEdit);
    
    const inputDescriptionEdit = document.createElement('input');
    inputDescriptionEdit.classList.add('form--input');
    inputDescriptionEdit.setAttribute('id', 'form--input_editDescription')
    sectionModal.appendChild(inputDescriptionEdit);

    const divCheckbox = document.createElement("div");
    divCheckbox.classList.add('checkbox--edit');
		divCheckbox.classList.add("checkbox");
		sectionModal.appendChild(divCheckbox);

    const checkboxLabel = document.createElement("label");
		checkboxLabel.textContent = "Completed";
		checkboxLabel.setAttribute("for", "completedEdit");
    checkboxLabel.classList.add('checkbox--edit_text');
		divCheckbox.appendChild(checkboxLabel);

    const checkboxInput = document.createElement("input");
		checkboxInput.setAttribute("type", "checkbox");
		checkboxInput.setAttribute("name", "completedEdit");
		checkboxInput.setAttribute("id", "completedEdit");
    // checkboxInput.checked = this.completed;
    // checkboxInput.onclick = () => this.Utils.toggleCompleted(this.title, this.description);
		divCheckbox.appendChild(checkboxInput);
    
    const divButtons = document.createElement('div');
    divButtons.classList.add('modal--box_buttons');
    sectionModal.appendChild(divButtons);

    const buttonCancel = document.createElement('button');
    buttonCancel.classList.add('modal--button');
    buttonCancel.classList.add('modal--color_cancel');
    buttonCancel.setAttribute('type', 'button');
    buttonCancel.textContent = 'Cancel';
    buttonCancel.onclick = () => this.toggleModalCancel();
    sectionModal.appendChild(buttonCancel);
    
    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('modal--button');
    buttonEdit.classList.add('modal--color_edit');
    buttonEdit.setAttribute('type', 'button');
    buttonEdit.textContent = 'Edit';
    buttonEdit.onclick = () => this.edit(ID);
    sectionModal.appendChild(buttonEdit);

    divButtons.append(buttonEdit, buttonCancel);
    
    section.appendChild(sectionModal);
    body.insertBefore(section, main.nextSibling);
  };

  
  toggleModalCancel() {
    const backgroundModal = document.querySelector('.background--modal');
    backgroundModal.classList.toggle('background--modal_display');
  };

  toggleModal(ID) {
    this.createModal(ID)
    const backgroundModal = document.querySelector('.background--modal');
    backgroundModal.classList.toggle('background--modal_display');
    this.select(ID);
  };
  
  select(ID) {
    const sectionSelect = document.getElementById(ID);
	  const textTitle = sectionSelect.children[0];
    const textDescription = sectionSelect.children[1]

	  const inputTitleEdit = document.getElementById("form--input_editTitle");
    const inputDescriptionEdit = document.getElementById('form--input_editDescription');

    const textTitlePlaceholder = textTitle.textContent;
	  inputTitleEdit.setAttribute("placeholder", `${textTitlePlaceholder}`);

    const textDescriptionPlaceholder = textDescription.textContent;
	  inputDescriptionEdit.setAttribute("placeholder", `${textDescriptionPlaceholder}`);

		const checkboxInput = document.getElementById('completedEdit');
    const CompletedSelected = sectionSelect.children[2].children[0].children[1];
    checkboxInput.checked = CompletedSelected.checked;
  };

  edit(ID) {
    const sectionSelect = document.getElementById(ID);
	  const textTitle = sectionSelect.children[0];
    const textDescription = sectionSelect.children[1]

    const inputTitleEdit = document.getElementById("form--input_editTitle");
    const inputDescriptionEdit = document.getElementById('form--input_editDescription');

    if (inputTitleEdit.value == '' || inputDescriptionEdit.value == '') {
      return this.AlertError.validationModal(inputTitleEdit, inputDescriptionEdit);
    };

    textTitle.textContent = inputTitleEdit.value;
    textDescription.textContent = inputDescriptionEdit.value;

    const completedSelected = sectionSelect.children[2].children[0].children[1];
		const checkboxInput = document.getElementById('completedEdit');
    completedSelected.checked = checkboxInput.checked;

    this.Utils.keepChenges(ID, textTitle.textContent, textDescription.textContent, completedSelected.checked);

    this.toggleModalCancel()
  }
};