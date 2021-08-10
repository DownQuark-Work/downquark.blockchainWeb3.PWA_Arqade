import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LayoutTemplateTotemCSS } from '../../_styles/layout/_grid.js'

@customElement('dq-tmplt-totem')
class DownQuarkTemplateTotem extends LitElement {

  static get styles() {
    return [
      LayoutTemplateTotemCSS,
    ]
  }

  @property({ type: Boolean })
  debug = false;

  render() {
    return html`<div class="wrapper-grid-totem ${this.debug && 'debug'}">
  <header>
    Header
  </header>
  <section>
    1
  </section>
  <section>
    1x
  </section>
  <section>
    2
  </section>
  <footer>
    Footer
  </footer>
</div>`;
  }
}
