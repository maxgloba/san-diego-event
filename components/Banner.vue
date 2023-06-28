<template>
  <section class="banner">
    <div class="container">
      <div class="banner-left">
        <div class="banner-date">MARCH <span>24-27</span></div>
        <div class="banner-title">
          <TextHead :neonParams="titleParams" />
          <svg
            width="254"
            height="252"
            viewBox="0 0 254 252"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M127 0L145.483 40.0427L178.656 10.9797L179.254 55.0784L221.379 42.0204L203.99 82.55L247.784 87.7548L215.413 117.707L253.304 140.275L211.549 154.472L236.985 190.5L193.066 186.486L201.649 229.745L163.159 208.214L153.405 251.225L127 215.9L100.595 251.225L90.8411 208.214L52.3513 229.745L60.9344 186.486L17.0148 190.5L42.4511 154.472L0.695717 140.275L38.587 117.707L6.21582 87.7548L50.0103 82.55L32.6206 42.0204L74.7459 55.0784L75.3445 10.9797L108.517 40.0427L127 0Z"
              fill="#FF6700"
            />
          </svg>
        </div>
        <div class="banner-desc">
          Ecommerce + <br />California Sunshine = <br />Good
          <span>(& High ROAS)</span> Vibes
        </div>
      </div>
      <div class="banner-right">
        <img src="@/assets/img/sd/car.png"/>
      </div>
    </div>
    <Sponsors />
  </section>
</template>
<script>
export default {
  data() {
    return {
      titleParams: {
        text: 'Geek OUT <br> San Diego <br> 2022 <span>Geek OUT <br> San Diego <br> 2022</span> <p>Geek OUT <br> San Diego <br> 2022</p>',
        banner: true,
        marginBottom: '',
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.banner {
  min-height: 100vh;
  padding-top: 15px;
  padding-bottom: 50px;
  position: relative;
  overflow: hidden;
  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 100px;
  }
  &-date {
    font-weight: 500;
    font-size: 35px;
    line-height: 100%;
    text-transform: uppercase;
    margin-bottom: 85px;
    width: 100%;
    max-width: 130px;
    @media (min-width: 768px) {
      margin-bottom: 30px;
    }
    @media (min-width: 1024px) {
      font-size: 45px;
      line-height: 53px;
      max-width: 100%;
      margin-bottom: 168px;
    }
    span {
      color: #ff6700;
      animation: dateShadow 1.5s infinite alternate;
    }
  }
  &-title {
    position: relative;
    display: inline-block;
    margin-bottom: 30px;
    h1 {
      font-family: Fredoka One;
      font-size: 80px;
      line-height: 73.73px;
      text-transform: uppercase;
      position: relative;
      z-index: 2;
      @media (min-width: 1330px) {
        font-size: 100px;
        line-height: 90px;
      }
      span {
        font-family: Fredoka One;
        animation: titleShadow 4s infinite alternate;
      }
    }
    svg {
      display: block;
      position: absolute;
      top: 50%;
      left: calc(100% - 25px);
      transition: 1s ease;
      z-index: 0;
      transform-origin: 0 0;
      animation: spin 15s infinite ease-in-out;
      width: 100%;
      max-width: 100px;
      @media (min-width: 576px) {
        top: 50%;
        left: calc(100% - 40px);
        max-width: 210px;
      }
      @media (min-width: 992px) {
        max-width: 254px;
      }
    }
  }
  &-desc {
    font-weight: 500;
    font-size: 45px;
    line-height: 53px;
    text-transform: uppercase;
    color: #1dcd68;
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
    span {
      color: #ff6700;
    }
  }
  &-left {
    width: 100%;
    @media (min-width: 1200px) {
      width: 60%;
    }
  }
  &-right {
    width: 100%;
    @media (min-width: 576px) {
      display: none;
    }
    img {
      width: 100%;
      max-width: 430px;
      display: block;
      margin: 70px auto;
      cursor: pointer;
      transition: transform 0.3s ease;
      @media (min-width: 576px) {
        display: none;
      }
      &:hover {
        transform: scale(1.05);
      }
      &:active {
        transform: scale(1);
      }
    }
  }
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 992px) {
      flex-direction: row;
    }
  }
}
.audio {
  display: none;
  visibility: hidden;
}
@keyframes dateShadow {
  20%,
  24%,
  55% {
    text-shadow: none;
  }
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 2px #fff, 0 0 4px #ff6700,
      0 0 4px #ff6700, 0 0 4px #ff6700, 0 0 4px #ff6700, 0 0 8px #ff6700;
  }
}
@keyframes spin {
  0%,
  100% {
    transform: rotate(0deg) translate(-50%, -50%);
  }
  50% {
    transform: rotate(360deg) translate(-50%, -50%);
  }
}
</style>
