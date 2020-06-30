<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/tokens.scss";
.container {
  padding: $space-m;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  clear: both;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import DynamicImageIcon from '@/components/icons/DynamicImageIcon.vue';
@Component({
  components: {
    DynamicImageIcon
  }
})
export default class LogoCarousel extends Vue {
  @Prop() items!:any[];
}
</script>
