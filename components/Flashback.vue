<template>
  <section class="flashback">
    <div class="container">
      <div class="flashback-wrap">
        <TextHead :neonParams="titleParams" />
        <div class="flashback-content">
          <div class="flashback-top line">
            <img src="@/assets/img/sd/lines/flashback-top.png" alt="" />
          </div>
          <div class="flashback-left">
            <div class="flashback-video">
              <div
                class="play"
                :class="vimeoObjParams.play ? 'hide' : ''"
                @click="playVideo"
              ></div>
              <div
                class="pause"
                :class="vimeoObjParams.play ? 'show' : 'hide'"
                @click="pauseVideo"
              ></div>
              <div :id="vimeoObjParams.id"></div>
            </div>
          </div>
          <div class="flashback-right">
            <div class="flashback-steps">
              <span>Insane</span>
              <span>Unique</span>
              <span>Connecting</span>
              <span>Wild</span>
              <span>Fun</span>
            </div>
          </div>
          <div class="flashback-bottom line">
            <img src="@/assets/img/sd/lines/flashback-bottom.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BigPicture from 'bigpicture'
import Player from '@vimeo/player'
export default {
  data() {
    return {
      titleParams: {
        text: 'What Are the <br> Experiences Like?<span>What Are the <br> Experiences Like?</span><p>What Are the <br> Experiences Like?</p>',
        marginBottom: '50px',
      },
      player: '',
      vimeoObjParams: {
        id: 'flashbackVideo',
        option: {
          id: 673235222,
          autoplay: true,
          responsive: true,
          muted: true,
          controls: false,
          loop: true,
        },
        play: false,
      },
      lineTopLeft: {
        class: 'cls-1',
        revert: true,
        width: '4px',
        height: '40',
        radius: '78',
      },
      lineTopRight: {
        class: 'cls-1',
        revert: false,
        width: '4px',
        height: '40',
        radius: '78',
      },
      lineBottomLeft: {
        class: 'cls-2',
        revert: true,
        width: '4px',
        height: '40',
        radius: '78',
      },
      lineBottomRight: {
        class: 'cls-2',
        revert: false,
        width: '4px',
        height: '40',
        radius: '78',
      },
    }
  },
  mounted() {
    this.videoInit()
  },
  methods: {
    videoInit() {
      this.player = new Player(
        this.vimeoObjParams.id,
        this.vimeoObjParams.option
      ).on('ended', function () {})
    },
    playVideo() {
      this.player = new Player(this.$el.querySelector('iframe'))
      this.player.play()
      this.player.setMuted(false)
      this.vimeoObjParams.play = true
      console.log('play')
    },
    pauseVideo() {
      this.player.pause()
      this.player.setMuted(true)
      this.vimeoObjParams.play = false
    },
  },
}
</script>

<style scoped lang="scss">
svg {
  display: none;
  @media (min-width: 1024px) {
    display: block;
    width: 820px !important;
  }
  @media (min-width: 1366px) {
    width: 967px !important;
  }
  @media (min-width: 1400px) {
    width: 1033px !important;
  }
}
.flashback {
  &-content {
    display: flex;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
    position: relative;
    @media (min-width: 1024px) {
      align-items: stretch;
      flex-direction: row;
    }
    p {
      margin-bottom: 90px;
    }
  }
  .line {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 0;
    img {
      display: none;
      @media (min-width: 1024px) {
        display: block;
        width: 100%;
      }
    }
    overflow: hidden;
    &:before,
    &:after {
      position: absolute;
      top: 0;
      content: '';
      height: 100%;
      width: 56%;
      background: #15081b;
      left: 0;
      animation: move 15s infinite ease-in-out;
      z-index: 0;
    }
    &:before {
      transform: translateX(-80%);
      width: 75%;
    }
    &:after {
      transform: translateX(145%);
    }
    &-delay {
      &:before,
      &:after {
        animation-delay: 7s;
      }
    }
  }
  &-top {
    top: 0;
  }
  &-bottom {
    bottom: 0;
  }
  @keyframes move {
    50% {
      left: 50%;
    }
  }
  &-title {
    font-family: Fredoka One;
    font-size: 40px;
    margin-bottom: 25px;
    line-height: 100%;
    text-transform: uppercase;
    color: #1dcd68;
    animation: flickerTitle 1.5s infinite alternate;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1dcd68,
      0 0 82px #1dcd68, 0 0 92px #1dcd68, 0 0 102px #1dcd68, 0 0 151px #1dcd68;
    br {
      display: none;
      @media (min-width: 576px) {
        display: block;
      }
    }
    @media (min-width: 576px) {
      font-size: 70px;
    }
    @media (min-width: 768px) {
      margin-bottom: 50px;
    }
  }
  &-left {
    width: 100%;
    max-width: 1000px;
    position: relative;
    padding: 0;
    z-index: 1;
    @media (min-width: 768px) {
      padding: 50px 50px 50px 20px;
    }
    @media (min-width: 1024px) {
      width: 80%;
    }
    svg {
      transform: scale(-1, 1);
    }
    .cls-2 {
      transform: rotate(180deg);
    }
  }
  &-right {
    width: 100%;
    position: relative;
    padding: 50px 20px 50px 50px;
    display: none;
    z-index: 1;
    @media (min-width: 768px) {
      display: block;
    }
    @media (min-width: 1024px) {
      width: 20%;
    }
  }
  &-video {
    position: relative;
    overflow: hidden;
    width: 100%;
    border-radius: 40px;
    z-index: 2;
    @media (min-width: 576px) {
      border-radius: 70px;
    }
    .play,
    .pause {
      cursor: pointer;
      position: absolute;
      width: 80px;
      height: 80px;
      background-size: contain;
      bottom: 40px;
      right: 40px;
      z-index: 3;
      animation: 10s linear 0s normal none infinite running scalePlay;
      transition: all 0.5s ease;
      @media (min-width: 576px) {
        width: 100px;
        height: 100px;
      }
    }
    .play {
      background: url('@/assets/img/sd/play.png') center no-repeat;
      background-size: contain;
      &:hover {
        opacity: 0.7;
      }
    }
    .pause {
      background: url('@/assets/img/sd/pause.svg') center no-repeat;
      background-size: contain;
      opacity: 0;
    }
    &:hover {
      .pause {
        opacity: 0.3 !important;
        @media (min-width: 768px) {
          opacity: 1 !important;
        }
      }
    }
  }
  .hide {
    display: none;
    transition: all 0.5s ease;
  }
  .show {
    display: block;
    transition: all 0.5s ease;
  }
  &-steps {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    @media (min-width: 768px) {
      flex-direction: row;
      margin-top: 50px;
    }
    @media (min-width: 1024px) {
      justify-content: center;
      flex-direction: column;
      margin-top: 50px;
    }
    span {
      font-family: Public Sans;
      font-weight: 900;
      font-size: 24px;
      line-height: 35px;
      margin-bottom: 20px;
      text-transform: uppercase;
      color: #ffffff;
      @media (min-width: 1024px) {
        font-size: 30px;
        margin-bottom: 25px;
      }
    }
  }
}
</style>
