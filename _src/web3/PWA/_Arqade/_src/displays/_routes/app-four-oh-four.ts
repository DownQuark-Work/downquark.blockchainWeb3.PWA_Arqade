import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('dq-display-app-four-oh-four')
export class AppAbout extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {
    return html`<div>
  <h1>Missing Page</h1>
  <h2>${window.location.href}</h2>
  <p>You&rsquo;re currently looking for a page that does not exist.</p>
  <p>Do you want ot return <a href="/">home</a>?</p>
</div>
    `;
  }
}
