<template>
  <div class="logo-carousel">
    <div class="horizontal-layout">
      <DynamicImageIcon
      v-for="(item,index) in items"
      :key="index"
      :label="item.label"
      :alt="item.alt"
      :imgUrl="item.imageSource"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/tokens.scss";
@import "@/styles/layouts.scss";
@import "@/styles/buttons.scss";
.logo-carousel {
  padding: 4rem $space-m;
  display: inline-flex;
  position: relative;
  width: 100%;
  color: $charcoal;
  box-sizing: border-box;
  clear: both;
  overflow-y: hidden;
  overflow-x: scroll;
  background: #eee;

  img {
      height: 48px;
      width: auto;
      margin: 0 1.6667em;
      filter: grayscale(1);
    }

  .logo-img {
    img {
      height: 48px;
      width: auto;
      margin: 0 1.6667em;
      filter: grayscale(1);
    }

    p {
      text-align: center;
    }
  }

  button {
    margin: 0;
    color: $charcoal;
    font-weight: normal;
  }
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
