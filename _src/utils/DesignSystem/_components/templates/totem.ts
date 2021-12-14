import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import stylez  from '../../_scss/components/molecules/wrapper-grid-totem.module.scss'

@customElement('dq-template-totem')
class DownQuarkTemplateTotem extends LitElement {
  @property({ type: Boolean })
  debug = false;

  static get styles() {
    return [css`${unsafeCSS(stylez.replace(/\*#.source.*\*/g,''))}`]
  }

  render() {
    return html`<div class="wrapper-grid-totem-module">
      <section>outside of slot</section>
      <slot></slot>
      <section>outside of slot</section>
</div>`;
  }
}
DownQuarkTemplateTotem.createProperty('dq')