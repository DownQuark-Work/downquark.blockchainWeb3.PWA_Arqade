import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { scss } from '../_utils/scss'
import styles from '../_scss/components/templates/app-shell.module.scss'

import '../organisms/header.ts'
import '../organisms/footer.ts'

@customElement('dq-template-app-shell')
class DownQuarkTemplateAppShell extends LitElement {
  @property({ type: Boolean })
  debug = false;

  static get styles() {
    return [scss(styles)]
    
  }

  render() {
    return html`<div id="app-shell" class="app-shell">
  <dq-organism-header></dq-organism-header>
  <div>asd</div>
  <p>world</p>
  <slot>
    <p style="text-align:center">Loading...</p>
  </slot>
  <dq-organism-footer></dq-organism-footer>
  <section>SECTION</section>
</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dq-template-app-shell': DownQuarkTemplateAppShell
  }
}