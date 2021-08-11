import { html } from 'lit'

import '../../../../_components/templates/app-shell'
import '../../../../_components/templates/totem.js'


export const TemplatePageLayoutTotem = (args) => html`<dq-tmplt-app-shell>
  <dq-tmplt-totem>
    <section>abc</section>
    <section>123</section>
    <section class="wide">xyz</section>
    <section class="narrow">098</section>
    <section class="reset">updates n number</section>
    <section>should be wide</section>
  </dq-tmplt-totem>
</dq-tmplt-app-shell>`
