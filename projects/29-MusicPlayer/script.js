const currentSongDisplay = document.querySelector(`.player__current-music`);
const currentArtistDisplay = document.querySelector(`.player__current-artist`);
const playlistNumberDisplay = document.querySelector(
  `.player__playlist-number`
);
const progress = document.querySelector(`.player__progress`);
const progressContainer = document.querySelector(`.player__progress-container`);

const btnPlay = document.querySelector(`.player__play`);
const btnNext = document.querySelector(`.player__next`);
const btnPrev = document.querySelector(`.player__prev`);
const audio = document.querySelector(`.audio`);

let currentSong = 0;

const songs = [
  {
    songName: "Miracle",
    songArtist: "Blackmill",
    songPath: "Blackmill - Miracle.mp3",
  },
  {
    songName: "Perfect Sky",
    songArtist: "Ghosts of Paraguay",
    songPath: "Ghosts Of Paraguay - Perfect Sky.mp3",
  },
  {
    songName: "Bloom",
    songArtist: "ODESZA",
    songPath: "ODESZA - Bloom.mp3",
  },
  {
    songName: "We Are Together",
    songArtist: "Planet Of Sound",
    songPath: "Planet Of Sound - We Are Together.mp3",
  },
];

function loadSong(song) {
  currentSongDisplay.innerHTML = song.songName;
  currentArtistDisplay.innerHTML = song.songArtist;
  audio.src = `music/${song.songPath}`;
  playlistNumberDisplay.innerHTML = `${currentSong + 1} of ${songs.length}`;
}

function playPause() {
  if (btnPlay.classList.contains("active")) {
    btnPlay.classList.remove("active");
    audio.pause();
  } else {
    btnPlay.classList.add("active");
    play();
  }
}

function play() {
  audio.play();
}

function nextSong() {
  if (currentSong < songs.length - 1) {
    currentSong++;
  } else {
    currentSong = 0;
  }
  loadSong(songs[currentSong]);
  btnPlay.classList.add("active");
  play();
}

function prevSong() {
  if (currentSong == 0) {
    currentSong = songs.length - 1;
  } else {
    currentSong--;
  }
  loadSong(songs[currentSong]);
  btnPlay.classList.add("active");
  play();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

window.addEventListener("load", loadSong.bind(null, songs[currentSong]));
btnPlay.addEventListener("click", playPause);
btnNext.addEventListener("click", nextSong);
btnPrev.addEventListener("click", prevSong);
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", nextSong);
progressContainer.addEventListener("click", setProgress);
