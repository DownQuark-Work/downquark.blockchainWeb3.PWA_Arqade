import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LayoutTemplateAppShellCSS } from '../../_styles/layout/_templates.js'

import '../../_components/organisms/header.js'
import '../../_components/organisms/footer.js'

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
    return html`<div id="app-shell">
  <dq-orgnsm-header></dq-orgnsm-header>
  <slot>
    <p style="text-align:center">Loading...</p>
  </slot>
  <dq-orgnsm-footer></dq-orgnsm-footer>
</div>`;
  }
}
