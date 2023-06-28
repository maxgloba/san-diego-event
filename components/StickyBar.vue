<template>
  <div class="sticky">
    <div class="container">
      <div class="sticky-wrap">
        <Countdown />
        <div class="sticky-text" v-if="!sold">
          Time of next price raise.
          <br />Ticket price goes up every Friday!
        </div>
        <div class="sticky-text" v-else>
          We are all out of tickets 😟
          <br />to have a taste of it, grab a replay!
        </div>
        <NuxtLink to="/checkout" class="sticky-btn" v-if="!sold">Buy Now</NuxtLink>
        <div class="sticky-replay" v-else>
          <div>
            <img src="@/assets/img/sd/replay.png" alt />
            <a
              class="sticky-btn"
              href="https://learning.geekoutevents.io/offers/CQRk7NFo/checkout"
            >Buy Now</a>
          </div>
          <div>
            <img src="@/assets/img/sd/replay_notes.png" alt />
            <a
              class="sticky-btn"
              href="https://learning.geekoutevents.io/offers/tDnfZinc/checkout"
            >Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sold: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.progresScroll)
  },
  methods: {
    progresScroll() {
      const scroll =
        document.body.scrollTop || document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = (scroll / height) * 100
      if (this.$el !== null) {
        if (scrolled > 1) {
          this.$el.style.bottom = '0'
          this.$el.style.transition = 'all 0.3s ease'
        } else {
          this.$el.style.bottom = '-100%'
          this.$el.style.transition = 'all 0.3s ease'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.sticky {
  font-family: Public Sans;
  position: fixed;
  bottom: -100%;
  left: 0;
  width: 100%;
  background: #7b61ff;
  z-index: 100;
  padding: 15px 0;
  transition: all 0.3s ease-in;
   &-replay {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 10px 0;
    @media (min-width: 567px) {
      flex-direction: row;
    }
    @media (min-width: 992px) {
      margin: 0;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 10px 0;
      @media (min-width: 567px) {
        margin: 0;
      }
      .sticky-btn {
        max-width: 100px;
        margin-left: 10px;
      }
      img {
        width: 100%;
        max-width: 70px;
      }
    }
  }
  &-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    @media (min-width: 768px) {
      justify-content: space-between;
      flex-direction: row;
    }
  }
  &-text {
    font-size: 14px;
    line-height: 1.2;
    color: #ffffff;
    text-align: center;
    margin: 10px 0;
    @media (min-width: 768px) {
      margin: 0 10px;
      font-size: 18px;
      line-height: 21px;
    }
    br {
      @media (min-width: 992px) {
        display: none;
      }
    }
  }
  &-btn {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    color: #ffffff;
    display: block;
    text-decoration: none;
    background: #ff6700;
    padding: 14px 0;
    border-radius: 20px;
    text-align: center;
    margin: 10px 0;
    width: 100%;
    max-width: 100%;
    @media (min-width: 576px) {
      max-width: 155px;
    }
    @media (min-width: 768px) {
      margin: 0;
    }
  }
}
</style>
