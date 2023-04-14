<template>
  <section class="about">
    <div class="container">
      <div class="about-inner">
        <div class="about-top line">
          <img src="@/assets/img/sd/lines/about-top.png" alt="" />
        </div>
        <div class="about-right">
          <div class="about-img">
            <div class="text">
              <picture>
                <source
                  srcset="@/assets/img/sd/about-text.webp"
                  type="image/webp"
                />
                <source
                  srcset="@/assets/img/sd/about-text.png"
                  type="image/png"
                />
                <img src="@/assets/img/sd/about-text.png" alt="" />
              </picture>
            </div>
            <picture>
              <source
                srcset="@/assets/img/sd/about-img.webp"
                type="image/webp"
              />
              <source srcset="@/assets/img/sd/about-img.png" type="image/png" />
              <img class="round" src="@/assets/img/sd/about-img.png" alt="" />
            </picture>
            <div class="team">
              <picture>
                <source srcset="@/assets/img/sd/team.webp" type="image/webp" />
                <source srcset="@/assets/img/sd/team.png" type="image/png" />
                <img class="team" src="@/assets/img/sd/team.png" alt="" />
              </picture>
            </div>
          </div>
        </div>
        <div class="about-left">
          <div class="about-wrap">
            <TextHead :neonParams="titleParams" />
            <p class="about-subtitle">
              It Was Built For Learners By Learners Leaders By Leaders Marketers
              By Marketers Nice People By Nice People
            </p>
            <p class="about-text">
              Geekout Events is a community of high-level marketers and brand
              owners created by James Van Elswyk and Nick Shackelford in 2017
              with the goal of creating a gathering of people that wanted to
              “Geek Out” with like-minded individuals. People who are obsessed
              with the intricate parts of auction- based media and whose loved
              ones and friends just didn’t “get it” so they were lacking a place
              to talk shop. We created a community for the people to gather and
              be passionate nerds over strategies, stats, clicks, and
              conversions.
            </p>
          </div>
        </div>
        <div class="about-bottom line">
          <img src="@/assets/img/sd/lines/about-bottom.png" alt="" />
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
        text: 'How Did the <br> Geekouts <br> Start? <span>How Did the <br> Geekouts <br> Start?</span> <p>How Did the <br> Geekouts <br> Start?</p>',
        marginBottom: '25px',
      },
    }
  },
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
.about {
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
    @media (min-width: 1200px) {
      display: block;
      width: 603px;
    }

    stroke-width: 5px;
  }
  &-inner {
    display: flex;
    position: relative;
    flex-flow: column-reverse;
    align-items: center;
    z-index: 2;
    @media (min-width: 576px) {
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1200px) {
      flex-flow: row-reverse;
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
    animation: flickerTitle 1.5s infinite alternate;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1dcd68,
      0 0 82px #1dcd68, 0 0 92px #1dcd68, 0 0 102px #1dcd68, 0 0 151px #1dcd68;
    @media (min-width: 576px) {
      font-size: 70px;
    }
  }
  &-subtitle {
    font-weight: 500;
    font-size: 23px;
    line-height: 35px;
    text-transform: uppercase;
    color: #ffffff;
    @media (min-width: 576px) {
      font-size: 30px;
    }
  }
  &-text {
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    color: #ffffff;
    @media (min-width: 576px) {
      font-size: 23px;
    }
  }
  &-wrap {
    margin: 0 auto;
    max-width: 650px;
    @media (min-width: 1200px) {
      margin: initial;
      max-width: 465px;
    }
    @media (min-width: 1400px) {
      max-width: 570px;
    }
  }
  &-right {
    width: 100%;
    position: relative;
    max-width: 500px;
    overflow: visible;
    @media (min-width: 1200px) {
      overflow: hidden;
      padding: 0 20px 60px;
      width: 40%;
    }
    p {
      margin-bottom: 25px;
    }
  }
  &-left {
    position: relative;
    width: 100%;
    margin-bottom: 50px;
    svg {
      transform: scale(-1, 1);
    }
    .cls-2 {
      transform: rotate(180deg);
    }
    @media (min-width: 1200px) {
      padding: 80px 20px 60px;
      width: 60%;
      margin-bottom: 0;
    }
    @media (min-width: 1400px) {
      width: 55%;
    }
  }
  &-img {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    @media (min-width: 576px) {
      margin-top: 80px;
    }
    @media (min-width: 768px) {
      margin-top: 120px;
    }
    img {
      width: 100%;
      max-width: 250px;
      @media (min-width: 576px) {
        max-width: 400px;
      }
      @media (min-width: 768px) {
        max-width: 500px;
      }
    }

    @media (min-width: 1200px) {
      margin-right: 50px;
    }
  }
  .round {
    z-index: 0;
    max-width: 160px;
    margin-bottom: -40px;
    animation: 15s infinite ease-in-out rotateText;
    @media (min-width: 576px) {
      max-width: 230px;
    }
    @media (min-width: 768px) {
      max-width: 330px;
    }
  }
  .team {
    z-index: 2;
  }
  .text {
    position: absolute;
    top: -15px;
    bottom: 0;
    z-index: 0;
    @media (min-width: 576px) {
      right: 0;
      top: 5px;
      left: 10%;
    }
    @media (min-width: 768px) {
      top: 50px;
      left: 0;
    }
    img {
      animation: 15s infinite linear rotateTextSecond;
    }
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0%;
      left: 0;
      background: linear-gradient(360deg, #15081b 70%, rgba(#15081b, 0) 100%);
      z-index: 1;
    }
  }
}

@keyframes rotateText {
  0%,
  100% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(360deg);
  }
}
@keyframes rotateTextSecond {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
