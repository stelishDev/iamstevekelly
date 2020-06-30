<template>
    <span class="icon" v-bind:class="{'small':small, 'alt':alt}">
      <svg width="100%" height="100%" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path fill="currentColor" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2
        2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0
        6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    </span>
</template>

<style lang="scss">
@import '@/styles/icons.scss';
</style>

<script lang="ts">
export default {
  name: 'MoreIcon',
  props: {
    small:Boolean,
    alt:Boolean
  }

};
</script>
