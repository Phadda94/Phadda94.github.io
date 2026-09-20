const keyMap = {
  'a': { key: 'c-key', audio: new Audio('audio/C.wav') },
  's': { key: 'd-key', audio: new Audio('audio/D.wav') },
  'd': { key: 'e-key', audio: new Audio('audio/E.wav') },
  'f': { key: 'f-key', audio: new Audio('audio/F.wav') },
  'g': { key: 'g-key', audio: new Audio('audio/G.wav') },
  'h': { key: 'a-key', audio: new Audio('audio/A.wav') },
  'j': { key: 'b-key', audio: new Audio('audio/B.wav') },
  'k': { key: 'high-c-key', audio: new Audio('audio/C8.wav') },
  'w': { key: 'c-sharp-key', audio: new Audio('audio/C_.wav') },
  'e': { key: 'd-sharp-key', audio: new Audio('audio/D_.wav') },
  't': { key: 'f-sharp-key', audio: new Audio('audio/F_.wav') },
  'y': { key: 'g-sharp-key', audio: new Audio('audio/G_.wav') },
  'u': { key: 'a-sharp-key', audio: new Audio('audio/A_.wav') }
};

function keyPlay(event) {
  if (event.repeat) return;

  const keyInfo = keyMap[event.key];
  if (!keyInfo) return;

  const keyEl = document.getElementById(keyInfo.key);
  keyEl.style.backgroundColor = 'aquamarine';
  keyEl.style.boxShadow = '1px 2px';

  keyInfo.audio.currentTime = 0;
  keyInfo.audio.play();
}

function keyStop(event) {
  const keyInfo = keyMap[event.key];
  if (!keyInfo) return;

  const keyEl = document.getElementById(keyInfo.key);
  keyEl.style.backgroundColor = '';
  keyEl.style.boxShadow = '';
}

document.addEventListener('keydown', keyPlay);
document.addEventListener('keyup', keyStop);