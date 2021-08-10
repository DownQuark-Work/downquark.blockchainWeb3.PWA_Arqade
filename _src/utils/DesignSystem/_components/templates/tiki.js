import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { LayoutTemplateTikiCSS } from '../../_styles/layout/_grid.js'

@customElement('dq-tmplt-tiki')
class DownQuarkTemplateTiki extends LitElement {

  static get styles() {
    return [
      LayoutTemplateTikiCSS,
    ]
  }

  render() {
    return html`<div class="wrapper-grid-tiki debug">
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
