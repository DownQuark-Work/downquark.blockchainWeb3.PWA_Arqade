import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { OrganismsHeaderCSS } from '../../_styles/components/organisms/_header.js';

@customElement('dq-orgnsm-header')
class DownQuarkOrganismHeader extends LitElement {
  static get styles() {
    return [
      OrganismsHeaderCSS,
    ]
  }

  render() {
    return html`<header>HeaderOrganism</header>`;
  }
}
