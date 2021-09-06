import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('dq-display-app-about')
export class AppAbout extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {
    return html`<div>
  <h1>About Page</h1>
</div>
    `;
  }
}
