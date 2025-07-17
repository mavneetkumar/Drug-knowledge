// Load drug data and handle search
let drugs = [];

fetch('drug-data.json')
  .then(res => res.json())
  .then(data => {
    drugs = data;
    displayDrugs(drugs);
  });

function displayDrugs(list) {
  const container = document.getElementById('drugList');
  container.innerHTML = '';
  list.forEach(drug => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h2>${drug.name}</h2>
      <p><strong>Uses:</strong> ${drug.uses}</p>
      <p><strong>Side Effects:</strong> ${drug.side_effects.join(', ')}</p>
      <p><strong>Dosage:</strong> ${drug.dosage}</p>
    `;
    container.appendChild(card);
  });
}

document.getElementById('searchInput').addEventListener('input', e => {
  const val = e.target.value.toLowerCase();
  const filtered = drugs.filter(drug =>
    drug.name.toLowerCase().includes(val)
  );
  displayDrugs(filtered);
});