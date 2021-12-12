import { html } from 'lit'

import '../../../_components/atoms/anchor.ts'

export const AtomAnchorComponent = () => html`<dq-atom-anchor-link>Coming Up</dq-atom-anchor-link>`

export const AtomAnchorHeaderNavComponent = () => html`
<div style="min-height:5vh;background:var(--dq-color-common-white);border:1px solid var(--dq-color-common-black)">
  <dq-atom-anchor-nav-header-link>Go Here</dq-atom-anchor-nav-header-link>
  <dq-atom-anchor-nav-header-link selected href='hee' target='_blank'>Selected</dq-atom-anchor-nav-header-link>
</div>`
