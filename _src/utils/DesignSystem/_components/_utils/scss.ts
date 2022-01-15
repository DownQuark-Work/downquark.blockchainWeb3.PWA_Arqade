/* eslint-disable @typescript-eslint/no-var-requires */

import { css, unsafeCSS } from 'lit'

export const scss = (stylemod:unknown) => {
  console.log('stylemod', stylemod)
  let styles
  if(typeof stylemod === 'string'){
    styles = stylemod.replace(/\*#.source.*\*/g,'').replace(/\/\//g,'') // remove sourceMap text
  }
  else {
    styles = '*{border:1px solid red!important}'
  }
  console.log('{unsafeCSS(styles)', css`${unsafeCSS(styles)}`)
  return css`${unsafeCSS(styles)}`
  // return css`${unsafeCSS(styles)}`

}