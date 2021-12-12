import { html } from 'lit'


import '../../../../_components/templates/default.ts'


export const TemplatePageLayoutDefault = () => html`<dq-tmplt-app-shell>
  <dq-tmplt-default>
    <section>
      Full (slot)(grid)
    </section>
    <section style="grid-column:3/span 6">
      Half Override (slot)(grid)
    </section>
    <section style="grid-column:1/span 10">
      Half x (slot)(grid)
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
    <div>
      <section>
        half (slot)(flex) 1
      </section>
      <section>
        half (slot)(flex) 2
      </section>
      <section>
        half (slot)(flex) 1
      </section>
      <section>
        half (slot)(flex) 2
      </section>
    </div>

    <div>
      <section>
        half (slot)(flex) 1
      </section>
      <section>
        half (slot)(flex) 2
      </section>
      <section>
        half (slot)(flex) 1
      </section>
    </div>
  </dq-tmplt-default>
</dq-tmplt-app-shell>`
