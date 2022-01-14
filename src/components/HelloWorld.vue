<template>
  <div class="hello">
    <h1 @click="toast"> test{{ msg }}</h1>
      
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
  toast() {
    Toast('提示内容');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
