import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '../organisms/header.ts'
import '../organisms/footer.ts'

import scssModule from '../../_scss/components/molecules/app-shell.module.scss'
console.log('scssModule', scssModule)
// https://github.com/webpack-contrib/css-loader

@customElement('dq-template-app-shell')
class DownQuarkTemplateAppShell extends LitElement {
  @property({ type: Boolean })
  debug = false;

  static get styles() {
    return [css`${unsafeCSS(scssModule.replace(/\*#.source.*\*/g,''))}`]
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