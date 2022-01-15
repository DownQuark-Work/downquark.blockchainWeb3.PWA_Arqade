import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { scss } from '../_utils/scss'
import styles from '../_scss/components/templates/wrapper-grid-totem.module.scss'

@customElement('dq-template-totem')
class DownQuarkTemplateTotem extends LitElement {
  @property({ type: Boolean })
  debug = false;

  static get styles() {
    return [scss(styles)]
  }

  render() {
    return html`<div class="wrapper-grid-totem">
      <section>outside of slot</section>
      <slot></slot>
      <section>outside of slot</section>
</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dq-template-totem': DownQuarkTemplateTotem
  }
}