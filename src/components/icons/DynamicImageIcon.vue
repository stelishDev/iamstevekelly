<template>
  <div class="dynamic-image-icon">
    <img :src="imgUrl" :alt="alt"/>
    <p>{{label}}</p>
  </div>
</template>

<style lang="scss">
@import '@/styles/icons.scss';
.dynamic-image-icon {
  &:hover {
    img {
      filter: none !important;
    }
  }
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
</style>

<script lang="ts">
export default {
  name: 'DynamicImageIcon',
  props: {
    imgUrl:String,
    label:String,
    alt:String
  }

};
</script>
