<template>
  <section class="schedule">
    <div class="container">
      <TextHead :neonParams="titleParams" />
      <div class="schedule-content">
        <div class="schedule-top line">
          <img src="@/assets/img/sd/lines/schedule-top.png" alt="" />
        </div>
        <div class="schedule-inner">
          <div
            v-for="date in shedules.dates"
            :key="date.text"
            class="schedule-item"
          >
            <div
              class="schedule-wrap"
              :style="'background-color:' + date.color"
            >
              <picture>
                <source
                  srcset="@/assets/img/sd/schedule.webp"
                  type="image/webp"
                />
                <source
                  srcset="@/assets/img/sd/schedule.png"
                  type="image/png"
                />
                <img
                  :style="'animation-delay:' + date.delay"
                  src="@/assets/img/sd/schedule.png"
                  alt=""
                />
              </picture>
              <div class="schedule-text">
                <p v-html="date.text"></p>
              </div>
            </div>
            <div class="schedule-events">
              <ul v-for="event in date.events" :key="event">
                <li :style="'color:' + date.color">{{ event }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="schedule-bottom line">
          <img src="@/assets/img/sd/lines/schedule-bottom.png" alt="" />
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
        text: "What's the <br> schedule? <span>What's the <br> schedule?</span><p>What's the <br> schedule?</p>",
        marginBottom: '100px',
      },
      shedules: {
        dates: [
          {
            text: '<p>March <br /><span>24th</span></p>',
            class: 'pink',
            color: '#ff1891',
            delay: '0s',
            events: ['Welcome Dinner - 7:00PM'],
          },
          {
            text: '<p>March <br /><span>25th</span></p>',
            class: 'green',
            color: '#1dcd68',
            delay: '0.5s',
            events: [
              'Breakfast - 8:00 AM',
              'Morning Education - 9:00 AM',
              'Lunch - 12:00 PM',
              'Afternoon Education - 1:00 PM',
              'Speaker & VIP Dinner - 7:00 PM',
            ],
          },
          {
            text: '<p>March <br /><span>26th</span></p>',
            class: 'orange',
            color: '#fd8636',
            delay: '1s',
            events: [
              'Breakfast - 8:00 AM',
              'Morning Education - 9:00 AM',
              'Lunch - 12:00 PM',
              'Afternoon Education - 1:00 PM',
              'Dinner & UFC Fight - 7:00 PM',
            ],
          },
          {
            text: '<p>March <br /><span>27th</span></p>',
            class: 'pink',
            color: '#ff1891',
            delay: '1.5s',
            events: ['Networking / Brunch - 11:00 AM'],
          },
        ],
      },
    }
  },
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
.schedule {
  position: relative;
  .container {
    position: relative;
  }
  svg {
    position: initial;
    @media (min-width: 768px) {
    }

    stroke-width: 5px;
  }
  &-inner {
    display: flex;
    flex-direction: column;
    padding: 50px 0;
    z-index: 1;
  }
  &-content {
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
    @media (min-width: 1400px) {
      left: auto;
      right: 60px;
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
      transform: translateX(-80%);
      width: 68%;
    }
    &:after {
      transform: translateX(120%);
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
  &-item {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    z-index: 1;
    @media (min-width: 992px) {
      flex-direction: row;
    }
    @media (min-width: 1440px) {
      align-items: center;
    }
  }
  &-title {
    font-family: Fredoka One;
    font-size: 40px;
    margin-bottom: 50px;
    max-width: 683px;
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
  &-text {
    margin-left: 20px;
    @media (min-width: 768px) {
      margin-left: 50px;
    }
    ::v-deep p {
      font-family: Public Sans;
      font-size: 23px;
      font-weight: 200;
      line-height: 1.4em;
      margin: 0;
      @media (min-width: 768px) {
        font-size: 30px;
      }
    }
    ::v-deep span {
      font-family: Fredoka One;
      font-size: 40px;
      font-weight: 400;
      line-height: 62.7px;
      margin-top: 5px;
      @media (min-width: 768px) {
        font-size: 60px;
      }
    }
  }
  &-wrap {
    display: flex;
    align-items: center;
    padding: 25px;
    border-radius: 30px;
    width: 100%;
    margin-bottom: 30px;
    @media (min-width: 768px) {
      padding: 30px;
    }
    @media (min-width: 992px) {
      width: 50%;
      max-width: 691px;
      margin-bottom: 0;
    }
    @media (min-width: 1200px) {
      width: 60%;
      border-radius: 100px;
    }
    img {
      width: 100%;
      max-width: 80px;
      animation: rotateImg 5s infinite alternate;
      @media (min-width: 1200px) {
        max-width: 150px;
      }
    }
  }
  &-events {
    width: 100%;
    margin-left: 0;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) {
      padding-left: 70px;
    }
    @media (min-width: 992px) {
      width: 40%;
      max-width: 691px;
      margin-bottom: 0;
    }
    @media (min-width: 1200px) {
      width: 40%;
      margin-left: 110px;
      padding-left: 0;
    }
    ul {
      padding-left: 20px;
      li {
        font-weight: 300;
        font-size: 20px;
        line-height: 23.5px;
        margin-bottom: 5px;
      }
    }
  }
  &-right {
    width: 100%;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    flex-flow: row;
    display: none;
    svg {
      width: 600px;
      margin-left: -5px;
    }
    svg:first-child {
      transform: scale(-1, 1);
      width: 750px;
    }
    .cls-2:first-child {
      transform: rotate(180deg);
    }
    @media (min-width: 992px) {
      display: flex;
    }
    p {
      margin-bottom: 25px;
    }
  }
  &-left {
    position: relative;
    display: none;
    width: 100%;
    @media (min-width: 992px) {
      display: flex;
    }
    svg {
      width: 600px;
      margin-left: -5px;
    }
    svg:first-child {
      transform: scale(-1, 1);
      width: 750px;
    }
  }
}
@keyframes rotateImg {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
