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
    return html`<div class="wrapper-grid-totem ${this.debug && 'debug'}">
  <section>
    1
  </section>
  <section>
    1x
  </section>
  <section>
    2
  </section>
</div>`;
  }
}
