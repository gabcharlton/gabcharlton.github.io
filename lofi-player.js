// Select elements
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const volumeSlider = document.getElementById('volume-slider');
const minimizeBtn = document.getElementById('minimize-btn');
const lofiPlayer = document.getElementById('lofi-player');

// Tracks
const tracks = [
  'audio/lofi_breno-aesthetic_groove _thematic.mp3',
  'audio/lofi_breno-tape-vibes.mp3',
  'audio/lofi_breno-timed.mp3'
];
let currentTrack = 0;

// Play/Pause
let isPlaying = false;
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

// Shuffle
shuffleBtn.addEventListener('click', () => {
  currentTrack = Math.floor(Math.random() * tracks.length);
  audioPlayer.src = tracks[currentTrack];
  audioPlayer.play();
  playBtn.textContent = '⏸';
  isPlaying = true;
});

// Volume Control
volumeSlider.addEventListener('input', (e) => {
  audioPlayer.volume = e.target.value;
});

// Minimize Button
minimizeBtn.addEventListener('click', () => {
  lofiPlayer.classList.toggle('minimized');
});
