<template>
  <section class="last-section">
    <div class="container">
      <div class="last-section-wrap">
        <TextHead :neonParams="titleParams" />
        <p class="last-section-text">
          If you cant make it because of Covid based reasons or just don’t feel
          you got the value you paid for just ask for a refund and its yours
        </p>
        <div class="last-section-list">
          <p>NO</p>
          <p>Questions</p>
          <p>Asked</p>
        </div>
        <div class="last-section-btn" @mouseover="neon">
          <NuxtLink to="/" class="buynow">Buy Now</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      titleParams: {
        text: 'No BS, No Hesitation <br> Money back Guarantee<span>No BS, No Hesitation <br> Money back Guarantee</span><p>No BS, No Hesitation <br> Money back Guarantee</p>',
        marginBottom: '25px',
      },
    }
  },
  methods: {
    neon() {
      const audioFile = require('@/assets/neon.mp3').default
      const beep = new Audio(audioFile)
      // beep.pause()
      beep.play()
    },
  },
}
</script>

<style scoped lang="scss">
.last-section {
  min-height: auto;
  &-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include _md {
      flex-direction: column;
    }
    p {
      max-width: 600px;
      font-family: Public Sans;
      font-size: 18px;
      line-height: 23px;
      color: #ffffff;
      margin: 0;
      @media (min-width: 768px) {
        font-size: 20px;
      }
    }
  }
  &-title {
    font-family: Fredoka One;
    font-size: 40px;
    margin-bottom: 15px;
    line-height: 100%;
    text-transform: uppercase;
    color: #1dcd68;
    z-index: 2;
    animation: flickerTitle 1.5s infinite alternate;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1dcd68,
      0 0 82px #1dcd68, 0 0 92px #1dcd68, 0 0 102px #1dcd68, 0 0 151px #1dcd68;
    br {
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    }
    @media (min-width: 576px) {
      font-size: 70px;
    }
    @media (min-width: 768px) {
      margin-bottom: 25px;
    }
  }
  &-text {
    margin-bottom: 40px !important;
    @media (min-width: 768px) {
      margin-bottom: 20px !important;
    }
  }
  &-list {
    margin-bottom: 50px;
  }
  &-btn {
    margin-bottom: 50px;
    padding: 20px;
    @media (min-width: 768px) {
      padding: initial;
    }
    .buynow {
      width: 100%;
      max-width: 500px;
      padding: 20px 0;
      background: none;
      font-weight: 400;
      font-size: 40px;
      letter-spacing: 0.005em;
      margin: 0px auto;
      display: block;
      text-decoration: none;
      border-radius: 100px;
      text-align: center;
      position: relative;
      transition: 0.5s ease;
      color: #fff;
      animation: flicker 1.5s infinite alternate;
      text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #bc13fe,
        0 0 82px #bc13fe, 0 0 92px #bc13fe, 0 0 102px #bc13fe, 0 0 151px #bc13fe;
      box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe,
        0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe;
      &:hover {
        animation: none;
        box-shadow: 0 0 0.4rem #fff, 0 0 0.4rem #fff, 0 0 4rem #bc13fe,
          0 0 1.6rem #bc13fe, 0 0 5.6rem #bc13fe, inset 0 0 2.6rem #bc13fe;
      }
      @media (min-width: 768px) {
        padding: 30px 0;
        font-size: 60px;
      }
    }
    @keyframes flicker {
      0%,
      18%,
      22%,
      25%,
      53%,
      57%,
      100% {
        text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff,
          0 0 40px #bc13fe, 0 0 80px #bc13fe, 0 0 90px #bc13fe,
          0 0 100px #bc13fe, 0 0 150px #bc13fe;
        box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe,
          0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe;
      }
      20%,
      24%,
      55% {
        text-shadow: none;
        box-shadow: none;
      }
    }
  }
}
</style>
