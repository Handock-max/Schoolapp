const roleSelect = document.getElementById("role");
const parentFields = document.getElementById("parentFields");
const teacherFields = document.getElementById("teacherFields");
const formContainer = document.getElementById("form-container");
const title = document.getElementById("title");
const labelRole = document.getElementById("label-role");
const loadingScreen = document.getElementById("loadingScreen");

function resetErrors() {
  document.querySelectorAll('.input-field').forEach(input => {
    input.classList.remove('input-error');
  });
  document.querySelectorAll('.error').forEach(span => {
    span.classList.add('hidden');
  });
}

roleSelect.addEventListener("change", () => {
  const selectedRole = roleSelect.value;
  parentFields.classList.add("hidden");
  teacherFields.classList.add("hidden");
  resetErrors();

  if (selectedRole !== "choisir") {
    formContainer.classList.add("moved");
    title.classList.add("moved-right");
    labelRole.classList.add("hidden");
  } else {
    formContainer.classList.remove("moved");
    title.classList.remove("moved-right");
    labelRole.classList.remove("hidden");
  }

  if (selectedRole === "parent") {
    parentFields.classList.remove("hidden");
  } else if (selectedRole === "teacher") {
    teacherFields.classList.remove("hidden");
  }
});

document.getElementById("submitBtn").addEventListener("click", function (e) {
  e.preventDefault();
  resetErrors();
  const role = roleSelect.value;
  let valid = true;

  if (role === "choisir") {
    alert("Veuillez d'abord choisir un rôle.");
    return;
  }

  if (role === "parent") {
    const matricule = document.getElementById("parentMatricule");
    const code = document.getElementById("parentCode");

    if (matricule.value.trim() === "") {
      matricule.classList.add("input-error");
      matricule.nextElementSibling.classList.remove("hidden");
      valid = false;
    }

    if (code.value.trim() === "") {
      code.classList.add("input-error");
      code.nextElementSibling.classList.remove("hidden");
      valid = false;
    }
  }

  if (role === "teacher") {
    const matricule = document.getElementById("teacherMatricule");
    const password = document.getElementById("teacherPassword");

    if (matricule.value.trim() === "") {
      matricule.classList.add("input-error");
      matricule.nextElementSibling.classList.remove("hidden");
      valid = false;
    }

    if (password.value.trim() === "") {
      password.classList.add("input-error");
      password.nextElementSibling.classList.remove("hidden");
      valid = false;
    }
  }

if (valid) {
  formContainer.classList.add("hidden");
  loadingScreen.classList.remove("hidden");

  setTimeout(() => {
    loadingScreen.classList.add("hidden");

    if (role === "parent") {
      // Redirection vers board_parent.html si rôle parent
      window.location.href = "board_parent.html";
    } else if (role === "teacher") {
      // Message maintenance pour enseignant
      alert("La connexion pour les enseignants est encore en maintenance. Merci de votre patience.");
      formContainer.classList.remove("hidden"); // Re-affiche le formulaire
    }
  }, 2000);
}

});
