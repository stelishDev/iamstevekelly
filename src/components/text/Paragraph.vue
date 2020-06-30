<template>
  <p
  class="paragraph"
  v-html="text" />
</template>

<style lang="scss">
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Paragraph extends Vue {
  @Prop({default: ''}) text!:string;
}
</script>
