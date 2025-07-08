window.onload = function () {
  drawRadar();
};

function drawRadar() {
  const canvas = document.getElementById("radarCanvas");
  const ctx = canvas.getContext("2d");
  const labels = ["RESPECT", "DISCIPLINE", "ASSIDUITÉ", "SOCIABILITÉ", "LEADERSHIP"]; // Majuscules
  const values = [8, 7, 9, 6, 8]; // Scores fictifs sur 10
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 100;
  const angleStep = (2 * Math.PI) / labels.length;

  // STYLE DES TEXTES
  ctx.font = "bold 12px Monsterrat, sans-serif"; // Police Montserrat en gras
  ctx.fillStyle = "#ffffff"; // Texte blanc
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";

  // Draw radar lines
  ctx.strokeStyle = "#ccc";
  for (let i = 1; i <= 5; i++) {
    ctx.beginPath();
    for (let j = 0; j < labels.length; j++) {
      const angle = j * angleStep;
      const x = centerX + Math.cos(angle) * (radius * i / 5);
      const y = centerY + Math.sin(angle) * (radius * i / 5);
      if (j === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  // Draw axes + labels
  for (let j = 0; j < labels.length; j++) {
    const angle = j * angleStep;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();

    // Affiche les textes
    ctx.fillText(labels[j], x + 5, y);
  }

  // Draw filled values polygon
  ctx.beginPath();
  ctx.fillStyle = "rgba(0, 102, 204, 0.3)";
  ctx.strokeStyle = "#0066cc";
  for (let j = 0; j < values.length; j++) {
    const angle = j * angleStep;
    const x = centerX + Math.cos(angle) * radius * (values[j] / 10);
    const y = centerY + Math.sin(angle) * radius * (values[j] / 10);
    if (j === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}