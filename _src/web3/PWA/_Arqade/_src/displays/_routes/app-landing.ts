import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators';

import '../../_qomponents/templates/default'

@customElement('dq-display-app-landing')
export class AppHome extends LitElement {
  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return css``
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }
  render() {
    return html`<dq-template-default>
  <div>
    <section>${this.message}!</section>
  </div>

</dq-template-default>`
  }
}
