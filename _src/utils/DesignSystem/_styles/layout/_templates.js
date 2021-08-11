import { css } from 'lit';

export const LayoutTemplateAppShellCSS = css`
  #app-shell{
    background-color:var(--dq-color-main-lighter);
    display:grid;
    grid-template-rows: auto 1fr auto;
    margin:0 auto;
    min-height:100vh;
    width:385px;
  }
`

export const LayoutTemplateDefaultCSS = css`
.wrapper-grid-default{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

::slotted(*) {
  background: var(--dq-color-main-default);
  color: var(--dq-color-main-lighter);
}

::slotted(div) {
  display:flex;
  grid-column:1/span 12;
  justify-content: space-around;
}
::slotted(section){
  grid-column:1/span 12;
}
`

export const LayoutTemplateTotemCSS = css`
.wrapper-grid-totem {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
}
::slotted(section){
    align-items: center;
    background: var(--dq-color-main-default);
    color: var(--dq-color-main-lighter);
    display: flex;
    grid-column: 2 / span 1;
    padding:0 .5rem;
  }
  ::slotted(section.wide),
  ::slotted(section:nth-child(even)){
    grid-column: 1 / span 3;
  }

  ::slotted(section.narrow) {
    grid-column: 2 / span 1;
  }

  ::slotted(section.reset) {
    /* empty div to allow even/odd behavior to work after custom override */
    height:0;
    overflow:hidden;
    padding:0;
  }
}`
