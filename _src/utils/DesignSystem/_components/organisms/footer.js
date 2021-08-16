import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { OrganismHeaderFooterCSS } from '../../_styles/components/organisms/_base.js'

@customElement('dq-orgnsm-footer')
class DownQuarkOrganismFooter extends LitElement {
  static get styles() {
    return [
      OrganismHeaderFooterCSS,
    ]
  }

  render() {
    return html`<footer>FooterOrganism</footer>`;
  }
}
