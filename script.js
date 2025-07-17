
async function loadDrugs() {
  const res = await fetch('drug_data.json');
  const drugs = await res.json();
  displayDrugs(drugs);
}

function displayDrugs(drugs) {
  const container = document.getElementById("drug-list");
  container.innerHTML = "";
  drugs.forEach(drug => {
    const div = document.createElement("div");
    div.className = "drug-card";
    div.innerHTML = `
      <h3>${drug.name}</h3>
      <p><strong>Uses:</strong> ${drug.uses}</p>
      <p><strong>Side Effects:</strong> ${drug.side_effects}</p>
      <p><strong>Dosage:</strong> ${drug.dosage}</p>
    `;
    container.appendChild(div);
  });
}

loadDrugs();
