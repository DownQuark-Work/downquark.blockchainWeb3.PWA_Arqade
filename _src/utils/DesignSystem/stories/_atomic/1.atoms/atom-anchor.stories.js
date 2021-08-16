import { html } from 'lit'

import '../../../_components/atoms/anchor.js'

export const AtomAnchorComponent = (args) => html`<dq-atm-anchor-link>Coming Up</dq-atm-anchor-link>`

export const AtomAnchorHeaderNavComponent = (args) => html`
<div style="min-height:5vh;background:var(--dq-color-common-white);border:1px solid var(--dq-color-common-black)">
  <dq-atm-anchor-nav-header-link>Go Here</dq-atm-anchor-nav-header-link>
  <dq-atm-anchor-nav-header-link selected href='hee' target='_blank'>Selected</dq-atm-anchor-nav-header-link>
</div>`
