import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { scss } from '../../utils/scss'

@customElement('dq-template-totem')
class DownQuarkTemplateTotem extends LitElement {
  @property({ type: Boolean })
  debug = false;

  static get styles() {
    return [css`${scss('template','wrapper-grid-totem-module')}`]
  }

  render() {
    return html`<div class="wrapper-grid-totem">
      <section>outside of slot</section>
      <slot></slot>
      <section>outside of slot</section>
</div>`;
  }
}
DownQuarkTemplateTotem.createProperty('dq')