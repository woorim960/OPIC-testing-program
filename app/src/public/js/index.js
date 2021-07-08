"use strict";

import questions from "./questions.js";
import answers from "./answers.js";

const selectBox = document.querySelector("select");
const speakBtn = document.querySelector(".speak-btn");
const answerBtn = document.querySelector(".answer-btn");
const pauseBtn = document.querySelector(".pause-btn");

const voiceBox = document.querySelector(".voices");
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

const voices = {};
let voiceFound = false;
setTopicList();
setVoiceList();

// questions을 SelectBox에 추가
function setTopicList() {
  for (let topic in questions) {
    const option = document.createElement("option");
      option.value = topic;
      option.innerHTML = topic;
      selectBox.appendChild(option);
  }
}

// TTS를 지원하는 보이스들을 전부 불러온다.
function setVoiceList() {
  const allVoice = window.speechSynthesis.getVoices();

  // OS별 보이스를 찾아서 VoiceBox에 추가
  for (let voice of allVoice) {
    if (voice.lang.includes("en")) {
      const option = document.createElement("option");
      option.value = voice.name;
      option.setAttribute("lang", voice.lang);
      option.innerHTML = voice.name;
      voices[voice.name] = voice;
      voiceBox.appendChild(option);
      voiceFound = true;
    }
  }
}

// 말하기
function speech(txt) {
  if (!window.speechSynthesis) {
    alert(
      "음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요"
    );
    return;
  }

  const speaker = new SpeechSynthesisUtterance(txt);

  speaker.onend = function (event) {
    console.log("end");
  };

  speaker.onerror = function (event) {
    console.log("error", event);
  };

  if (!voiceFound) {
    alert("voice not found");
    return;
  }

  const idx = voiceBox.selectedIndex;
  const selectedVoice = voiceBox.options[idx].value;
  const lang = voiceBox.options[idx].getAttribute("lang");

  speaker.voice = voices[selectedVoice];
  speaker.lang = lang; // 언어
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
  window.speechSynthesis.cancel();
}

// 주어진 배열에서 요소 1개를 랜덤하게 골라 반환하는 함수
function randomItem(a) {
  return a[Math.floor(Math.random() * a.length)];
}
