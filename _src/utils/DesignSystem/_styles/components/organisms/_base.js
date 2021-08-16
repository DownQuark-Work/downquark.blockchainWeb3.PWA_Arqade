import { css } from 'lit';

import { CommonStyles } from '../../base/_base.js'

export const OrganismHeaderFooterCSS = css`
  ${CommonStyles}
  footer,
  header {
    background-color:var(--dq-color-common-white);
    color:var(--dq-color-common-black);
    min-height:5vh;
  }
  header li {list-style:none;}
  header .main-nav {
    display: flex;
    margin:0;
    padding:0;
  }
  header .main-nav li { font-size:5vh; margin: 0 .15em; }
  header .main-nav .push { margin-left: auto; }

  header .breadcrumb { background-color:var(--dq-color-main-light)}
  header .breadcrumb ul { display: flex; }
header .breadcrumb li::before { content: "→"; }
header .breadcrumb li:first-child::before { content: ""; }
`
