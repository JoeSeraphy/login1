const formContainer = document.querySelector(".form-container");
const register = document.querySelector("#register");
const login = document.querySelector("#login");

register.addEventListener("click", () => {
  formContainer.classList.add("active");
});
login.addEventListener("click", () => {
  formContainer.classList.remove("active");
});

console.log(register);
