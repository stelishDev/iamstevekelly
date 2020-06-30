<template>
  <div class="section-body">
    <slot />
  </div>
</template>

<style lang="scss">
 .section-body {
   position: relative;
   display: block;
 }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  }
})
export default class SectionBody extends Vue {
}
</script>
