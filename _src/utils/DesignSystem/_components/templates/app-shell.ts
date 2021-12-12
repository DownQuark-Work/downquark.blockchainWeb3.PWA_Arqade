import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '../organisms/header.ts'
import '../organisms/footer.ts'

import '../../_scss/components/molecules/test.scss'
// https://github.com/webpack-contrib/css-loader

@customElement('dq-template-app-shell')
class DownQuarkTemplateAppShell extends LitElement {
  @property({ type: Boolean })
  debug = false;

  static get styles() {
    return []
  }

  render() {
    return html`<div id="app-shell" class="debug">
  <dq-organism-header></dq-organism-header>
  <div>asd</div>
  <p>world</p>
  <slot>
    <p style="text-align:center">Loading...</p>
  </slot>
  <dq-organism-footer></dq-organism-footer>
</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dq-template-app-shell': DownQuarkTemplateAppShell
  }
}