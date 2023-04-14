<template>
  <section class="topics">
    <div class="topics-wrap">
      <div class="container">
        <div class="topics-round">
          <img src="@/assets/img/sd/topics-text.png" alt="" />
        </div>
        <div class="topics-title desktop" v-html="activeTitle" />
      </div>
    </div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div v-for="topic in topics" :key="topic.img" class="swiper-slide">
          <div class="swiper-img">
            <picture>
              <source :srcset="topic.webp" type="image/webp" />
              <source :srcset="topic.img" type="image/png" />
              <img :src="topic.img" />
            </picture>
          </div>
        </div>
      </div>
      <div class="container mobile">
        <div class="topics-title" v-html="activeTitle" />
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.css'
export default {
  name: 'Topics',
  data() {
    return {
      swiper: null,
      topics: [
        {
          title: 'Greg Woodfield - <br> SMS - What Messages to Send When',
          img: require(`@/assets/img/sd/topics/1.png`),
          webp: require(`@/assets/img/sd/topics/1.webp`),
        },
        {
          title:
            'James Van Elswyk - <br> Advertorials - What Are They <br> and How To Use Them',
          img: require(`@/assets/img/sd/topics/2.png`),
          webp: require(`@/assets/img/sd/topics/2.webp`),
        },
        {
          title:
            'Nick Fisher - <br> Google Search for Ecom How To Go <br> Past Branded Search & Make Sales <br> With Prospecting',
          img: require(`@/assets/img/sd/topics/3.png`),
          webp: require(`@/assets/img/sd/topics/3.webp`),
        },
        {
          title:
            'Cody <br> Iverson - How To Script & Coach <br> Influencers and Billionaires',
          img: require(`@/assets/img/sd/topics/4.png`),
          webp: require(`@/assets/img/sd/topics/4.webp`),
        },
        {
          title:
            'Zach Johnson - <br> Adcard - How To Play The Points <br> Game - Cashback Points and Why',
          img: require(`@/assets/img/sd/topics/5.png`),
          webp: require(`@/assets/img/sd/topics/5.webp`),
        },
        {
          title: 'Jem Bourouh - <br> TikTok Creatives, <br> How To Look Native',
          img: require(`@/assets/img/sd/topics/6.png`),
          webp: require(`@/assets/img/sd/topics/6.webp`),
        },
        {
          title:
            'Anoop Grover - <br> Scaling an Enterprise from 0 to 1 <br> and 1 to 5',
          img: require(`@/assets/img/sd/topics/7.png`),
          webp: require(`@/assets/img/sd/topics/7.webp`),
        },
      ],
    }
  },
  computed: {
    activeTitle() {
      if (!this.swiper) return ''
      return this.swiper.activeIndex
        ? this.topics[this.swiper.activeIndex].title
        : this.topics[0].title
    },
  },
  mounted() {
    this.swiper = new Swiper('.swiper', {
      effect: 'creative',
      creativeEffect: {
        limitProgress: this.topics.length,
        prev: {
          translate: ['50%', 0, -5],
          opacity: 0,
        },
        next: {
          translate: ['50%', 0, 0],
        },
      },
      // effect: 'cards',
      // cardsEffect: {
      //   slideShadows: false,
      // },

      mousewheel: {
        releaseOnEdges: true,
      },
      // loop: true,
      watchSlidesProgress: true,
      slidesPerView: 1.7,
      centeredSlides: true,
      breakpoints: {
        576: {
          slidesPerView: 2.2,
        },
        768: {
          slidesPerView: 2.7,
        },
        992: {
          slidesPerView: 3.2,
        },
        1440: {
          slidesPerView: 4,
        },
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.topics {
  &-wrap {
    height: auto;
    position: relative;
    margin-bottom: 0;
    background: #15081b;
    @media (min-width: 768px) {
      margin-bottom: 100px;
    }
    &:before,
    &:after {
      content: '';
      height: 100px;
      position: absolute;
      z-index: 1;
    }
    &:before {
      top: 0;
      left: 0;
      width: 100%;
      transform: translate(0, -100%);
      background: linear-gradient(0deg, #15081b 0%, rgba(#15081b, 0) 100%);
    }
    &:after {
      bottom: 0;
      left: 0;
      width: 100%;
      transform: translate(0, 100%);
      background: linear-gradient(180deg, #15081b 0%, rgba(#15081b, 0) 100%);
    }
  }
  .container {
    position: relative;
    display: flex;
    flex-flow: row-reverse;
    justify-content: flex-end;
    align-items: flex-end;
    overflow: hidden;
    height: 160px;
    @media (min-width: 768px) {
      height: 330px;
    }
  }
  &-round {
    position: relative;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translate(-50%, 0);
    width: 60%;
    @media (min-width: 576px) {
      width: auto;
      top: 20px;
    }
    @media (min-width: 768px) {
      top: 5px;
    }
    img {
      width: 100%;
      animation: 15s infinite linear rotateText;
      max-width: 500px;
    }
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0%;
      left: 0;
      background: linear-gradient(360deg, #15081b 50%, rgba(#15081b, 0) 100%);
      z-index: 1;
    }
  }
  &-title {
    font-family: Public Sans;
    font-weight: 900;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #ff6700;
    z-index: 2;
    br {
      display: none;
      @media (min-width: 576px) {
        display: block;
      }
    }
    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 35px;
    }
  }
  .desktop {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
  .mobile {
    display: block;
    height: auto;
    min-height: 120px;
    @media (min-width: 768px) {
      display: none;
    }
  }
  &-anim {
    transition: 0.5s ease-in-out;
    transform: translate(-100%, -50%);
    z-index: 5;
  }
  .swiper {
    z-index: 2;
    &-slide {
      user-select: none;
      position: relative;
      &-active {
        .swiper-img {
          transform: scale(1);
          &::before {
            background: none;
          }
          img {
            // animation: 10s linear 0s normal none infinite running scaleAnimation;
          }
        }
      }
    }
    &-img {
      position: relative;
      transform: scale(0.75);
      img {
        height: auto;
        width: 100%;
        z-index: 2;
        border-radius: 50%;
      }
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(90deg, #005424 0%, rgba(0, 84, 36, 0) 100%),
          linear-gradient(
            0deg,
            rgba(29, 205, 104, 0.6),
            rgba(29, 205, 104, 0.6)
          ),
          linear-gradient(0deg, #1dcd68, #1dcd68);
        opacity: 0.8;
        z-index: 3;
        border-radius: 50%;
      }
    }
    &-creative &-slide {
      overflow: visible;
    }
    .topics__buttons-row {
      display: flex;
      justify-content: center;
    }
    .topics__buttons {
      margin-top: 100px;
      padding: 0 10px;
      display: flex;
      .button-prev,
      .button-next {
        outline: none;
        cursor: pointer;
        width: 60px;
        path {
          transition: fill 0.1s;
        }
        &:hover {
          path {
            fill: #919191af;
          }
        }
      }
      .button-prev {
        margin-right: 80px;
      }
    }
    &-button-disabled {
      path {
        fill: #2f2f2f;
      }
    }
    &-wrapper {
      margin-bottom: 30px;
      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }
  }

  @keyframes rotateText {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
