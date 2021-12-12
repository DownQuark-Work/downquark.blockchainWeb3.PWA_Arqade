import { html } from 'lit'

import '../../../../_components/templates/app-shell'
import '../../../../_components/templates/totem.ts'


export const TemplatePageLayoutTotem = () => html`<dq-tmplt-app-shell>
  <dq-tmplt-totem>
    <section>abc</section>
    <section>
      <h1>123</h1>
    </section>
    <section class="wide">xyz</section>
    <section class="narrow">098</section>
    <section class="reset"></section>
    <section>should be wide</section>
    <section>abc</section>
    <section>
      <h2>123</h2>
    </section>
    <section class="wide">xyz</section>
    <section class="narrow">098</section>
    <section class="reset"></section>
    <section>should be wide</section>
    <section>abc</section>
    <section>
      <h3>123</h3>
    </section>
    <section class="wide">xyz</section>
    <section class="narrow">098</section>
    <section class="reset"></section>
    <section>should be wide</section>
  </dq-tmplt-totem>
</dq-tmplt-app-shell>`
