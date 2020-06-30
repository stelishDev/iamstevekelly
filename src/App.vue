<template>
  <div id="app main-content">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/styles/layouts.scss';
@import '@/styles/typography.scss';
@import '@/styles/tokens.scss';
@import '@/styles/buttons.scss';

#app {
  color: $charcoal;
  margin-top: 60px;
  contain: content;
}
</style>
