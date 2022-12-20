// abrir e fechar menus do faq
export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    // adiciona a classe ativo na tag dt que esta sendo selecionada acima
    item.nextElementSibling.classList.toggle(this.activeClass); // adiciona a classe ativo ao próximo elemento depois do dt (tag dd)
  }

  // adiciona os eventos ao accoordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // iniciar funcao
  init() {
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
