const minimizeBtn = document.getElementById('minimize-btn');
const widgetBody = document.querySelector('.widget-body');
const playBtn = document.getElementById('play-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const volumeSlider = document.getElementById('volume-slider');
const audioPlayer = document.getElementById('audio-player');

const tracks = [
  'https://github.com/gabcharlton/gabcharlton.github.io/blob/09ae167869c35a943229cb5a70937a0097a98741/Lofi%20Breno%20-%20Aesthetic%20Groove%20%5BThematic%5D.mp3',
  'https://github.com/gabcharlton/gabcharlton.github.io/blob/09ae167869c35a943229cb5a70937a0097a98741/Lofi%20Breno%20-%20Tape%20Vibes%20%5BThematic%5D.mp3',
  'https://github.com/gabcharlton/gabcharlton.github.io/blob/09ae167869c35a943229cb5a70937a0097a98741/Lofi%20Breno%20-%20Timed%20%5BThematic%5D.mp3'
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

