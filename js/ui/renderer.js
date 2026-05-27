export async function renderMap(mapData) {

  const svg = document.getElementById("railway-map");

  svg.innerHTML = "";

  // Render track
  mapData.tracks.forEach(track => {

    const fromStation =
      mapData.stations.find(s => s.id === track.from);

    const toStation =
      mapData.stations.find(s => s.id === track.to);

    svg.innerHTML += `
      <line
        x1="${fromStation.x}"
        y1="${fromStation.y}"
        x2="${toStation.x}"
        y2="${toStation.y}"
        stroke="white"
        stroke-width="6"
      />
    `;
  });

  // Render stations
  mapData.stations.forEach(station => {

    svg.innerHTML += `
      <text
        x="${station.x - 20}"
        y="${station.y - 20}"
        fill="white"
      >
        ${station.name}
      </text>
    `;
  });

  // Render signals
  mapData.signals.forEach(signal => {

    let color = "red";

    if(signal.aspect === "green") {
      color = "lime";
    }

    svg.innerHTML += `
      <circle
        cx="${signal.x}"
        cy="${signal.y}"
        r="10"
        fill="${color}"
      />
    `;
  });

  // Render trains
  mapData.trains.forEach(train => {
  
    const track =
      mapData.tracks.find(
        t => t.id === train.track
      );
  
    const fromStation =
      mapData.stations.find(
        s => s.id === track.from
      );
  
    const toStation =
      mapData.stations.find(
        s => s.id === track.to
      );
  
    const x =
      fromStation.x +
      (toStation.x - fromStation.x)
      * train.position;
  
    const y =
      fromStation.y +
      (toStation.y - fromStation.y)
      * train.position;
  
    svg.innerHTML += `
      <rect
        x="${x - 15}"
        y="${y - 10}"
        width="30"
        height="20"
        fill="cyan"
        rx="4"
      />
  
      <text
        x="${x - 10}"
        y="${y - 15}"
        fill="white"
        font-size="12"
      >
        ${train.id}
      </text>
    `;
  });
    
}
