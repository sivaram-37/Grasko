export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.modalTemplate = document.getElementById("modal-template");
    this.contentTemplate = document.getElementById(contentId);
  }

  show() {
    if ("content" in document.createElement("template")) {
      const modalContent = document.importNode(this.modalTemplate.content, true);
      const modalElement = modalContent.querySelector(".modal");
      const backdropEl = modalContent.querySelector(".backdrop");
      const contentElement = document.importNode(this.contentTemplate.content, true);

      modalElement.appendChild(contentElement);
      document.body.insertAdjacentElement("afterbegin", modalElement);
      document.body.insertAdjacentElement("afterbegin", backdropEl);
    } else {
      // fallback code
      alert(this.fallbackText);
    }
  }

  hide() {}
}
