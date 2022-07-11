import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './AutoPlay.js';

const video = document.querySelector("video");
const buttonPlay = document.querySelector("#autoPlay");
const buttonSound = document.querySelector("#onSound");

const player = new MediaPlayer({ element: video, plugins: [new AutoPlay()] });

buttonPlay.onclick = () => player.play();
buttonSound.onclick = () => player.sound();