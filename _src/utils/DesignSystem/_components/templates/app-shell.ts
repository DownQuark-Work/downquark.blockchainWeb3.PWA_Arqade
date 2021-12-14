import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { scss } from '../../utils/scss'

import '../organisms/header.ts'
import '../organisms/footer.ts'

@customElement('dq-template-app-shell')
class DownQuarkTemplateAppShell extends LitElement {
  @property({ type: Boolean })
  debug = false;

  static get styles() {
    return [css`${scss('template','app-shell-module')}`]
    
  }

  render() {
    return html`<div id="app-shell" class="app-shell-module">
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