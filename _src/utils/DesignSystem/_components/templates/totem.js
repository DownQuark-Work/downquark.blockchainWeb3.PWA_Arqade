import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LayoutTemplateTotemCSS } from '../../_styles/layout/_templates.js'

@customElement('dq-tmplt-totem')
class DownQuarkTemplateTotem extends LitElement {
  @property({ type: Boolean })
  debug = false;

  static get styles() {
    return [
      LayoutTemplateTotemCSS,
    ]
  }

  render() {
    return html`<div class="wrapper-grid-totem">
  <slot></slot>
</div>`;
  }
}
