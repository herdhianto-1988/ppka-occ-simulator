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

    train.x += train.speed;

  });
}

loadData();
