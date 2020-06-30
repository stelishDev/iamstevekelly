<template>
  <div class="logo" :class="{'dull-logo':dull}"></div>
</template>

<style lang="scss">
.logo {
  background: url("data:image/png;base64,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");
  background-repeat: no-repeat;
  height: 65px;
  width: fit-content;
  position: relative;
  display: block;
}
.dull-logo {
  -moz-filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.6666 0.6666 0.6666 0 0 0.6666 0.6666 0.6666 0 0 0.6666 0.6666 0.6666 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
  -o-filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.6666 0.6666 0.6666 0 0 0.6666 0.6666 0.6666 0 0 0.6666 0.6666 0.6666 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
  -webkit-filter: grayscale(100%);
  filter: gray;
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.6666 0.6666 0.6666 0 0 0.6666 0.6666 0.6666 0 0 0.6666 0.6666 0.6666 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
}
</style>

<script lang="ts">
export default {
  name: 'AngularLogo',
  props: {
    dull: Boolean
  }
};
</script>
