import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

type EnumAnchorTarget = "_blank" | "_parent" | "_self" | "_top"

@customElement('dq-atom-anchor-link')
class DownQuarkAtomAnchorLink extends LitElement {
  @property({ type: String })
  href = '#';
  @property({ type: String })
  target:EnumAnchorTarget = '_self';

  static get styles() {
    return css``
  }
  showTarget = this.target === '_blank' || this.target === '_self'
  render() {
    return html`<a href="${this.href}" target="${this.target}">
  <slot></slot>
</a>
`;
  }
}

@customElement('dq-atom-anchor-nav-header-link')
class DownQuarkAtomAnchorNavHeaderLink extends LitElement {
  @property({ type: Boolean })
  selected = false;

  @property({ type: String })
  href = '#';
  @property({ type: String })
  target:EnumAnchorTarget = '_self';
  
  static get styles() {
    return css``
  }
  
  showTarget = this.target || '_self';
  render() {
    return html`<a href="${this.href}" class="${this.selected ? 'selected' : ''}" target="${this.showTarget}">
  <slot></slot>
</a>
`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dq-atom-anchor-link': DownQuarkAtomAnchorLink,
    'dq-atom-anchor-nav-header-link': DownQuarkAtomAnchorNavHeaderLink
  }
}