// navegação por click
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

// abrir e fechar menus do faq
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeList = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeList);
    accordionList[0].nextElementSibling.classList.add(activeList);

    function activeAccordion() {
      this.classList.toggle(activeList); // adiciona a classe ativo na tag dt que esta sendo selecionada acima
      this.nextElementSibling.classList.toggle(activeList); // adiciona a classe ativo ao próximo elemento depois do dt (tag dd)
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

// scroll suave ao clicar nos links internos
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSelection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // }); // função que faz um scroll do site ( eixo x < > e eixo y \/ /\ )
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSelection);
  });
}

// animação ao descer com o scroll do mouse
function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.3;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade; // essa função retorna os dados de largura/altura da página
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initTabNav();
initAccordion();
initScrollSuave();
initAnimacaoScroll();
