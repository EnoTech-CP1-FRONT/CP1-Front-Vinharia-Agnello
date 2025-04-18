const btn_navbar = document.querySelector(".btn_navbar")
const nav = document.querySelector(".nav")

btn_navbar.addEventListener("click", () => 
  nav.classList.toggle("active")
)