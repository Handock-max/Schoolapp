const form = document.getElementById('loginForm');
const selectContainer = document.getElementById('selectContainer');
const fieldsContainer = document.getElementById('fieldsContainer');
const roleSelect = document.getElementById('role');
const btnNext = document.getElementById('btnNext');

const roleError = document.getElementById('roleError');
const parentFields = document.getElementById('parentFields');
const enseignantFields = document.getElementById('enseignantFields');
const parentError = document.getElementById('parentError');
const enseignantError = document.getElementById('enseignantError');

btnNext.addEventListener('click', () => {
  const role = roleSelect.value;

  // Reset erreurs
  roleError.classList.add('hidden');

  if (!role) {
    roleError.classList.remove('hidden');
    return;
  }

  // Transition : déplacer select vers le haut, afficher champs liés
  selectContainer.classList.add('move-up');
  form.classList.add('expanded');

  // Affiche container champs
  fieldsContainer.classList.remove('hidden');

  // Montre le bon groupe de champs
  if (role === 'parent') {
    parentFields.classList.remove('hidden');
    enseignantFields.classList.add('hidden');
    parentError.classList.add('hidden');
  } else if (role === 'enseignant') {
    enseignantFields.classList.remove('hidden');
    parentFields.classList.add('hidden');
    enseignantError.classList.add('hidden');
  }
});

// Validation formulaire final au submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Cacher erreurs
  parentError.classList.add('hidden');
  enseignantError.classList.add('hidden');

  const role = roleSelect.value;
  let valid = true;

  if (role === 'parent') {
    const matriculeEleve = document.getElementById('matriculeEleve').value.trim();
    const codeSecret = document.getElementById('codeSecret').value.trim();

    if (!matriculeEleve || !codeSecret) {
      parentError.classList.remove('hidden');
      valid = false;
    }
  } else if (role === 'enseignant') {
    const matriculeEnseignant = document.getElementById('matriculeEnseignant').value.trim();
    const motDePasse = document.getElementById('motDePasse').value.trim();

    if (!matriculeEnseignant || !motDePasse) {
      enseignantError.classList.remove('hidden');
      valid = false;
    }
  } else {
    valid = false;
  }

  if (valid) {
    alert('Connexion réussie ! (Simulation)');
    form.reset();

    // Reset l'UI à l’état initial
    selectContainer.classList.remove('move-up');
    form.classList.remove('expanded');
    fieldsContainer.classList.add('hidden');
    parentFields.classList.add('hidden');
    enseignantFields.classList.add('hidden');
  }
});
