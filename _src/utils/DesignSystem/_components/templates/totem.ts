import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import stylez  from '../../_scss/components/molecules/tester.module.scss'
// import ztyle from '../../_scss/components/molecules/tester.scss'
// import ztyle from '../../_scss/components/molecules/tester.scss'
// const css = require("../../_scss/components/molecules/tester.scss").toString();
const css = require("../../_scss/components/molecules/tester.module.scss").toString();

console.log(css); // {String}

console.log('stylez', stylez)
// console.log('ztyle', ztyle)

@customElement('dq-template-totem')
class DownQuarkTemplateTotem extends LitElement {
  @property({ type: Boolean })
  debug = false;

  static get styles() {
    return []
  }

  render() {
    return html`<div class="wrapper-grid-totem">
  <slot></slot>
</div>`;
  }
}
DownQuarkTemplateTotem.createProperty('dq')