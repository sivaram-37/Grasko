export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.modalTemplate = document.getElementById("modal-template");
    this.contentTemplate = document.getElementById(contentId);
  }

  show() {
    if ("content" in document.createElement("template")) {
      const modalContent = document.importNode(this.modalTemplate.content, true);
      this.modalElement = modalContent.querySelector(".modal");
      this.backdropEl = modalContent.querySelector(".backdrop");
      const contentElement = document.importNode(this.contentTemplate.content, true);

      this.modalElement.appendChild(contentElement);
      document.body.insertAdjacentElement("afterbegin", this.modalElement);
      document.body.insertAdjacentElement("afterbegin", this.backdropEl);
    } else {
      // fallback code
      alert(this.fallbackText);
    }
  }

  hide() {
    if (this.modalElement) {
      this.modalElement.remove();
      this.backdropEl.remove();
      this.modalElement = null;
      this.backdropEl = null;
    }
  }
}
