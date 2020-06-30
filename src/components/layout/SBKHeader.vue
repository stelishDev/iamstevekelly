<template>
  <div class="sbk-header horizontal-layout">
    <!-- left -->
    <div class="horizontal-layout position-left">
      <MenuButton />
      <p>STEVEKELLY</p>
    </div>
    <!-- right -->
    <div class="horizontal-layout position-right">
      <button class="clear no-border">wiki</button>
      <button class="clear no-border">about</button>
      <button class="clear no-border">projects</button>
      <MoreButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/tokens.scss';
@import '@/styles/layouts.scss';
@import '@/styles/buttons.scss';
.sbk-header {
  padding: $space-s $space-m;
  display: block;
  position: sticky;
  width: 100%;
  color: $charcoal;
  box-sizing: border-box;
  min-height: 75px;
  clear: both;
  z-index: $header-index;
  scroll-snap-type: y mandatory;
  top: 0;
  align-items: flex-start;
  background-color: #fff;

  button {
    margin: 0;
    color: $charcoal;
    font-weight: normal;
  }
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MenuButton from '@/components/buttons/MenuButton.vue';
import MoreButton from '@/components/buttons/MoreButton.vue';

@Component({
  components: {
    MenuButton,
    MoreButton
  }
})
export default class SBKHeader extends Vue {
  private menuOpen:Boolean = false;
}
</script>
