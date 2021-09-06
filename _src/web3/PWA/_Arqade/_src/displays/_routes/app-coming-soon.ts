import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('dq-display-app-coming-soon')
export class AppAbout extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {
    return html`<div>
  <h3>Coming Soon</h3>
  <p>We&rsquo;re currently working on this page and it will be available shortly</p>
  <slot>[child page loads here (if applicable)]</slot>
</div>
    `;
  }
}
