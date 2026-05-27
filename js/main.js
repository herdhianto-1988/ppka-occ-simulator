import { renderMap } from "./ui/renderer.js";

let mapData;

async function loadData() {

  const response =
    await fetch("./data/map.json");

  mapData = await response.json();

  gameLoop();
}

function gameLoop() {

  updateTrains();

  renderMap(mapData);

  requestAnimationFrame(gameLoop);
}

function updateTrains() {

  mapData.trains.forEach(train => {

    train.position += 0.001 * train.speed;

    if(train.position > 1) {
      train.position = 1;
    }

  });
}

loadData();
