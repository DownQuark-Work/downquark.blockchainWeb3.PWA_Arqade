import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LayoutTemplateDefaultCSS } from '../../_styles/layout/_templates.js'

@customElement('dq-tmplt-default')
class DownQuarkTemplateDefault extends LitElement {
  @property({ type: Boolean })
  debug = false;

  static get styles() {
    return [
      LayoutTemplateDefaultCSS,
    ]
  }

  render() {
    return html`<div class="wrapper-grid-default">
  <slot></slot>
  <section>
    Full (grid)
  </section>

  <div>
    <section>full (flex)</section>
  </div>

  <div half>
    <section>
      half 1
    </section>
    <section>
      half 2
    </section>
  </div>

  <div third>
    <section>3rd 1</section>
    <section>3rd 2</section>
    <section>3rd 3</section>
  </div>

  <div qtr>
    <section>quartered 1</section>
    <section>quartered 2</section>
    <section>quartered 3</section>
    <section>quartered 4</section>
  </div>
</div>`;
  }
}
