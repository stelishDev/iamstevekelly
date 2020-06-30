<template>
  <button class="menu-button clear no-border">
    <MenuIcon />
  </button>
</template>

<style lang="scss" scoped>
@import '@/styles/tokens.scss';
.menu-button {
  padding: $space-s $space-m;
  display: block;
  position:relative;
  color: $charcoal;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import MenuOpenIcon from '@/components/icons/MenuOpenIcon.vue';


@Component({
  components: {
    MenuIcon,
    MenuOpenIcon
  }
})
export default class MenuButton extends Vue {
  private menuOpen:Boolean = false;
}
</script>
