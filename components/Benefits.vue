<template>
  <section class="benefits">
    <div class="container">
      <div
        v-for="benefit in benefitsObj"
        :key="benefit.text"
        class="benefits-wrapper"
        :class="benefit.class"
      >
        <div class="benefits-inner">
          <picture>
            <source :srcset="benefit.webp" type="image/webp" />
            <source :srcset="benefit.icon" type="image/png" />
            <img class="benefits-img" :src="benefit.icon" alt="" />
          </picture>
        </div>
        <div class="benefits-text">
          <h2 class="benefits-title">{{ benefit.title }}</h2>
          <p>{{ benefit.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      benefitsObj: [
        {
          icon: require(`@/assets/img/sd/benefits/1.png`),
          webp: require(`@/assets/img/sd/benefits/1.webp`),
          title: '#NOEGO',
          text: 'Beginners mind from start no finish? ”you want to be rich? or do you want to be right?”',
          class: 'green',
        },
        {
          icon: require(`@/assets/img/sd/benefits/2.png`),
          webp: require(`@/assets/img/sd/benefits/2.webp`),
          title: '#LAPTOPLEARNING',
          text: 'Nothing is better than attendees and speakers have laptops out and are shoulder to shoulder showing and sharing',
          class: 'orange',
        },
        {
          icon: require(`@/assets/img/sd/benefits/3.png`),
          webp: require(`@/assets/img/sd/benefits/3.webp`),
          title: '#NODOUCHEBAGS',
          text: 'NO Explanation needed',
          class: 'pink',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.benefits {
  color: #ffffff;
  &-wrapper {
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-bottom: 25px;
    padding: 20px;
    width: 100%;
    @media (min-width: 576px) {
      flex-direction: column;
      padding: 30px;
    }
    @media (min-width: 1024px) {
      margin-bottom: 0px;
      flex-direction: row;
      border-radius: 100px;
    }
    @media (min-width: 1200px) {
      padding: 30px 80px 30px 30px;
    }
  }
  &-inner {
    img {
      width: 80px;
      max-width: 80px;
      @media (min-width: 576px) {
        width: 100%;
        max-width: 150px;
      }
    }
  }
  &-img {
  }
  &-title {
    font-family: Fredoka One;
    font-size: 20px;
    line-height: 36px;
    text-transform: uppercase;
    @media (min-width: 576px) {
      margin-top: 20px;
      font-size: 30px;
    }
    @media (min-width: 1024px) {
      margin-top: 0;
      margin-left: 80px;
    }
    @media (min-width: 1200px) {
      margin-left: 120px;
    }
  }
  &-text {
    display: flex;
    align-items: baseline;
    margin-left: 20px;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    @media (min-width: 576px) {
      margin-left: 0;
      align-items: center;
    }
    @media (min-width: 1024px) {
      flex-direction: row;
    }
    p {
      font-family: Public Sans;
      font-weight: 300;
      font-size: 18px;
      line-height: 27px;
      max-width: 400px;
      margin: 0;
      width: 100%;
      
      @media (min-width: 576px) {
        margin: 20px;
        font-size: 23px;
        text-align: center;
      }
      @media (min-width: 1024px) {
        text-align: initial;
      }
    }
  }
  .green {
    background: #1dcd68;
  }
  .orange {
    background: #fd8636;
  }
  .pink {
    background: #ff1891;
  }
}
</style>
