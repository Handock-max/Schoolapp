document.addEventListener("DOMContentLoaded", () => {
  const roleSelect = document.getElementById("role");
  const loginForm = document.getElementById("login-form");
  const parentFields = document.getElementById("parent-fields");
  const enseignantFields = document.getElementById("enseignant-fields");
  const selectRole = document.getElementById("select-role");
  const loginContainer = document.getElementById("login-container");

  roleSelect.addEventListener("change", () => {
    const selectedRole = roleSelect.value;

    // Appliquer l'animation
    selectRole.classList.add("slide-up");

    // Afficher le formulaire
    loginForm.classList.remove("hidden");
    setTimeout(() => {
      loginForm.classList.add("opacity-100");
    }, 100);

    // Afficher champs conditionnels
    if (selectedRole === "parent") {
      parentFields.classList.remove("hidden");
      enseignantFields.classList.add("hidden");
    } else if (selectedRole === "enseignant") {
      enseignantFields.classList.remove("hidden");
      parentFields.classList.add("hidden");
    } else {
      parentFields.classList.add("hidden");
      enseignantFields.classList.add("hidden");
    }
  });
});
