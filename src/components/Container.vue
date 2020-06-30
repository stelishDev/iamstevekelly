<template>
  <div class="container" :class="{'container-multi-bg':multiBG}">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/tokens.scss';
.container {
  padding: $space-s $space-m;
  display: block;
  position:relative;
  width: 100%;
  scroll-snap-type: y mandatory;
  &.proximity {
    scroll-snap-type: y proximity;
  }
}

.container-multi-bg {
  background: linear-gradient(70deg,
  #{$charcoal}  30%, rgba(0,0,0,0) 30%),
  linear-gradient(30deg, #{$stone} 60%, #{$red} 60%);
}


</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Container extends Vue {
  @Prop() multiBG!: boolean;
  
  @Prop() bgColour!: string;
}
</script>
