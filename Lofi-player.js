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

const nowPlaying = document.getElementById('now-playing');
function updateTrackName() {
  const trackName = tracks[currentTrack].split('/').pop().replace('.mp3', '');
  nowPlaying.textContent = `Now Playing: ${trackName}`;
}

audioPlayer.addEventListener('play', updateTrackName);
audioPlayer.addEventListener('ended', () => {
  currentTrack = (currentTrack + 1) % tracks.length; // Auto next track
  audioPlayer.src = tracks[currentTrack];
  audioPlayer.play();
  updateTrackName();
});

audioPlayer.volume = 0.5; // 50% volume
volumeSlider.value = 0.5;

