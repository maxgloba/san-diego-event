<template>
  <section class="charts" id="chartBlock">
    <div class="container">
      <div class="charts-main">
        <TextHead :neonParams="titleParams" />
        <div class="charts-subtitle">
          <span>#Learners</span>
          <span>#Ballers</span>
          <span>#Founders</span>
        </div>
      </div>
      <div class="charts-content">
        <div class="charts-wrap">
          <Chart :chartParam="chartParamFirst" />
          <p>Founders or main decision makers of the brands</p>
        </div>
        <div class="charts-wrap">
          <Chart :chartParam="chartParamThird" />
          <p>
            Of the audience is Ecommerce focused on Facebook and instagram as
            the main traffic channel with Snapchat, Youtube, and Amazon close
            behind
          </p>
        </div>
        <div class="charts-wrap">
          <Chart :chartParam="chartParamSecond" />
          <p>Average yearly revenue per brand that attended</p>
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
        text: 'Who Goes <br> To Geekouts?<span>Who Goes <br> To Geekouts?</span><p>Who Goes <br> To Geekouts?</p>',
        marginBottom: '25px',
      },
      chartParamFirst: {
        class_circle: 'first',
        percent: '80',
        option: {
          duration: '3',
        },
      },
      chartParamSecond: {
        class_circle: 'second',
        dollar: true,
        percent: '37.7',
        option: {
          duration: '3',
        },
      },
      chartParamThird: {
        class_circle: 'third',
        percent: '90',
        option: {
          duration: '3',
        },
      },
    }
  },
}
</script>

<style scoped lang="scss">
.charts {
  &-main {
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media (min-width: 992px) {
      align-items: flex-end;
      margin-bottom: 142px;
    }
  }
  &-title {
    font-family: Fredoka One;
    font-size: 40px;
    line-height: 100%;
    text-transform: uppercase;
    margin-bottom: 25px;
    color: #1dcd68;
    animation: flickerTitle 1.5s infinite alternate;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1dcd68,
      0 0 82px #1dcd68, 0 0 92px #1dcd68, 0 0 102px #1dcd68, 0 0 151px #1dcd68;
    @media (min-width: 576px) {
      font-size: 70px;
    }
  }
  &-subtitle {
    font-family: Public Sans;
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    width: 100%;
    max-width: 580px;
    color: #ffffff;
    @media (min-width: 576px) {
      font-size: 23px;
    }
    span {
      margin-right: 10px;
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 992px) {
      justify-content: space-between;
      align-items: baseline;
      flex-direction: row;
    }
  }
  &-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    @media (min-width: 992px) {
      width: 33.3333%;
      max-width: 350px;
    }
    p {
      max-width: 100%;
      font-family: Public Sans;
      font-size: 23px;
      line-height: 27px;
      text-align: center;
      color: #ffffff;
      @media (min-width: 576px) {
        max-width: 70%;
      }
    }
  }
  &-wrap:nth-child(2n) {
    p {
      max-width: 100%;
    }
  }
}
</style>
