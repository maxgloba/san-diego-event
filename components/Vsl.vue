<template>
  <section class="vsl">
    <div class="container">
      <div class="vsl-inner">
        <div class="vsl-top line">
          <img src="@/assets/img/sd/lines/vsl-top.png" alt="" />
        </div>
        <div class="vsl-left">
          <picture>
            <source
              srcset="@/assets/img/sd/vsl-flower.webp"
              type="image/webp"
            />
            <source srcset="@/assets/img/sd/vsl-flower.png" type="image/png" />
            <img class="flower" src="@/assets/img/sd/vsl-flower.png" />
          </picture>
          <div class="vsl-video">
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
        <div class="vsl-right">
          <div class="vsl-wrap">
            <TextHead :neonParams="titleParams" />
            <p class="vsl-subtitle">Its not a mastermind or conference</p>
            <p class="vsl-text">
              Its where a group of people who are intensely passionate (Obsessed
              ) get together somewhere cool to hangout and learn with the
              biggest ecommerce brands. We find a dope unusual setting, take
              care of the food, drinks and entertainment and then fill it with
              the best and brightest. We Learn. We Chill. We Party While We
              Figure Out How To Make More Sales (& Money)
            </p>
          </div>
        </div>
        <div class="vsl-bottom line">
          <img src="@/assets/img/sd/lines/vsl-bottom.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Player from '@vimeo/player'
export default {
  data() {
    return {
      titleParams: {
        text: 'WHAT IS <br>A GEEK OUT?<span>WHAT IS <br>A GEEK OUT?</span><p>WHAT IS <br>A GEEK OUT?</p>',
        marginBottom: '25px',
      },
      player: null,
      vimeoObjParams: {
        id: 'vslVideo',
        option: {
          id: 677240052,
          autoplay: false,
          responsive: true,
          muted: false,
          controls: false,
          loop: true,
        },
        play: false,
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
      this.vimeoObjParams.play = true
    },
    pauseVideo() {
      this.player.pause()
      this.vimeoObjParams.play = false
    },
  },
}
</script>
<style scoped lang="scss">
.vsl {
  position: relative;
  overflow: hidden;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
  &:before,
  &:after {
    position: absolute;
    top: 0;
    content: '';
    height: 100%;
    width: 50%;
    background: #15081b;
    left: 0;
    animation: move 15s infinite ease-in-out;
  }
  &:before {
    transform: translateX(-100%);
  }
  &:after {
    transform: translateX(100%);
  }
  &-delay {
    &:before,
    &:after {
      animation-delay: 7s;
    }
  }
  position: relative;
  .container {
    position: relative;
  }
  .line {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 0;
    @media (min-width: 1330px) {
      left: auto;
      right: 45px;
    }
    img {
      display: none;
      @media (min-width: 1200px) {
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
    }
    &:before {
      transform: translateX(-94%);
    }
    &:after {
      transform: translateX(94%);
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
      left: 43%;
    }
  }
  svg {
    display: none;
    @media (min-width: 768px) {
      display: block;
      width: 476px;
    }
    @media (min-width: 1365px) {
      display: block;
      width: 499px;
    }
  }
  &-inner {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    @media (min-width: 576px) {
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1200px) {
      flex-direction: row;
      align-items: stretch;
      justify-content: center;
    }
    @media (min-width: 1440px) {
    }
  }
  &-title {
    font-family: Fredoka One;
    font-size: 40px;
    line-height: 100%;
    text-transform: uppercase;
    color: #1dcd68;
    margin: 0 0 15px;
    animation: flickerTitle 1.5s infinite alternate;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1dcd68,
      0 0 82px #1dcd68, 0 0 92px #1dcd68, 0 0 102px #1dcd68, 0 0 151px #1dcd68;
    @media (min-width: 576px) {
      margin: 0 0 25px;
      font-size: 70px;
    }
  }
  &-subtitle {
    font-weight: 500;
    font-size: 23px;
    line-height: 27px;
    margin: 0 0 15px;
    text-transform: uppercase;
    color: #ffffff;
    @media (min-width: 576px) {
      margin: 0 0 25px;
      font-size: 30px;
      line-height: 35px;
    }
  }
  &-text {
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    margin: 0;
    color: #ffffff;
    @media (min-width: 576px) {
      font-size: 23px;
    }
  }
  &-line {
    position: absolute;
    right: 100px;
  }
  &-wrap {
    margin-left: 0;
    @media (min-width: 1200px) {
      margin-top: 70px;
      margin-left: 70px;
    }
  }
  &-right {
    width: 100%;
    position: relative;
    max-width: 650px;
    @media (min-width: 576px) {
      padding: 50px 20px;
    }
    @media (min-width: 1200px) {
      width: 55%;
    }
    p {
      @media (min-width: 768px) {
        margin-bottom: 25px;
      }
    }
  }
  &-left {
    max-width: 496px;
    position: relative;
    width: 100%;
    padding: 50px 20px;
    svg {
      transform: scale(-1, 1);
    }
    .cls-2 {
      transform: rotate(180deg);
    }
    @media (min-width: 1200px) {
      width: 50%;
      margin-bottom: 0;
    }
    .flower {
      position: absolute;
      z-index: 1;
      top: 25px;
      left: -15px;
      transform: translate(-8%, -20%);
      transform-box: fill-box;
      transform-origin: 45% 30%;
      width: 100%;
      max-width: 130px;
      animation: 15s infinite ease-in-out rotateFlower;
      @media (min-width: 768px) {
        transform-origin: 0 0;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 244px;
      }
    }
  }
  &-video {
    position: relative;
    overflow: hidden;
    width: 100%;
    border-radius: 40px;
    z-index: 2;
    @media (min-width: 576px) {
      height: 776px;
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
}
@keyframes scalePlay {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes rotateFlower {
  0%,
  100% {
    transform: rotate(0deg) translate(-8%, -20%);
  }

  50% {
    transform: rotate(360deg) translate(-8%, -20%);
  }
}
@media (min-width: 768px) {
  @keyframes rotateFlower {
    0%,
    100% {
      transform: rotate(0deg) translate(-50%, -50%);
    }

    50% {
      transform: rotate(360deg) translate(-50%, -50%);
    }
  }
}
</style>
