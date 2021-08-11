import { html } from 'lit-html';
import "../_styles/downquark.scss";

export const globalTypes = {
  quark: {
    name: 'Quarks',
    description: 'View Components as they Appear in Different Quarks',
    defaultValue: 'hub',
    toolbar: {
      icon: 'eye',
      items: [
        { value: 'hub', left: '🏠', title: 'Hub' },
        { value: 'fatredbird', left: '🐦', title: 'Fat Red Bird' },
      ],
      showName: false,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [(story, _static) => html`<style>
:root {
  --dq-accent-primary: var(--dq-quark-${_static.globals.quark}-accent-primary);
  --dq-accent-secondary: var(--dq-quark-${_static.globals.quark}-accent-secondary);
  --dq-accent-tertiary: var(--dq-quark-${_static.globals.quark}-accent-tertiary);
  --dq-color-main-darker: var(--dq-quark-${_static.globals.quark}-color-main-darker);
  --dq-color-main-dark: var(--dq-quark-${_static.globals.quark}-color-main-dark);
  --dq-color-main-default: var(--dq-quark-${_static.globals.quark}-color-main-default);
  --dq-color-main-light: var(--dq-quark-${_static.globals.quark}-color-main-light);
  --dq-color-main-lighter: var(--dq-quark-${_static.globals.quark}-color-main-lighter);
  --dq-color-main-complement: var(--dq-quark-${_static.globals.quark}-color-main-complement);
  --dq-color-alt-darker: var(--dq-quark-${_static.globals.quark}-color-alt-darker);
  --dq-color-alt-dark: var(--dq-quark-${_static.globals.quark}-color-alt-dark);
  --dq-color-alt-default: var(--dq-quark-${_static.globals.quark}-color-alt-default);
  --dq-color-alt-light: var(--dq-quark-${_static.globals.quark}-color-alt-light);
  --dq-color-alt-lighter: var(--dq-quark-${_static.globals.quark}-color-alt-lighter);
  --dq-color-alt-complement: var(--dq-quark-${_static.globals.quark}-color-alt-complement);
  --dq-typography-h1-font: var(--dq-quark-${_static.globals.quark}-typography-h1-font);
  --dq-typography-h1-margin: var(--dq-quark-${_static.globals.quark}-typography-h1-margin);
  --dq-typography-h2-font: var(--dq-quark-${_static.globals.quark}-typography-h2-font);
  --dq-typography-h2-margin: var(--dq-quark-${_static.globals.quark}-typography-h2-margin);
  --dq-typography-h3-font: var(--dq-quark-${_static.globals.quark}-typography-h3-font);
  --dq-typography-h3-margin: var(--dq-quark-${_static.globals.quark}-typography-h3-margin);
  --dq-typography-h4-font: var(--dq-quark-${_static.globals.quark}-typography-h4-font);
  --dq-typography-h4-margin: var(--dq-quark-${_static.globals.quark}-typography-h4-margin);
  --dq-typography-h5-font: var(--dq-quark-${_static.globals.quark}-typography-h5-font);
  --dq-typography-h5-margin: var(--dq-quark-${_static.globals.quark}-typography-h5-margin);
  --dq-typography-text-font: var(--dq-quark-${_static.globals.quark}-typography-text-font);
  --dq-typography-text-margin: var(--dq-quark-${_static.globals.quark}-typography-text-margin);
}
  </style>
  ${story()}`]
