<template>
  <canvas class="canvas" ref="canvasEl" />
</template>

<script>
import Scene from '~/plugins/SanDiego/Scene'

export default {
  name: 'Canvas',
  data() {
    return {
      beep: null,
      audioFile: require('@/assets/klakson.mp3').default,
    }
  },
  mounted() {
    this.audioFile = require('@/assets/klakson.mp3').default
    this.beep = new Audio(this.audioFile)
    this.sanDiego = new Scene(this.$refs.canvasEl)
    setTimeout(()=>{
      window.scrollTo(0,0)
    }, 1)
    // this.sanDiego.resources.on('ready2', () => {
    //   this.sanDiego.world.vw.on('vwClicked', this.sound.bind(this))
    // })
  },
  beforeDestroy() {
    if (this.sanDiego) {
      if (this.sanDiego.world?.vw)
        this.sanDiego.world.vw.off('vwClicked', this.sound.bind(this))
      this.sanDiego.destroy()
      this.sanDiego = null
    }
  },
  methods: {
    sound() {
      if (!this.sanDiego) return
      if (!this.beep.paused) {
        this.beep.pause()
        this.beep.currentTime = 0
      }
      this.beep.play()
    },
  },
}
</script>

<style>
.canvas {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  display: block;
}
</style>
