import { html } from 'lit'

import '../../../../_components/templates/app-shell'
import '../../../../_components/templates/totem.js'


export const TemplatePageLayoutTotem = (args) => html`<dq-tmplt-app-shell>
  <dq-tmplt-totem ?debug="${args.debug}">Coming soon...</dq-tmplt-totem>
</dq-tmplt-app-shell>`
