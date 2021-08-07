import "../_styles/downquark.globals.scss";

// export const globalTypes = {
//   theme: {
//     name: 'Quarks',
//     description: 'View Components as they Appear in Different Quarks',
//     defaultValue: 'Hub',
//     toolbar: {
//       icon: 'circlehollow',
//       // Array of plain string values or MenuItem shape (see below)
//       items: ['App Shell', 'Hub'],
//       // Property that specifies if the name of the item will be displayed
//       showName: true,
//     },
//   },
// };

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
