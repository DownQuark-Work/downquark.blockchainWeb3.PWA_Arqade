/* eslint-disable */
// The base value to use for rem units
module.exports.basePxFontSize = 16

// A plain object where we map the CSS property name to the proper category and type.
// these will be defined when a new object is created in the `_defs/components.json` file
module.exports.propertiesToCTI = {

  // Category: COLOR
  'background-color': { category: 'color', type: 'background' },
  'border-color': { category: 'color', type: 'border' },
  'text-color': { category: 'color', type: 'font' },
  color: { category: 'color', type: 'font' },

  // Category: CONTENT
  icon: { category: 'content', type: 'icon' },

  // Category: FONT
  'text-align': { category: 'font', type: 'justify' },

  // Category: SIZE
  'border-radius': { category: 'size', type: 'border', item: 'width' },
  'border-width': { category: 'size', type: 'border', item: 'width' },
  'font-size': { category: 'size', type: 'font' },
  'line-height': { category: 'size', type: 'line-height' },
  'max-height': { category: 'size', type: 'dimension' },
  'max-width': { category: 'size', type: 'dimension' },
  'min-height': { category: 'size', type: 'dimension' },
  'min-width': { category: 'size', type: 'dimension' },
  'padding-horziontal': { category: 'size', type: 'dimension', item: 'padding' },
  'padding-vertical': { category: 'size', type: 'dimension', item: 'padding' },
  height: { category: 'size', type: 'dimension' },
  padding: { category: 'size', type: 'dimension', item: 'padding' },
  size: { category: 'size', type: 'icon' },
  width: { category: 'size', type: 'dimension' }
}
