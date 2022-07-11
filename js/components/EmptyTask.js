export class EmptyTask {
  createEmptyTask() {
    const list = document.getElementById("lista");
		const sectionContainer = document.createElement("section");
		sectionContainer.classList.add("lista--edit");
		sectionContainer.classList.add("Empty");

    const message = document.createElement("p");
    message.textContent = "You haven't tasks";

    sectionContainer.appendChild(message)
    list.appendChild(sectionContainer);
  }
}