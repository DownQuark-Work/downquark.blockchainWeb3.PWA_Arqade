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
  <slot>x</slot>
  <section>
    <h1 style="font:var(--dq-typography-h1-font);margin:var(--dq-typography-h1-margin)">1</h1>
  </section>
  <section>
    1x
  </section>
  <section>
    2
  </section>
  <section>
    2x
  </section>
  <section class="wide">
    3wide
  </section>
  <section class="narrow">
    3narrow
  </section>
  <section class="reset">
    resets even/odd behavior
  </section>
  <section>
    4 (wide again after reset)
  </section>
</div>`;
  }
}
