export const About = () => import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const Banner = () => import('../../components/Banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c))
export const Benefits = () => import('../../components/Benefits.vue' /* webpackChunkName: "components/benefits" */).then(c => wrapFunctional(c.default || c))
export const Canvas = () => import('../../components/Canvas.vue' /* webpackChunkName: "components/canvas" */).then(c => wrapFunctional(c.default || c))
export const Chart = () => import('../../components/Chart.vue' /* webpackChunkName: "components/chart" */).then(c => wrapFunctional(c.default || c))
export const ChartSection = () => import('../../components/ChartSection.vue' /* webpackChunkName: "components/chart-section" */).then(c => wrapFunctional(c.default || c))
export const Countdown = () => import('../../components/Countdown.vue' /* webpackChunkName: "components/countdown" */).then(c => wrapFunctional(c.default || c))
export const Flashback = () => import('../../components/Flashback.vue' /* webpackChunkName: "components/flashback" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LastSection = () => import('../../components/LastSection.vue' /* webpackChunkName: "components/last-section" */).then(c => wrapFunctional(c.default || c))
export const Schedule = () => import('../../components/Schedule.vue' /* webpackChunkName: "components/schedule" */).then(c => wrapFunctional(c.default || c))
export const Sponsors = () => import('../../components/Sponsors.vue' /* webpackChunkName: "components/sponsors" */).then(c => wrapFunctional(c.default || c))
export const StickyBar = () => import('../../components/StickyBar.vue' /* webpackChunkName: "components/sticky-bar" */).then(c => wrapFunctional(c.default || c))
export const Testimonials = () => import('../../components/Testimonials.vue' /* webpackChunkName: "components/testimonials" */).then(c => wrapFunctional(c.default || c))
export const TextHead = () => import('../../components/TextHead.vue' /* webpackChunkName: "components/text-head" */).then(c => wrapFunctional(c.default || c))
export const Topics = () => import('../../components/Topics.vue' /* webpackChunkName: "components/topics" */).then(c => wrapFunctional(c.default || c))
export const Vsl = () => import('../../components/Vsl.vue' /* webpackChunkName: "components/vsl" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
