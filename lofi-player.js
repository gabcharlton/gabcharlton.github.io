const minimizeBtn = document.getElementById('minimize-btn');
const widgetBody = document.querySelector('.widget-body');
const playBtn = document.getElementById('play-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const volumeSlider = document.getElementById('volume-slider');
const audioPlayer = document.getElementById('audio-player');

const tracks = [
  'lofi_breno-aesthetic_groove _thematic.mp3',
  'lofi_breno-tape_vibes_thematic.mp3',
  'lofi_breno-timed_thematic.mp3'
];
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const shuffleBtn = document.getElementById('shuffle-btn');

let currentTrack = 0;
let isPlaying = false;

// Load the first track
audioPlayer.src = tracks[currentTrack];

// Play/Pause Toggle
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

// Shuffle Tracks
shuffleBtn.addEventListener('click', () => {
  currentTrack = Math.floor(Math.random() * tracks.length);
  audioPlayer.src = tracks[currentTrack];
  audioPlayer.play();
  playBtn.textContent = '⏸';
  isPlaying = true;
});
