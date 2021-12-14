/* eslint-disable @typescript-eslint/no-var-requires */
import { unsafeCSS } from 'lit'

export const scss = (componentType:string, className:string) => {
  let styles = require(`../_scss/components/${componentType}s/${className}.module.scss`);
  styles = styles.replace(/\*#.source.*\*/g,'').replace(/\/\//g,'') // remove sourceMap text
  // console.log('styles', styles)
  return unsafeCSS(styles)
}
