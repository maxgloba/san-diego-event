<template>
  <div class="page page-sandiego">
    <Canvas />
    <Banner />
    <div class="dark-bcg">
      <Vsl />
      <Benefits />
      <About />
      <ChartSection />
      <Flashback />
    </div>
    <Topics />
    <div class="dark-bcg">
      <Schedule />
      <Testimonials />
    </div>
    <LastSection />
    <Footer />
  </div>
</template>

<style lang="scss">
.page-sandiego {
  color: #fff;
  * {
    font-family: 'Public Sans', sans-serif;
  }
  .container {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 768px) {
      max-width: 738px;
      padding-left: 0;
      padding-right: 0;
    }
    @media (min-width: 1024px) {
      max-width: 994px;
    }
    @media (min-width: 1366px) {
      max-width: 1170px;
    }
    @media (min-width: 1400px) {
      max-width: 1330px;
    }
  }
  section {
    height: auto;
    padding-top: 25px;
    padding-bottom: 25px;
    @media (min-width: 768px) {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }
  .dark-bcg {
    min-height: 100vh;
    height: auto;
    position: relative;
    background: #15081b;
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
  @keyframes flickerTitle {
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
      text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 10px #1dcd68,
        0 0 10px #1dcd68, 0 0 10px #1dcd68, 0 0 10px #1dcd68, 0 0 20px #1dcd68;
    }
  }
}
</style>
