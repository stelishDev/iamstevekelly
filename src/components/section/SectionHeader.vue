<template>
  <div id="section-header" ref="section-header" class="section-header">
    <slot />
  </div>
</template>

<style lang="scss">
@import '@/styles/tokens.scss';
 .section-header {
   position: relative;
   display: block;
   margin-bottom: $space-m;
   margin: 0;
 }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class SectionHeader extends Vue {
}
</script>
