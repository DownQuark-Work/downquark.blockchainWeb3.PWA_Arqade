import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('dq-organism-footer')
class DownQuarkOrganismFooter extends LitElement {
  static get styles() {
    return []
  }

  render() {
    return html`<footer>FooterOrganism</footer>`;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'dq-organism-footer': DownQuarkOrganismFooter
  }
}