<template>
  <button class="more-button clear no-border">
    <MoreIcon />
  </button>
</template>

<style lang="scss" scoped>
@import '@/styles/tokens.scss';
.more-button {
  padding: $space-s $space-m;
  display: block;
  position:relative;
  color: $charcoal;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MoreIcon from '@/components/icons/MoreIcon.vue';

@Component({
  components: {
    MoreIcon
  }
})
export default class MenuButton extends Vue {
  private menuOpen:Boolean = false;
}
</script>
