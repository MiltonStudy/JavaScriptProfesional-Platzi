function AutoPlay() {}

AutoPlay.prototype.run = function (mediaPlayer) {
    mediaPlayer.sound();
    mediaPlayer.play();
};

export default AutoPlay;