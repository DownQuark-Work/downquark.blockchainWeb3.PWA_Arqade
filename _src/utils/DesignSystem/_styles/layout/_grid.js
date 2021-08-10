//TODO: make this file creation dynamic from `_grid.scss`
import { css } from 'lit-element';

export const LayoutTemplateTikiCSS = css`.wrapper-grid-tiki {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1em;
}
.wrapper-grid-tiki section,
.wrapper-grid-tikiaside {
    grid-column: 2 / span 1;
  }
  .wrapper-grid-tiki section:nth-child(odd),
  .wrapper-grid-tiki header,
  .wrapper-grid-tiki footer {
    grid-column: 1 / span 3;
  }

  /* Demo Specific Styles */
  .wrapper-grid-tiki.debug {
    margin: 0 auto;
    max-width: 56em;
    padding: 1em 0;
  }

  .wrapper-grid-tiki.debug header,
  .wrapper-grid-tiki.debug main,
  .wrapper-grid-tiki.debug section,
  .wrapper-grid-tiki.debug .wrapper-grid-tiki.debug aside,
  .wrapper-grid-tiki.debug footer {
    background: var(--dq-color-main-default);
    color: var(--dq-color-main-lighter);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}`
