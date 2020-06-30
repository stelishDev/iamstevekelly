<template>
  <div class="home">
    <!-- header -->
    <SBKHeader/>

    <div class="horizontal-layout">
      <div class="hero-img half-width"></div>

      <div class="half-width salutation-container">
        <!-- hero -->

          <h1 class="salutation-title">
            Sup<span class="charcoal-text">.</span>
            <br>I'm Steve<span class="charcoal-text">,</span>
            <br>a web developer<span class="charcoal-text">.</span>
          </h1>

        <button class="clear alt no-border profile-btn">View my profile ></button>
      </div>
    </div>

    <!-- section -->
    <div ref="container"/>
  </div>
</template>

<style lang="scss">
@import '@/styles/layouts.scss';

.home {
  background: #eee;
}

.hero-img {
  background: url("../assets/hero/fabian-grohs-XMFZqrGyV-Q-unsplash.jpg")
    no-repeat center center;
  background-size: cover;
  height: fit-content;
  min-height: 540px;
}

.salutation-container {
  background-color: $deep-orange;
}

.salutation-title {
  color: #fff;
}

.charcoal-text {
  color: $charcoal;
}

.profile-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 0;
  padding-right: 2px;
}

.text-highlight {
  background-color: aqua;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Container from '@/components/Container.vue';
import SBKHeader from '@/components/layout/SBKHeader.vue';
import LogoCarousel from '@/components/layout/LogoCarousel.vue';
import { skillsList } from '@/data/skills';
import SectionRenderFactory from '@/services/section-render-factory';

@Component({
  components: {
    Container,
    SBKHeader,
    LogoCarousel
  }
})
export default class Home extends Vue {
  private skills = skillsList;

  private sectionRenderFactory: SectionRenderFactory = new SectionRenderFactory();

  // @ts-ignore
  private docData = require('@/data/home_page.json');

  mounted() {
    this.mountCardToDom(this.docData);
  }

  /**
   * Updated dom with card components
   */
  private mountCardToDom(doc: any): void {
    // @ts-ignore
    if (this.$refs.container) {
      // @ts-ignore
      this.$refs.container.innerHTML = '';
      this.sectionRenderFactory.mountInstances(this.$refs, doc);
    }
  }
}
</script>
