<template>
  <svg
    width="100%"
    height="100%"
    viewBox="2 2 38 38"
    preserveAspectRatio="xMinYMin meet"
    class="donut"
    :class="chartParam.class_circle"
  >
    <circle r="15.91549430918954" cx="21" cy="21" class="donut-hole"></circle>
    <circle
      r="15.91549430918954"
      cx="21"
      cy="21"
      class="donut-segment"
      stroke="#2F2F2F"
    ></circle>
    <circle r="15.91549430918954" cx="21" cy="21" class="donut-ring">
      <animate
        attributeName="stroke-dasharray"
        :dur="chartParam.option.duration + 's'"
        :values="
          '0,100;' + chartParam.percent + ',' + (100 - chartParam.percent)
        "
        fill="freeze"
      />
    </circle>
    <g>
      <text x="0" y="-17">
        {{
          chartParam.dollar
            ? '$' + chartParam.percent + 'M'
            : chartParam.percent + '%'
        }}
      </text>
    </g>
  </svg>
</template>

<script>
export default {
  props: ['chartParam'],
  data() {
    return {
      active: false,
    }
  },
  mounted() {
    this.startAnimate()
  },
  methods: {
    startAnimate() {
      const chartsection = document.getElementById('chartBlock')
      const text = this.$el.lastChild.children[0]
      const animate = this.$el.children[2].firstChild

      window.addEventListener('scroll', () => {
        const top = Math.round(chartsection.getBoundingClientRect().top - 500)
        const timline =
          (this.chartParam.option.duration * 1000) / this.chartParam.percent
        if (this.active === false) {
          if (top < 60 && top > 0) {
            animate.beginElement()
            let a = 0.0
            setInterval(() => {
              a = a + 1.0
              if (a <= this.chartParam.percent) {
                if (this.chartParam.dollar) {
                  a = a + 0.1
                  text.textContent = '$' + (a + 0.3).toFixed(1) + 'm'
                } else {
                  text.textContent = a + '%'
                }
              }
            }, timline)
            this.active = true
          }
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
svg {
  border-radius: 50%;
  transform: rotate(90deg);
  width: 100%;
  height: 300px;
  max-height: 100%;
  max-width: 100%;
}
svg text {
  font-family: Public Sans;
  font-weight: 900;
  font-size: 4px;
  text-align: center;
  fill: rgb(255, 255, 255);
  text-rendering: geometricPrecision;
}
g {
  transform: rotate(270deg) translate(-65%, 105%);
}
circle {
  fill: transparent;
  stroke-width: 1.4;
  r: 15.91549430918954;
  cx: 21;
  cy: 21;
}
.donut-ring {
  border-radius: 20px;
}
.first {
  .donut-ring {
    stroke: #ff6700;
  }
}
.second {
  .donut-ring {
    stroke: #ff1891;
  }
  g {
    transform: rotate(270deg) translate(-75%, 105%);
  }
}
.third {
  .donut-ring {
    stroke: #1dcd68;
  }
}
</style>
