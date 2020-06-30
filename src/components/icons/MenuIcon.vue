<template>
  <span class="icon" v-bind:class="{'small':small, 'alt':alt}">
    <svg width="100%" height="100%" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  </span>
</template>

<style lang="scss">
@import '@/styles/icons.scss';
</style>

<script lang="ts">
export default {
  name: 'MenuIcon',
  props: {
    small: Boolean,
    alt: Boolean
  }
};
</script>
