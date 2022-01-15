/* eslint-disable @typescript-eslint/no-var-requires */

import { css, unsafeCSS } from 'lit'

export const scss = (stylemod:string) => {
  // console.log('stylemod', stylemod)
  const styles = stylemod.replace(/\*#.source.*\*/g,'').replace(/\/\//g,'') // remove sourceMap text
  return css`${unsafeCSS(styles)}`
}