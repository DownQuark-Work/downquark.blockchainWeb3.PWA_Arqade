import { css } from 'lit';

export const AtomAnchorLink = css`
  ::slotted(a:hover){color:black} /*required to trigger the change */
  a {
    color:var(--dq-color-alt-dark);
    font:var(--dq-typography-text-font);
    margin:var(--dq-typography-text-margin);
    background-image:linear-gradient(to top, var(--dq-color-main-lighter) 50% 0, transparent 20%);
    margin:.2em;
    padding:.2em;
    text-decoration:none;
  };
  ::slotted(a:hover){color:black}
  a:hover {
    background-image:linear-gradient(to bottom, var(--dq-color-main-lighter) 100% 0, transparent 20%);
    color:var(--dq-color-main-dark);
    margin:0;
    padding:.4em;
  }
`
export const AtomAnchorHeaderLink = css`
::host(a[selected]){color:black} /*required to trigger the change */
  a {
    border-left:1px solid var(--dq-color-alt-dark);
    border-right:1px solid var(--dq-color-alt-dark);
    color:var(--dq-color-alt-dark);
    line-height:6vh;
    padding:1.5vh;
    font-size:3vh;
    text-decoration:none;
  }
  a:nth-child(1){border-left:none;}

  a:hover{ background:var(--dq-color-main-light)}
  a.selected {
    color:var(--dq-color-common-white);
    background:var(--dq-color-main-dark);
    pointer-events:none
  }
`
