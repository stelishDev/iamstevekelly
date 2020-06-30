<template>
  <p
  class="title"
  v-html="text" />
</template>

<style lang="scss">
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Title extends Vue {
  @Prop({default: ''}) text!:string;
}
</script>
