const record = document.getElementById("record");
const stop = document.getElementById("stop");
const soundClips = document.getElementById("sound-clips");
const chkHearMic = document.getElementById("chk-hear-mic");
const selectBox = document.querySelector("select");

const audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // 오디오 컨텍스트 정의

const analyser = audioCtx.createAnalyser();
//        const distortion = audioCtx.createWaveShaper()
//        const gainNode = audioCtx.createGain()
//        const biquadFilter = audioCtx.createBiquadFilter()

function makeSound(stream) {
  const source = audioCtx.createMediaStreamSource(stream);

  source.connect(analyser);
  //            analyser.connect(distortion)
  //            distortion.connect(biquadFilter)
  //            biquadFilter.connect(gainNode)
  //            gainNode.connect(audioCtx.destination) // connecting the different audio graph nodes together
  analyser.connect(audioCtx.destination);
}

let timer;
function startTimer() {
  let time = 0;
  let hour = 0;
  let min = 0;
  let sec = 0;

  record.innerHTML = "00:00:00";

  timer = setInterval(() => {
    time++;

    min = Math.floor(time / 60);
    hour = Math.floor(min / 60);
    sec = time % 60;
    min = min % 60;

    let th = hour;
    let tm = min;
    let ts = sec;
    if (th < 10) {
      th = "0" + hour;
    }
    if (tm < 10) {
      tm = "0" + min;
    }
    if (ts < 10) {
      ts = "0" + sec;
    }

    record.innerHTML = th + ":" + tm + ":" + ts;
  }, 1000);
}

if (navigator.mediaDevices) {
  console.log("getUserMedia supported.");

  const constraints = {
    audio: true,
  };
  let chunks = [];

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);

      chkHearMic.onchange = (e) => {
        if (e.target.checked == true) {
          audioCtx.resume();
          makeSound(stream);
        } else {
          audioCtx.suspend();
        }
      };

      record.onclick = () => {
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        record.style.background = "rgb(226, 192, 192)";
        record.style.color = "rgb(104, 9, 9)";

        startTimer();
      };

      stop.onclick = () => {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        record.style.background = "";
        record.style.color = "";
        clearInterval(timer);
      };

      mediaRecorder.onstop = (e) => {
        console.log("data available after MediaRecorder.stop() called.");
        const idx = selectBox.selectedIndex;
        const selected = selectBox.options[idx];

        const clipName = prompt(
          "오디오 파일 제목을 입력하세요.",
          selected.value
        );

        const clipContainer = document.createElement("article");
        const clipLabel = document.createElement("p");
        const audio = document.createElement("audio");
        const deleteButton = document.createElement("button");
        const div = document.createElement("div");

        clipContainer.classList.add("clip");
        audio.setAttribute("controls", "");
        deleteButton.innerHTML = "삭제";
        deleteButton.classList.add("btn");
        deleteButton.classList.add("delete-record");
        clipLabel.innerHTML = `${clipName} ${record.innerHTML}`;
        clipLabel.classList.add("small-text");
        div.classList.add("recorded-form");

        record.innerHTML = "녹음";

        clipContainer.appendChild(clipLabel);
        div.appendChild(audio);
        div.appendChild(deleteButton);
        clipContainer.appendChild(div);
        soundClips.appendChild(clipContainer);

        audio.controls = true;
        const blob = new Blob(chunks, {
          type: "audio/ogg codecs=opus",
        });
        chunks = [];
        const audioURL = URL.createObjectURL(blob);
        audio.src = audioURL;
        console.log("recorder stopped");

        deleteButton.onclick = (e) => {
          evtTgt = e.target;
          evtTgt.parentNode.parentNode.parentNode.removeChild(
            evtTgt.parentNode.parentNode
          );
        };
      };

      mediaRecorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };
    })
    .catch((err) => {
      console.log("The following error occurred: " + err);
    });
}
