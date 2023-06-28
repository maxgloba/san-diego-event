<template>
  <div :class="neonParams.banner ? 'neon-banner' : 'neon-text'" :style="'margin-bottom:' + neonParams.marginBottom">
    <div :class="width <= 576 && !neonParams.banner ? 'mobile' : 'desktop'">
      <h2 v-html="neonParams.text"></h2>
    </div>
  </div>
</template>
<script>
export default {
  props: ['neonParams'],
  data() {
    return {
      width: 0,
    }
  },
  created() {
    this.updateWidth()
    window.addEventListener('resize', this.updateWidth)
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth
    },
  },
}
</script>
<style lang="scss" scoped>
.neon-banner {
  h2 {
    margin: 0;
    position: relative;
    font-family: Fredoka One;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: transparent;
    font-size: 50px;
    @media (min-width: 576px) {
      font-size: 70px;
    }
    @media (min-width: 768px) {
      font-size: 90px;
    }
  }
  ::v-deep p,
  ::v-deep span {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    font-family: Fredoka One;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: transparent;
    font-size: 50px;
    @media (min-width: 576px) {
      font-size: 70px;
    }
    @media (min-width: 768px) {
      font-size: 90px;
    }
  }
  h2 {
    z-index: 1;
  }
  ::v-deep p {
    z-index: 2;
  }
  ::v-deep span {
    z-index: 0;
  }
}

.neon-text {
  @media (max-width: 567px) {
    margin-bottom: 40px !important;
  }
  h2 {
    margin: 0;
    position: relative;
    font-family: Fredoka One;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: transparent;
    font-size: 40px;
    @media (min-width: 576px) {
      font-size: 70px;
    }
  }
  ::v-deep p,
  ::v-deep span {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    font-family: Fredoka One;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: transparent;
    font-size: 40px;
    @media (min-width: 576px) {
      font-size: 70px;
    }
  }
  h2 {
    z-index: 1;
  }
  ::v-deep p {
    z-index: 2;
  }
  ::v-deep span {
    z-index: 0;
  }
}
.desktop {
  h2 {
    -webkit-text-stroke: 8px rgba(0, 255, 109, 0.4);
  }
  ::v-deep p {
    -webkit-text-stroke: 2px rgb(255, 255, 255);
    filter: blur(0.8px);
  }
  ::v-deep span {
    -webkit-text-stroke: 8px rgba(0, 255, 109, 0.2);
    text-shadow: 0px 0px 25px rgba(0, 255, 109, 0.7);
    animation: flickerSvg 1.5s infinite alternate;
  }
}
.mobile {
  h2 {
    -webkit-text-stroke: 1px rgb(255, 255, 255);
    filter: blur(0.3px);
  }
  ::v-deep p {
    -webkit-text-stroke: 3.5px rgba(0, 255, 109, 0.4);
  }
  ::v-deep span {
    -webkit-text-stroke: 3.5px rgba(0, 255, 109, 0.2);
    text-shadow: 0px 0px 10px rgba(0, 255, 109, 0.7);
    animation: flickerMobile 1.5s infinite alternate;
  }
}

@keyframes flickerSvg {
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
    text-shadow: 0px 0px 25px rgba(0, 255, 109, 0.7);
  }
}

@keyframes flickerMobile {
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
    text-shadow: 0px 0px 10px rgba(0, 255, 109, 0.7);
  }
}
</style>