<template>
  <section class="testimonials">
    <div class="container">
      <TextHead :neonParams="titleParams" />
      <div class="testimonials-wrap">
        <div
          class="comment"
          v-for="comment in testimonialsObj"
          :key="comment.text"
        >
          <div class="svg-top">
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="comment.brdLeftTop ? 'svg-opacity' : 'svg-visible'"
            >
              <path
                d="M55.0035 3C29.5558 9.5214 9.52185 29.554 3 55"
                stroke="#FF1891"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="100"
                stroke-dashoffset="0"
              />
            </svg>
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="comment.brdRightTop ? 'svg-opacity' : 'svg-visible'"
            >
              <path
                d="M3.00037 3C28.4481 9.5214 48.4821 29.554 55.0039 55"
                stroke="#FF1891"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="100"
                stroke-dashoffset="0"
              />
            </svg>
          </div>
          <div class="comment-text">
            <p>{{ comment.text }}</p>
          </div>
          <div class="comment-author">
            <picture>
              <source :srcset="comment.webp" type="image/webp" />
              <source :srcset="comment.img" type="image/png" />
              <img :src="comment.img" />
            </picture>
            <div class="comment-name">
              <p>{{ comment.name }}</p>
              <img src="@/assets/img/sd/stars.png" class="comment-stars" />
            </div>
          </div>
          <div class="svg-bottom">
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="comment.brdLeftBottom ? 'svg-opacity' : 'svg-visible'"
            >
              <path
                d="M55.0035 55C29.5558 48.4786 9.52185 28.446 3 3"
                stroke="#FF6700"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="100"
                stroke-dashoffset="0"
              />
            </svg>

            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="comment.brdRightBottom ? 'svg-opacity' : 'svg-visible'"
            >
              <path
                d="M3.00037 55C28.4481 48.4786 48.4821 28.446 55.0039 3"
                stroke="#FF6700"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="100"
                stroke-dashoffset="0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['sponsorsObj'],
  data() {
    return {
      titleParams: {
        text: 'What have past <br> attendees said?<span>What have past <br> attendees said?</span><p>What have past <br> attendees said?</p>',
        marginBottom: '100px',
      },
      testimonialsObj: [
        {
          img: require(`@/assets/img/sd/testimonials/comment_1.png`),
          webp: require(`@/assets/img/sd/testimonials/comment_1.webp`),
          name: 'Paul Jeyapal',
          text: "“For me, it's being in the room with like, eight players man. Being in a room with media buyers that you know are spending 10 grand plus a day, 20 grand plus a day, and just bouncing ideas, but also the speakers. Starting this morning, watching the YouTube presentation, the influencer presentation. Even though I'm not actively on those platforms, it's really insightful because these are other channels. I was taking tons of notes, so I've got a lot of stuff that I can implement, and what I'm gonna be doing when I get home.”",
          brdLeftTop: true,
          brdRightTop: true,
          brdLeftBottom: true,
          brdRightBottom: false,
        },
        {
          img: require(`@/assets/img/sd/testimonials/comment_2.png`),
          webp: require(`@/assets/img/sd/testimonials/comment_2.webp`),
          name: 'Tyler Pack',
          text: "“It's hard to put into words, I mean, the caliber of people, and the presentations and the speakers is just something that I haven't had at any other event, really. The reason why I came here was that we're running e-comm brands and we're running just Facebook ads. And I wanted to market an affiliate and this has been perfect. I'm coming back, hundred percent I'm coming back.”",
          brdLeftTop: true,
          brdRightTop: true,
          brdLeftBottom: false,
          brdRightBottom: false,
        },
        {
          img: require(`@/assets/img/sd/testimonials/comment_3.png`),
          webp: require(`@/assets/img/sd/testimonials/comment_3.webp`),
          name: 'Matt Orlic',
          text: '“The group is truly unique in terms of the skillsets, and I think the networking is just phenomenal, probably one of the best events I’ve definitely been to from that perspective, and on top of it, the content is also extremely valuable.”',
          brdLeftTop: true,
          brdRightTop: true,
          brdLeftBottom: false,
          brdRightBottom: true,
        },
        {
          img: require(`@/assets/img/sd/testimonials/comment_4.png`),
          webp: require(`@/assets/img/sd/testimonials/comment_4.webp`),
          name: 'Eric Toz',
          text: "“I like that it was very tactical like here's what you need to do to get ready for Q4. That was super helpful. I was super engaged. Usually, I tune out a bit at some events or from watching people speak. I'll just tune out, but I was super engaged the whole time, and it was a good rhythm. It was back to back to back to back to back, no b.s., just learn, learn, learn, learn, learn, which I really appreciated And then the people. The networking's great, I mean, it's amazing. And if you don't know the GeekOut people, you need to add them to your network, yeah.”",
          brdLeftTop: true,
          brdRightTop: false,
          brdLeftBottom: true,
          brdRightBottom: false,
        },
        {
          img: require(`@/assets/img/sd/testimonials/comment_5.png`),
          webp: require(`@/assets/img/sd/testimonials/comment_5.webp`),
          name: 'Kyle Hermann',
          text: "“It's been great, the networking opportunity. It's been crazy meeting these people. It's a much higher level than I'm used to. I go to a lot of events, and it's been really impressive what they've been able to pull off at this price point. it's really community-based. It almost feels like a family that you never had for a few days so it's been great.”",
          brdLeftTop: false,
          brdRightTop: false,
          brdLeftBottom: false,
          brdRightBottom: false,
        },
        {
          img: require(`@/assets/img/sd/testimonials/comment_6.png`),
          webp: require(`@/assets/img/sd/testimonials/comment_6.webp`),
          name: 'Justin Dallas',
          text: "“I have never taken so many notes at an event before. This community is a collection of experts. If you're into media buying, e-commerce, or direct response then you NEED to attend GeekOut. What really amazed me was how willing everyone was to share the personal strategies they use in their own businesses. No superficial fluff here.”",
          brdLeftTop: false,
          brdRightTop: true,
          brdLeftBottom: false,
          brdRightBottom: true,
        },
        {
          img: require(`@/assets/img/sd/testimonials/comment_7.png`),
          webp: require(`@/assets/img/sd/testimonials/comment_7.webp`),
          name: 'Peter Kell',
          text: "“If you're not connecting with people, you're crazy. To see what everyone else is doing and to learn about the other opportunities, you'd be crazy not to join one of these things. I mean, how good are you at influencers? How good are you at YouTube? How good are you at Facebook? How good are you on Instagram? There's plenty to learn in this space. There's plenty, like, the opportunity for you to grow and be a better marketer and a better businessman.”",
          brdLeftTop: true,
          brdRightTop: false,
          brdLeftBottom: true,
          brdRightBottom: true,
        },
        {
          img: require(`@/assets/img/sd/testimonials/comment_8.png`),
          webp: require(`@/assets/img/sd/testimonials/comment_8.webp`),
          name: 'Wendi Borlabi',
          text: '“This is a really great experience. I feel very, very fortunate to be able to do things that are outside my normal comfort zone. We wanna learn and stretch and be able to come and talk to a different population about performance, I think was very fortunate for me, and I always say that performance is performance, and this is a really great example.”',
          brdLeftTop: false,
          brdRightTop: false,
          brdLeftBottom: true,
          brdRightBottom: true,
        },
        {
          img: require(`@/assets/img/sd/testimonials/comment_9.png`),
          webp: require(`@/assets/img/sd/testimonials/comment_9.webp`),
          name: 'Brad Vuckovich',
          text: "“It's amazing, not just because of the people that you meet here, but also about the whole experience. It's all about networking, it's all about sharing.”",
          brdLeftTop: false,
          brdRightTop: true,
          brdLeftBottom: true,
          brdRightBottom: true,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.testimonials {
  font-family: Public Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.15px;
  .neon-text {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (min-width: 768px) {
      justify-content: flex-end;
    }
  }
  .svg {
    &-top {
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: -3px;
    }
    &-bottom {
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: -3px;
    }
    &-opacity {
      opacity: 1;
    }
    &-visible {
      opacity: 1;
      @media (min-width: 1200px) {
        opacity: 0;
      }
    }
  }
  .comment {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    flex-flow: column-reverse;
    @media (min-width: 768px) {
      flex-flow: column;
      padding: 44px;
    }
    &-text {
      width: 100%;
      max-width: 100%;
      font-weight: 400;
      margin-bottom: 15px;
      @media (min-width: 768px) {
        max-width: 312px;
        margin-bottom: 44px;
      }
    }
    &-author {
      display: flex;
      align-items: center;
    }
    &-name {
      margin-left: 30px;
      p {
        margin: 0 0 13px 0;
        font-weight: 900;
      }
    }
    &-stars {
    }
  }

  &-wrap {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 25px 0px;
    grid-auto-rows: initial;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 1fr;
      grid-gap: 0 0;
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  svg {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
    path {
      animation: borderAnime 15s linear alternate infinite;
    }
  }
  @keyframes borderAnime {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: 1000;
    }
  }
}
</style>
