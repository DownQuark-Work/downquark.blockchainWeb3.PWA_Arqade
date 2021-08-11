import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';

// import './app-home';

import { Router } from '@vaadin/router';

// import '../defaultcomponents/header';
// import '../_compiled/orgnsm/header.js'

@customElement('dq-display-app-main')
export class AppIndex extends LitElement {
  static get styles() {
    return css`
      main {
        padding: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

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
      <div>
        <main>
          👷‍♂️
          <div id="routerOutlet"></div>
        </main>
      </div>
    `;
  }
}
