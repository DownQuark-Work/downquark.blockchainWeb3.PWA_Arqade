import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';

import { router } from '../app'

@customElement('dq-display-app-about')
export class AppAbout extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    console.log('router.location', router.location);
  }

  render() {
    return html`<div>
  <h1>About Page</h1>
  .${router.location.params.dapp}.
  About Children Below
  <slot></slot>
  About Children Above
</div>
    `;
  }
}
