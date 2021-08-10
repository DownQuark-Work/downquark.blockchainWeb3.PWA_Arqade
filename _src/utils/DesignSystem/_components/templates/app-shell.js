import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LayoutTemplateAppShellCSS } from '../../_styles/layout/_templates.js'

@customElement('dq-tmplt-app-shell')
class DownQuarkTemplateAppShell extends LitElement {
  @property({ type: Boolean })
  debug = false;

  static get styles() {
    return [
      LayoutTemplateAppShellCSS,
    ]
  }

  render() {
    return html`<div id="app-shell" class="${this.debug && 'debug'}">
  <header>Header</header>
  <slot></slot>
  <footer>Footer</footer>
</div>`;
  }
}
