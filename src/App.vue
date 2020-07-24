<template>
  <!-- <v-app class="inteliped_app"> -->
  <div>
  <div v-if="cover_logo" :style="vueAppStyle">
    <transition name="fade" appear mode="out-in">
      <div class="alitec_base alitec_loading" style="z-index: 1;">
        <div class="alitec_logo" />
      </div>
    </transition>
  </div>
  <router-view v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name      : 'App',
  components: {
  },
  data() {
    return {
      cover_logo: true
    }
  },
  computed: {
    vueAppStyle() {
      return {
        background: '#003456'
      }
    },
  },
  mounted() {
    this.cover_logo = false
  },

}
</script>
<style>
.alitec_logo:hover{
  cursor: pointer;
}

</style>
