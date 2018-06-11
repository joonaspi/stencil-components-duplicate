import { Component, Prop } from '@stencil/core';
import '@ionic/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return [
      <ion-item>
        <ion-label position='floating'>Some example only once</ion-label>
        <ion-input value="default value" required></ion-input>
      </ion-item>
    ];
  }
}
