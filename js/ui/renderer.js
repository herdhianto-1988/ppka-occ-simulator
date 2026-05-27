export function renderMap() {

  const svg = document.getElementById("railway-map");

  svg.innerHTML = `
  
    <line 
      x1="100" 
      y1="200" 
      x2="700" 
      y2="200"
      stroke="white"
      stroke-width="6"
    />

    <circle cx="250" cy="200" r="10" fill="red" />
    <circle cx="550" cy="200" r="10" fill="red" />

    <text x="90" y="180" fill="white">
      STA A
    </text>

    <text x="690" y="180" fill="white">
      STA B
    </text>

  `;
}
