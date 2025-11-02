import { Component, OnInit, OnDestroy, Input, HostListener } from '@angular/core';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

@Component({
  selector: 'app-youtube-player',
  template: '<div id="player"></div>',

})
export class YoutubePlayerComponent implements OnInit, OnDestroy {
  private player: any;
  screenWidth: number = window.innerWidth;
  @Input()
  id!: string;

  ngOnInit() {
    if (!window['YT']) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = this.loadPlayer.bind(this);
    } else {
      this.loadPlayer();
    }
  }

  loadPlayer() {
    const size:size = this.processSize();
    this.player = new window.YT.Player('player', {
      videoId: this.id,
      height: size.height,
      width: size.width,
      playerVars: {
        'playsinline': 1,
      },
      events: {
        'onStateChange': this.onPlayerStateChange.bind(this),
      }
    });
  }

  onPlayerReady(event: any) {
    event.target.playVideo();
  }

  onPlayerStateChange(event: any) {
    if (event.data == window.YT.PlayerState.PLAYING) {
    }
  }

  stopVideo() {
    this.player.stopVideo();
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.destroy();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.screenWidth = window.innerWidth;
    this.updateSize();
  }

  updateSize() {
    const size:size = this.processSize();
    this.player.setSize(size.width, size.height);
  }

  processSize() : size {
    let w = this.screenWidth / 2.2;
    let h = this.screenWidth / 3;

    if (this.screenWidth < 1000) {
      w = this.screenWidth - ((this.screenWidth*10)/100);
      h = w-100;
    }

    return {width:w,height:h}
  }
}

type size = {
  width:number, height:number
}
