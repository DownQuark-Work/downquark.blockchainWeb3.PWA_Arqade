/* eslint-disable @typescript-eslint/no-var-requires */
import { unsafeCSS } from 'lit'

export const scss = (componentType:string, className:string) => {
  const classNameArr = className.split('-'),
    scssModule = classNameArr.pop(), // sanity  check
    fileName = classNameArr.join('-')
  let styles = require(`../_scss/components/${componentType}s/${fileName}.${scssModule}.scss`);
  styles = styles.replace(/\*#.source.*\*/g,'').replace(/\/\//g,'') // remove sourceMap text
  console.log('styles', styles)
  return unsafeCSS(styles)
}
