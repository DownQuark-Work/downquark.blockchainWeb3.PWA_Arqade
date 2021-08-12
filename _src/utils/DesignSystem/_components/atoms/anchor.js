import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { AtomAnchorLink, AtomAnchorHeaderLink } from '../../_styles/components/atoms/_anchors.js'

@customElement('dq-atm-anchor-link')
class DownQuarkAtomAnchorLink extends LitElement {
  @property({ type: String })
  href = '#';
  @property({ type: String })
  target = '_self';

  static get styles() {
    return css`
    ${AtomAnchorLink}
    `
  }
  showTarget = this.target === '_blank' || this.target === '_self'
  render() {
    return html`<a href="${this.href}" ${this.showTarget ? `target="${this.target}" ` : "" }>
  <slot></slot>
</a>
`;
  }
}

@customElement('dq-atm-anchor-nav-header-link')
class DownQuarkAtomAnchorNavHeaderLink extends LitElement {
  @property({ type: Boolean })
  selected;

  @property({ type: String })
  href = '#';
  @property({ type: String })
  target = '_self';

  static get styles() {
    return css`
    ${AtomAnchorHeaderLink}
    `
  }
  showTarget = this.target === '_blank' || this.target === '_self';
  render() {
    return html`<a href="${this.href}" class="${this.selected ? 'selected' : ''}" ${this.showTarget ? `target="${this.target}" ` : "" }>
  <slot></slot>
</a>
`;
  }
}
