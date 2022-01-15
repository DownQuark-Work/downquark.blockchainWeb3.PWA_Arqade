import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('dq-template-default')
class DownQuarkTemplateDefault extends LitElement {
  @property({ type: Boolean })
  debug = false;

  static get styles() {
    return []
  }

  render() {
    return html`<div class="wrapper-grid-default">
  <slot></slot>
</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dq-template-default': DownQuarkTemplateDefault
  }
}