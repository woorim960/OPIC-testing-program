"use strict";

const lang = "en-US";

if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = setVoiceList;
}

document.addEventListener("click", function (e) {
  const t = e.target;
  const input = t.previousElementSibling;
  speech(input.value);
});

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

  const speaker = new SpeechSynthesisUtterance(txt);

  speaker.onend = function (event) {
    console.log("end");
  };

  speaker.onerror = function (event) {
    console.log("error", event);
  };

  // 보이스 설정
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

  speaker.lang = lang; // 언어
  speaker.pitch = 1.2; // 음 높이
  speaker.rate = 1.05; // 속도
  window.speechSynthesis.speak(speaker);
}
