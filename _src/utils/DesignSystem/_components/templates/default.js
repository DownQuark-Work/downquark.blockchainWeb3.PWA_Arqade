import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LayoutTemplateDefaultCSS } from '../../_styles/layout/_templates.js'

@customElement('dq-tmplt-default')
class DownQuarkTemplateDefault extends LitElement {
  @property({ type: Boolean })
  debug = false;

  static get styles() {
    return [
      LayoutTemplateDefaultCSS,
    ]
  }

  render() {
    return html`<div class="wrapper-grid-default">
  <slot></slot>
</div>`;
  }
}
