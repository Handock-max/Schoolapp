const roleSelect = document.getElementById('role');
const parentFields = document.getElementById('parentFields');
const enseignantFields = document.getElementById('enseignantFields');
const roleError = document.getElementById('roleError');
const parentError = document.getElementById('parentError');
const enseignantError = document.getElementById('enseignantError');
const form = document.getElementById('loginForm');

// Fonction pour afficher/masquer champs avec animation (transition max-height + opacity)
function toggleFields() {
  const role = roleSelect.value;
  roleError.classList.add('hidden');

  if (role === 'parent') {
    parentFields.style.maxHeight = parentFields.scrollHeight + "px";
    parentFields.style.opacity = "1";

    enseignantFields.style.maxHeight = "0";
    enseignantFields.style.opacity = "0";
    enseignantError.classList.add('hidden');
  } else if (role === 'enseignant') {
    enseignantFields.style.maxHeight = enseignantFields.scrollHeight + "px";
    enseignantFields.style.opacity = "1";

    parentFields.style.maxHeight = "0";
    parentFields.style.opacity = "0";
    parentError.classList.add('hidden');
  } else {
    parentFields.style.maxHeight = "0";
    parentFields.style.opacity = "0";

    enseignantFields.style.maxHeight = "0";
    enseignantFields.style.opacity = "0";
    parentError.classList.add('hidden');
    enseignantError.classList.add('hidden');
  }
}

roleSelect.addEventListener('change', toggleFields);

// Validation simple au submit
form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;

  roleError.classList.add('hidden');
  parentError.classList.add('hidden');
  enseignantError.classList.add('hidden');

  const role = roleSelect.value;
  if (!role) {
    roleError.classList.remove('hidden');
    valid = false;
  }

  if (role === 'parent') {
    const matriculeEleve = document.getElementById('matriculeEleve').value.trim();
    const codeSecret = document.getElementById('codeSecret').value.trim();

    if (!matriculeEleve || !codeSecret) {
      parentError.classList.remove('hidden');
      valid = false;
    }
  }

  if (role === 'enseignant') {
    const matriculeEnseignant = document.getElementById('matriculeEnseignant').value.trim();
    const motDePasse = document.getElementById('motDePasse').value.trim();

    if (!matriculeEnseignant || !motDePasse) {
      enseignantError.classList.remove('hidden');
      valid = false;
    }
  }

  if (valid) {
    alert("Connexion réussie ! (Simulation)");
    form.reset();
    toggleFields();
  }
});

// Initialise l'affichage au chargement
toggleFields();
