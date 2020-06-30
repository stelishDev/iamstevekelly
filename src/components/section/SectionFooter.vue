<template>
  <div class="section-footer">
    <slot />
  </div>
</template>

<style lang="scss">
@import '@/styles/tokens.scss';
.section-footer {
  position: fixed;
  padding: $space-s $space-xs $space-s 3.2em;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
  contain: content;
  box-sizing: border-box;

}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class SectionFooter extends Vue {}
</script>
