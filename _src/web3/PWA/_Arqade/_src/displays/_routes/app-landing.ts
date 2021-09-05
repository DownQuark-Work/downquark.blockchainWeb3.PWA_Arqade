// import {
//   // allComponents,
//   fastAnchor,
//   fastButton,
//   provideFASTDesignSystem
// } from "@microsoft/fast-components";

// provideFASTDesignSystem().register(fastAnchor());
// provideFASTDesignSystem().register(fastButton());

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
  }
}
