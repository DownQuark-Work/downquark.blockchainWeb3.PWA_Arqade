/* eslint-disable */
const StyleDictionary = require('style-dictionary')
const { basePxFontSize, propertiesToCTI } = require('./token-config-props')

// A transform object that defines a transformer method, which will override the default
const CTITransform = {
  transformer: (prop) => {
    // Only do this custom functionality in the 'component' top-level namespace.
    if (prop.path[0] === 'component') {
      // When defining component tokens, the key of the token is the relevant CSS property
      // The key of the token is the last element in the path array
      return propertiesToCTI[prop.path[prop.path.length - 1]]
    }
    // Fallback to the original 'attribute/cti' transformer
    /*
    {
      "category": "color",
      "type": "background",
      "item": "button",
      "subitem": "primary",
      "state": "active"
    }
    */
    return StyleDictionary.transform['attribute/cti'].transformer(prop)
  }
}

function throwSizeError (name, value, unitType) {
  // eslint-disable-next-line no-throw-literal
  throw `Invalid Number: '${name}: ${value}' is not a valid number, cannot transform to '${unitType}' \n`
}

// convert px to rem
StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  matcher: function (prop) {
    return prop.attributes.type !== 'breakpoint' && prop.attributes.category === 'size'
  },
  transformer: function (prop) {
    const val = parseFloat(prop.value)
    if (isNaN(val)) throwSizeError(prop.name, prop.value, 'rem')
    return `${val / basePxFontSize}rem`
  }
})

// custom filters that separate variables into multiple files by type

// colors-constant
StyleDictionary.registerFilter({
  name: 'isColorToken',
  matcher: function (prop) {
    return prop.attributes.category === 'color'
  }
})

StyleDictionary.registerFilter({
  name: 'isContentToken',
  matcher: function (prop) {
    return prop.attributes.category === 'content'
  }
})

StyleDictionary.registerFilter({
  name: 'isFontToken',
  matcher: function (prop) {
    return prop.attributes.category === 'font'
  }
})

// dimensions-constant
StyleDictionary.registerFilter({
  name: 'isDimensionConstant',
  matcher: function (prop) {
    return prop.attributes.category === 'size'
  }
})

// transition-constant
StyleDictionary.registerFilter({
  name: 'isTransitionConstant',
  matcher: function (prop) {
    return prop.attributes.type === 'transition-constant'
  }
})

// typography-constant
StyleDictionary.registerFilter({
  name: 'isTypographyConstant',
  matcher: function (prop) {
    return prop.attributes.category === 'typography'
  }
})

// component vars
// these should not be exported into a file
StyleDictionary.registerFilter({
  name: 'isComponentVar',
  matcher: function (prop) {
    return prop.path[0] === 'component'
  }
})

module.exports = {
  transform: {
    // Override the attribute/cti transform
    'attribute/cti': CTITransform
  },
  source: ['utils/token/_defs/**/*.json'],
  platforms: {
    // attribute/cti removes the standard cti naming convention
    // pulls from all json files within tokens
    // filters by custom filters defined above to sort into files and folders
    scss: {
      basePxFontSize,
      transformGroup: 'scss',
      transforms: ['attribute/cti', 'color/css', 'name/cti/camel', 'size/pxToRem'],
      buildPath: '_scss/abstracts/variables/',
      prefix: 'pmd',
      files: [
        {
          destination: '_colors.scss',
          format: 'scss/variables',
          filter: 'isColorToken',
          options: {
            outputReferences: true
          }
        },
        {
          destination: '_content.scss',
          format: 'scss/variables',
          filter: 'isContentToken'
        },
        {
          destination: '_dimensions.scss',
          format: 'scss/variables',
          filter: 'isDimensionConstant',
          options: {
            outputReferences: true
          }
        },
        {
          destination: '_fonts.scss',
          format: 'scss/variables',
          filter: 'isFontToken',
          options: {
            outputReferences: true
          }
        },
        {
          destination: '_typography.scss',
          format: 'scss/variables',
          filter: 'isTypographyConstant'
        }
      ]
    },
    css: {
      basePxFontSize,
      transformGroup: 'css',
      transforms: ['attribute/cti', 'color/css', 'name/cti/kebab', 'size/pxToRem'],
      buildPath: '_scss/base/tokens/',
      prefix: 'pmd',
      files: [
        {
          destination: '_colors.css',
          format: 'css/variables',
          filter: 'isColorToken',
          options: {
            outputReferences: true
          }
        },
        {
          destination: '_content.css',
          format: 'css/variables',
          filter: 'isContentToken'
        },
        {
          destination: '_dimensions.css',
          format: 'css/variables',
          filter: 'isDimensionConstant',
          options: {
            outputReferences: true
          }
        },
        {
          destination: '_fonts.css',
          format: 'css/variables',
          filter: 'isFontToken',
          options: {
            outputReferences: true
          }
        },
        {
          destination: '_typography.css',
          format: 'css/variables',
          filter: 'isTypographyConstant'
        }
      ]
    }
  }
}
