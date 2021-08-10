//TODO: make this file creation dynamic from `_grid.scss`
import { css } from 'lit-element';

export const LayoutTemplateAppShellCSS = css`
  #app-shell{
    background-color:var(--dq-color-main-lighter);
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    min-height:100vh;
    width:385px;
  }
`

export const LayoutTemplateTotemCSS = css`.wrapper-grid-totem {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr;
}
.wrapper-grid-totem section,
.wrapper-grid-totemaside {
    grid-column: 2 / span 1;
  }
  .wrapper-grid-totem section:nth-child(odd) {
    grid-column: 1 / span 3;
  }

  /* Demo Specific Styles */
  .wrapper-grid-totem.debug {
    margin: 0 auto;
    max-width: 56em;
    padding: 1em 0;
  }

  .wrapper-grid-totem.debug main,
  .wrapper-grid-totem.debug section,
  .wrapper-grid-totem.debug .wrapper-grid-totem.debug aside {
    background: var(--dq-color-main-default);
    color: var(--dq-color-main-lighter);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}`
