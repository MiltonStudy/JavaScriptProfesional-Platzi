function MediaPlayer(config) {
    this.mediaVideo = config.element;
    this.plugins = config.plugins || [];

    this.initPlugins();
}

MediaPlayer.prototype.initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
};

MediaPlayer.prototype.play = function () {
    this.mediaVideo.paused ? this.mediaVideo.play() : this.mediaVideo.pause();
};

MediaPlayer.prototype.sound = function () {
    this.mediaVideo.muted ? this.mediaVideo.muted = false : this.mediaVideo.muted = true;
};

export default MediaPlayer;