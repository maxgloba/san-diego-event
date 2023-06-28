<template>
  <section class="sponsors">
    <div class="sponsors-inner">
      <div class="sponsors-item">
        <picture v-for="sponsor in sponsorsImg" :key="sponsor.img">
          <source :srcset="sponsor.webp" type="image/webp" />
          <source :srcset="sponsor.img" type="image/png" />
          <img :src="sponsor.img" alt="" />
        </picture>
      </div>
    </div>
  </section>
</template>
<script>
import gsap from 'gsap'

export default {
  name: 'sponsors',
  data() {
    return {
      sponsorsImg: [
        {
          img: require('@/assets/img/sd/sponsor-001.png'),
          webp: require('@/assets/img/sd/sponsor-001.webp'),
        },
        {
          img: require('@/assets/img/sd/sponsor-002.png'),
          webp: require('@/assets/img/sd/sponsor-002.webp'),
        },
        {
          img: require('@/assets/img/sd/sponsor-003.png'),
          webp: require('@/assets/img/sd/sponsor-003.webp'),
        },
        // {
        //   img: require('@/assets/img/sd/sponsor-004.png'),
        //   webp: require('@/assets/img/sd/sponsor-004.webp'),
        // },
        {
          img: require('@/assets/img/sd/sponsor-005.png'),
          webp: require('@/assets/img/sd/sponsor-005.webp'),
        },
        {
          img: require('@/assets/img/sd/sponsor-006.png'),
          webp: require('@/assets/img/sd/sponsor-006.webp'),
        },
        {
          img: require('@/assets/img/sd/sponsor-007.png'),
          webp: require('@/assets/img/sd/sponsor-007.webp'),
        },
        {
          img: require('@/assets/img/sd/sponsor-008.png'),
          webp: require('@/assets/img/sd/sponsor-008.webp'),
        },
        {
          img: require('@/assets/img/sd/sponsor-009.png'),
        },
        {
          img: require('@/assets/img/sd/sponsor-010.png'),
        },
        {
          img: require('@/assets/img/sd/sponsor-011.png'),
        },
      ],
    }
  },
  methods: {
    animatesponsors() {
      const sponsors = document.querySelector('.sponsors'),
        sponsorsItem = document.querySelector('.sponsors-item'),
        sponsorsInner = document.querySelector('.sponsors-inner'),
        sponsorsCount = sponsors.offsetWidth / sponsorsItem.offsetWidth

      for (let i = 0; i <= sponsorsCount; i++) {
        const sponsorsItemClone = sponsorsItem.cloneNode(true)
        sponsorsInner.appendChild(sponsorsItemClone)
      }

      const sponsorsInnerClone = sponsorsInner.cloneNode(true)
      sponsors.appendChild(sponsorsInnerClone)

      let progress = 0

      this.step = function (time, delta) {
        if (Math.abs(progress) > sponsorsInner.offsetWidth) progress = 0
        progress += delta * 0.1

        sponsorsInner.style.transform = `translate3d(-${progress}px, 0 , 0)`
        sponsorsInnerClone.style.transform = `translate3d(-${progress}px, 0 , 0)`
      }
      gsap.ticker.add(this.step)
    },
  },
  mounted() {
    this.animatesponsors()
  },
  destroyed() {
    gsap.ticker.remove(this.step)
  },
}
</script>
<style lang="scss" scoped>
.sponsors {
  width: 100%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  white-space: nowrap;
  cursor: default;
  align-items: center;
  user-select: none;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 15px 0;
  z-index: 2;
  &-inner {
    display: inline-block;
  }
  &-item {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    text-transform: uppercase;
    color: #ffffff;
    display: inline-block;
    img {
      display: inline-block;
      vertical-align: middle;
      margin: 0 50px;
    }
  }
}
</style>
