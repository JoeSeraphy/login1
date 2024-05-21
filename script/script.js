const formContainer = document.querySelector(".form-container");
const register = document.querySelector(".register");
const login = document.querySelector("#login");

register.addEventListener("click", () => {
  formContainer.classList.add("active");
});
login.addEventListener("click", () => {
  formContainer.classList.remove("active");
});

function menuOnClick() {
  document.querySelector("#menu-bar").classList.toggle("change");
  document.querySelector("#nav").classList.toggle("change");
  document.querySelector("#menu-bg").classList.toggle("change-bg");
}
