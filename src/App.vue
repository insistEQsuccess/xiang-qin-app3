<template>
  <!-- <router-view/> -->
  <router-view v-slot="{ Component }">
	  <keep-alive :includ="cache">
	    <component :is="Component"/>
	  </keep-alive>
	</router-view>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const cache = computed(() => store.state.cacheArr)
    return {
      cache
    }
  },
})
</script>


<style lang="scss">
#app {
  height: 100%;
  max-width: 7500px;
  margin: 0 auto;
}
</style>
