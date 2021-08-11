import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { OrganismsFooterCSS } from '../../_styles/components/organisms/_footer.js'

@customElement('dq-orgnsm-footer')
class DownQuarkOrganismFooter extends LitElement {
  static get styles() {
    return [
      OrganismsFooterCSS,
    ]
  }

  render() {
    return html`<footer>FooterOrganism</footer>`;
  }
}
