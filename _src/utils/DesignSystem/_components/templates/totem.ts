import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('dq-template-totem')
class DownQuarkTemplateTotem extends LitElement {
  @property({ type: Boolean })
  debug = false;

  static get styles() {
    return []
  }

  render() {
    return html`<div class="wrapper-grid-totem">
  <slot></slot>
</div>`;
  }
}
DownQuarkTemplateTotem.createProperty('dq')