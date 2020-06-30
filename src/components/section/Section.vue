<template>
  <div class="scrollbar">
    <slot name="header" />

    <slot name="body" />

    <slot name="footer" />
  </div>
</template>

<style lang="scss">
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Section extends Vue {}
</script>
