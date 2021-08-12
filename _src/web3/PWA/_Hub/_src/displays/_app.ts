import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators';

// import './app-home';
import '../../no_modules/_styles/downquark.scss'
import '../../no_modules/_styles/svg.scss'
import '../_qomponents/tmplt/app-shell.js'

import { Router } from '@vaadin/router';

// import '../defaultcomponents/header';
// import '../_compiled/orgnsm/header.js'

@customElement('dq-display-app-main')
export class AppIndex extends LitElement {
  @property({ type: String })
  // qrk = 'fatredbird';
  qrk = 'hub';

  rootCSSVars = html`<style>
    :host {
          --dq-accent-primary: var(--dq-quark-${this.qrk}-accent-primary);
          --dq-accent-secondary: var(--dq-quark-${this.qrk}-accent-secondary);
          --dq-accent-tertiary: var(--dq-quark-${this.qrk}-accent-tertiary);
          --dq-color-main-darker: var(--dq-quark-${this.qrk}-color-main-darker);
          --dq-color-main-dark: var(--dq-quark-${this.qrk}-color-main-dark);
          --dq-color-main-default: var(--dq-quark-${this.qrk}-color-main-default);
          --dq-color-main-light: var(--dq-quark-${this.qrk}-color-main-light);
          --dq-color-main-lighter: var(--dq-quark-${this.qrk}-color-main-lighter);
          --dq-color-main-complement: var(--dq-quark-${this.qrk}-color-main-complement);
          --dq-color-alt-darker: var(--dq-quark-${this.qrk}-color-alt-darker);
          --dq-color-alt-dark: var(--dq-quark-${this.qrk}-color-alt-dark);
          --dq-color-alt-default: var(--dq-quark-${this.qrk}-color-alt-default);
          --dq-color-alt-light: var(--dq-quark-${this.qrk}-color-alt-light);
          --dq-color-alt-lighter: var(--dq-quark-${this.qrk}-color-alt-lighter);
          --dq-color-alt-complement: var(--dq-quark-${this.qrk}-color-alt-complement);
          --dq-typography-h1-font: var(--dq-quark-${this.qrk}-typography-h1-font);
          --dq-typography-h1-margin: var(--dq-quark-${this.qrk}-typography-h1-margin);
          --dq-typography-h2-font: var(--dq-quark-${this.qrk}-typography-h2-font);
          --dq-typography-h2-margin: var(--dq-quark-${this.qrk}-typography-h2-margin);
          --dq-typography-h3-font: var(--dq-quark-${this.qrk}-typography-h3-font);
          --dq-typography-h3-margin: var(--dq-quark-${this.qrk}-typography-h3-margin);
          --dq-typography-h4-font: var(--dq-quark-${this.qrk}-typography-h4-font);
          --dq-typography-h4-margin: var(--dq-quark-${this.qrk}-typography-h4-margin);
          --dq-typography-h5-font: var(--dq-quark-${this.qrk}-typography-h5-font);
          --dq-typography-h5-margin: var(--dq-quark-${this.qrk}-typography-h5-margin);
          --dq-typography-text-font: var(--dq-quark-${this.qrk}-typography-text-font);
          --dq-typography-text-margin: var(--dq-quark-${this.qrk}-typography-text-margin);
        }
  </style>`

  static get styles() {
    return css`
      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `;
  }

  constructor() {
    super();

  }

  firstUpdated() {
    const router = new Router(this.shadowRoot?.querySelector('#routerOutlet'));
    router.setRoutes([
      // temporarily cast to any because of a Type bug with the router
      {
        path: '',
        animate: true,
        children: [
          { path: '/', component: 'app-home' },
          {
            path: '/about',
            component: 'app-about',
            action: async () => {
              console.log('a')
              // await import('./app-about');
            },
          },
        ],
      } as any,
    ]);
  }

  render() {
    return html`
      ${this.rootCSSVars}
      <main>
        <dq-tmplt-app-shell>
          <div id="routerOutlet"></div>
        </dq-tmplt-app-shell>
      </main>
    `;
  }
}
