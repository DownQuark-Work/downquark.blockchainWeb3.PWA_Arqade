import { html } from 'lit'

import '../../../../_components/templates/default.js'

export const TemplatePageLayoutDefault = (args) => html`<dq-tmplt-app-shell>
  <dq-tmplt-default>
    <section>
      Full (slot)(grid)
    </section>
    <section style="grid-column:3/span 6">
      Half Override (slot)(grid)
    </section>
    <div>
      <section>full (slot)(flex)</section>
    </div>
    <div half>
      <section>
        half (slot)(flex) 1
      </section>
      <section>
        half (slot)(flex) 2
      </section>
    </div>
  </dq-tmplt-default>
</dq-tmplt-app-shell>`


/* <div style="grid-column:1/span 12">
<section>full (slot)</section>
</div>*/
