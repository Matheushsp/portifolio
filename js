// Script para o menu responsivo
const menuIcon = document.querySelector(".navigation-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Script para rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // Fecha o menu quando clicado em um link (em modo responsivo)
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    }
  });
});

// Script para animações ao rolar a página
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight * 0.8) {
      section.classList.add("show");
    }
  });
});
