<template>
  <div class="period-section">
    <h4>{{text}}</h4>
    <p v-html="text" />
  </div>
</template>

<style lang="scss">
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class PeriodSection extends Vue {
  @Prop({default: ''}) title!:string;

  @Prop({default: ''}) text!:string;
}
</script>
