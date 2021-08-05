"use strict";

import randomItem from "./utils/randomItem.js";

const randomBtn = document.querySelector(".random");
const audioStopBtn = document.querySelector(".audio-stop");
const rerunBtn = document.querySelector(".rerun");
randomBtn.addEventListener("click", runRandomScript);
audioStopBtn.addEventListener("click", stopAudio);
rerunBtn.addEventListener("click", rerunAudio);

let audio;
let audios;
let fileName;

setInterval(() => {
  if (audio === undefined || audio?.ended) {
    randomBtn.style.background = "";
    randomBtn.style.color = "";
    rerunBtn.style.background = "";
    rerunBtn.style.color = "";
  }
}, 100);

async function init() {
  try {
    audios = await fetch("/api/audios").then((res) => res.json());
  } catch (e) {
    console.error(e);
  }
}

function runRandomScript(e) {
  if (audios?.length > 0) {
    stopAudio();

    fileName = randomItem(audios);
    audio = new Audio(`/audios/${fileName}`);
    audio.play();

    e.target.style.background = "rgb(226, 192, 192)";
    e.target.style.color = "rgb(104, 9, 9)";
  }
}

function stopAudio(e) {
  audio?.pause();
  audio = undefined;
}

function rerunAudio(e) {
  if (audios?.length > 0 && fileName?.length > 0) {
    stopAudio();

    audio = new Audio(`/audios/${fileName}`);
    audio.play();

    e.target.style.background = "rgb(226, 192, 192)";
    e.target.style.color = "rgb(104, 9, 9)";
  }
}

init();
