document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("modoOscuroToggle");
  const inputBusqueda = document.querySelector(".input-busqueda");

  toggleButton.addEventListener("click", function () {
    // Alterna la clase "dark-mode" en el body
    document.body.classList.toggle("dark-mode");

    // Alterna la clase "dark-mode" en el input
    inputBusqueda.classList.toggle("dark-mode");

    // Cambia el icono del enlace según el modo actual
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
      toggleButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
  });
});

// Obtener los elementos del DOM
const imgElement = document.getElementById("idea-img");
const toggleBtn = document.getElementById("toggle-btn");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");

// Controlar el estado de la imagen actual
let isFirstImage = true;

// Función genérica para alternar imagen, botón y dots activos
function toggleImage(
  imgElement,
  toggleBtn,
  dot1,
  dot2,
  firstImageSrc,
  secondImageSrc
) {
  let isFirstImage = true; // Estado inicial

  toggleBtn.addEventListener("click", function () {
    if (isFirstImage) {
      // Cambiar a la segunda imagen
      imgElement.src = secondImageSrc;
      // Cambiar el botón a chevron-left
      toggleBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
      // Cambiar el dot activo
      dot1.classList.remove("active");
      dot2.classList.add("active");
    } else {
      // Cambiar de vuelta a la primera imagen
      imgElement.src = firstImageSrc;
      // Cambiar el botón a chevron-right
      toggleBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
      // Cambiar el dot activo
      dot2.classList.remove("active");
      dot1.classList.add("active");
    }

    // Alternar el estado
    isFirstImage = !isFirstImage;
  });
}

// Al cargar el documento
document.addEventListener("DOMContentLoaded", function () {
  // Artículo 1
  const img1 = document.getElementById("idea1-img");
  const toggleBtn1 = document.getElementById("toggle-btn1");
  const dot1_1 = document.getElementById("dot1-1");
  const dot1_2 = document.getElementById("dot1-2");
  toggleImage(
    img1,
    toggleBtn1,
    dot1_1,
    dot1_2,
    "./assets/img/img1.gif",
    "./assets/img/img1-1.gif"
  );

  // Artículo 6
  const img6 = document.getElementById("idea6-img");
  const toggleBtn6 = document.getElementById("toggle-btn6");
  const dot6_1 = document.getElementById("dot6-1");
  const dot6_2 = document.getElementById("dot6-2");
  toggleImage(
    img6,
    toggleBtn6,
    dot6_1,
    dot6_2,
    "./assets/img/img6.jpeg",
    "./assets/img/img6-1.gif"
  );
});

// Ocultar ideas
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los botones de eliminación
  const removeButtons = document.querySelectorAll(".remove-btn");

  // Itera sobre todos los botones
  removeButtons.forEach((btn) => {
    // Para cada botón, agrega un listener
    btn.addEventListener("click", function () {
      // Encuentra el artículo padre del botón y lo elimina
      const article = btn.closest("article");
      article.remove();
      alert("Se mostrarán menos ideas similares");
    });
  });
});
