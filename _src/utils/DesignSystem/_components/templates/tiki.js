import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LayoutTemplateTikiCSS } from '../../_styles/layout/_grid.js'

@customElement('dq-tmplt-tiki')
class DownQuarkTemplateTiki extends LitElement {

  static get styles() {
    return [
      LayoutTemplateTikiCSS,
    ]
  }

  @property({ type: Boolean })
  debug = false;

  render() {
    console.log('debug', this.debug);
    return html`<div class="wrapper-grid-tiki ${this.debug && 'debug'}">
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
