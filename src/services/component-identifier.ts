// import components
import Vue, { Component } from 'vue';
import * as components from '@/services/dynamic-component-list';

export default class ComponentIdentifier {
  private componentList:any[] = this.getList();

  private getList() {
    const arr:Array<{name:string, component:any}> = [];
    Object.keys(components).forEach((componentName) => {
      const comp = {
        name: componentName.toLowerCase(),
        component: components[componentName]
      };
      arr.push(comp);
    });
    return arr;
  }

  public indentifyAndReturnComponentFromJson(json:any): any {
    if (!this.componentList || !this.componentList.length) {
      return null;
    }
    const matched = this.componentList.filter(comp => comp.name === json.name.toLowerCase());
    const component = matched.length ? matched[0].component : null;
    const ComponentClass:any = Vue.extend(component);
    const instance = new ComponentClass({
      propsData: json.props
    });
    instance.$mount();

    return instance._vnode;
  }
}
