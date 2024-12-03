const minimizeBtn = document.getElementById('minimize-btn');
const widgetBody = document.querySelector('.widget-body');
const playBtn = document.getElementById('play-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const volumeSlider = document.getElementById('volume-slider');
const audioPlayer = document.getElementById('audio-player');

const tracks = [
  'track1.mp3',
  'track2.mp3',
  'track3.mp3'
];
let currentTrack = 0;
let isPlaying = false;

minimizeBtn.addEventListener('click', () => {
  widgetBody.classList.toggle('hidden');
});

playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audioPlayer.pause();
    playBtn.textContent = '▶';
  } else {
    audioPlayer.play();
    playBtn.textContent = '⏸';
  }
  isPlaying = !isPlaying;
});

shuffleBtn.addEventListener('click', () => {
  currentTrack = Math.floor(Math.random() * tracks.length);
  audioPlayer.src = tracks[currentTrack];
  audioPlayer.play();
  isPlaying = true;
  playBtn.textContent = '⏸';
});

volumeSlider.addEventListener('input', (e) => {
  audioPlayer.volume = e.target.value;
});
