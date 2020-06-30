import Vue, { Component } from 'vue';
import SectionHeader from '@/components/section/SectionHeader.vue';
import SectionBody from '@/components/section/SectionBody.vue';
import SectionFooter from '@/components/section/SectionFooter.vue';
import Section from '@/components/section/Section.vue';

import ComponentIdentifier from '@/services/component-identifier';

/**
 *
 */
export default class SectionRenderFactory {
  private componentIdentifier:ComponentIdentifier = new ComponentIdentifier();

  private createInstance(klass:any, props:any[] = []): any {
    const ComponentClass:any = Vue.extend(klass);
    const instance = new ComponentClass({
      propsData: {
        ...props
      }
    });
    return instance;
  }

  private extractComponentsFromJson(json:any):any {
    const components:any[] = [];
    if (json.components.length) {
      json.components.forEach((element) => {
        const component = this.componentIdentifier.indentifyAndReturnComponentFromJson(element);
        components.push(component);
      });
    }
    return components;
  }

  /**
   * Constructs the sections of the HOE Sections (header, body, footer)
   * @param CompClass
   * @param json
   * @returns VNode
   */
  private constructAndReturnSection(CompClass:any, json:any): any {
    const extended:any = Vue.extend(CompClass);
    const instance = this.createInstance(extended);
    const instanceItems = this.extractComponentsFromJson(json);

    // slots require VNode objects
    instance.$slots.default = instanceItems;
    instance.$mount();
    return instance._vnode;
  }

  // append to Section
  public mountInstances(refs:any, json:any): void {
    const header = this.constructAndReturnSection(SectionHeader, json.content.header);
    const body = this.constructAndReturnSection(SectionBody, json.content.body);
    const footer = this.constructAndReturnSection(SectionFooter, json.content.footer);

    const SectionClass:any = Vue.extend(Section);
    const instance = this.createInstance(SectionClass);

    instance.$slots.header = [header];
    instance.$slots.body = [body];
    instance.$slots.footer = [footer];

    instance.$mount();
    refs.container.appendChild(instance.$el);
  }
}
