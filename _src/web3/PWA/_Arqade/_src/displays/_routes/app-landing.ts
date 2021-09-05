/* eslint-disable @typescript-eslint/no-explicit-any */
// There is a bug with routes - need to use `any`until resolved
import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators';

import '../../_qomponents/tmplt/default.js'

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('dq-display-app-landing')
export class AppHome extends LitElement {
  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return css``
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  browserChange() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'Chrome',
        text: 'Please try a browser that supports forward thinking web applications',
        url: 'https://google.com',
      });
    }
  }
  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`<dq-tmplt-default>
      <div><section>${'share' in navigator
              ? html`<fast-button appearance="primary" @click="${this.share}"
                  >Share this Starter!</fast-button
                >`
              : html`Don't miss out on the fun!<br/><fast-anchor href="https://www.fast.design/docs/components/getting-started" appearance="hypertext"
              >FAST!</fast-anchor
            >`}</section></div>

    </dq-tmplt-default>`

    return html`
      <div>
        <div id="welcomeBar">
          <fast-card id="welcomeCard">
            <h2>${this.message}</h2>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <fast-anchor
                href="https://github.com/pwa-builder/pwa-starter/blob/master/README.md"
                appearance="hypertext"
                >README</fast-anchor
              >.
            </p>

            <p>
              Welcome to the
              <fast-anchor href="https://pwabuilder.com" appearance="hypertext"
                >PWABuilder</fast-anchor
              >
              pwa-starter! Be sure to head back to
              <fast-anchor href="https://pwabuilder.com" appearance="hypertext"
                >PWABuilder</fast-anchor
              >
              when you are ready to ship this PWA to the Microsoft, Google Play
              and Samsung Galaxy stores!
            </p>

            ${'share' in navigator
              ? html`<fast-button appearance="primary" @click="${this.share}"
                  >Share this Starter!</fast-button
                >`
              : null}
          </fast-card>

          <fast-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <fast-anchor
                  href="https://www.typescriptlang.org/"
                  appearance="hypertext"
                  >TypeScript</fast-anchor
                >
              </li>

              <li>
                <fast-anchor
                  href="https://lit.dev"
                  appearance="hypertext"
                  >lit</fast-anchor
                >
              </li>

              <li>
                <fast-anchor
                  href="https://www.fast.design/docs/components/getting-started"
                  appearance="hypertext"
                  >FAST Components</fast-anchor
                >
              </li>

              <li>
                <fast-anchor
                  href="https://vaadin.github.io/vaadin-router/vaadin-router/demo/#vaadin-router-getting-started-demos"
                  appearance="hypertext"
                  >Vaadin Router</fast-anchor
                >
              </li>
            </ul>
          </fast-card>
        </div>

        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `;
  }
}
