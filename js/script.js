document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");
  
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu"); // Muestra u oculta el menú al hacer clic en el botón
    });
  
    // Agrega un evento de clic a cada elemento del menú
    const menuItems = document.querySelectorAll("nav ul li");
    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        navMenu.classList.remove("show-menu"); // Cierra el menú al hacer clic en un elemento del menú
      });
    });
  });
  