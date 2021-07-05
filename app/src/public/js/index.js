"use strict";

import questions from "./questions.js";
import answers from "./answers.js";

const LANG = "en-US";

const selectBox = document.querySelector("select");
const speakBtn = document.querySelector(".speak-btn");
const answerBtn = document.querySelector(".answer-btn");
const pauseBtn = document.querySelector(".pause-btn");

const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

const description = document.querySelector(".description");

speakBtn.addEventListener("click", speakHandler);
answerBtn.addEventListener("click", answerHandler);
pauseBtn.addEventListener("click", pauseHandler);

pitch.onchange = function () {
  pitchValue.textContent = pitch.value;
};

rate.onchange = function () {
  rateValue.textContent = rate.value;
};

if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = setVoiceList;
}

let speaker = undefined;
let voices = [];
setVoiceList();

// TTS를 지원하는 보이스들을 전부 불러온다.
function setVoiceList() {
  voices = window.speechSynthesis.getVoices();
}

// 말하기
function speech(txt) {
  if (!window.speechSynthesis) {
    alert(
      "음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요"
    );
    return;
  }

  speaker = new SpeechSynthesisUtterance(txt);

  speaker.onend = function (event) {
    console.log("end");
  };

  speaker.onpause = function (e) {
    window.speechSynthesis.cancel();
  };

  speaker.onerror = function (event) {
    console.log("error", event);
  };

  // Samantha 보이스 설정
  let voiceFound = false;
  for (let voice of voices) {
    if (voice.name === "Samantha") {
      speaker.voice = voice;
      voiceFound = true;
      break;
    }
  }

  if (!voiceFound) {
    alert("voice not found");
    return;
  }

  speaker.lang = LANG; // 언어
  speaker.pitch = pitch.value; // 음 높이
  speaker.rate = rate.value; // 속도
  window.speechSynthesis.speak(speaker);
}

function speakHandler(e) {
  const idx = selectBox.selectedIndex;
  const selected = selectBox.options[idx];
  const choicedMsg = randomItem(questions[selected.value]);
  description.innerHTML = choicedMsg;
  speech(choicedMsg);
}

function answerHandler(e) {
  const idx = selectBox.selectedIndex;
  const selected = selectBox.options[idx];
  const choicedMsg = randomItem(answers[selected.value]);
  description.innerHTML = choicedMsg;
  speech(choicedMsg);
}

function pauseHandler(e) {
  if (speaker) {
    speaker.onpause();
  }
}

// 주어진 배열에서 요소 1개를 랜덤하게 골라 반환하는 함수
function randomItem(a) {
  return a[Math.floor(Math.random() * a.length)];
}
