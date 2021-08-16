import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { OrganismHeaderFooterCSS } from '../../_styles/components/organisms/_base.js';

@customElement('dq-orgnsm-header')
class DownQuarkOrganismHeader extends LitElement {
  static get styles() {
    return [
      OrganismHeaderFooterCSS,
    ]
  }

  render() {
    return html`<header>
  <nav aria-label="Main Navigation">
    <ul class="main-nav">
      <li><a href="about">about</a></li>
      <li><a href="">~ 𝚚rx ~</a></li>
      <li><a href="">xChange</a></li>
      <li class="push"><a href="login">Login</a></li>
    </ul>
  </nav>
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">Category</a></li>
      <li><a href="">Sub-Category</a></li>
      <li><span aria-current="page">Product</span></li>
    </ul>
  </nav>
</header>`;
  }
}
