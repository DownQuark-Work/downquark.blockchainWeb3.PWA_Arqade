import { css } from 'lit-element';

export const LayoutTemplateAppShellCSS = css`
  #app-shell{
    background-color:var(--dq-color-main-lighter);
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin:0 auto;
    min-height:100vh;
    width:385px;
  }
`

export const LayoutTemplateDefaultCSS = css`
:host{
  min-height:80vh;
}
.wrapper-grid-default{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
.wrapper-grid-default > div,
.wrapper-grid-default > section{
  grid-column:1/span 12
}
.wrapper-grid-default > div {
  display:flex;
  justify-content: space-around;
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
:host{
  min-height:80vh;
}

.wrapper-grid-totem {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr;
  margin: 0 auto;
  padding: 1em 0;
}
.wrapper-grid-totem section{
    align-items: center;
    background: var(--dq-color-main-default);
    color: var(--dq-color-main-lighter);
    display: flex;
    grid-column: 2 / span 1;
    justify-content: center;
  }
  .wrapper-grid-totem section:nth-child(even),
  .wrapper-grid-totem section.wide {
    grid-column: 1 / span 3;
  }
  .wrapper-grid-totem section.narrow {
    grid-column: 2 / span 1;
  }
  .wrapper-grid-totem section.reset {
    /* empty div to allow even/odd behavior to work after custom override */
    height:0;
    overflow:hidden;
  }
}`
