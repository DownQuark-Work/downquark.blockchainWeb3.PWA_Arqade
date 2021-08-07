# Base

The `base/` folder holds what we might call the boilerplate code for the project. In there, you might find some typographic rules, and probably a stylesheet (that I’m used to calling `_base.scss`), defining some standard styles for commonly used HTML elements.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Base folder](http://sass-guidelin.es/#base-folder)


https://gridlover.net/try
- scale factor:1.75
```
html, .root {
  font-size: 16px;
  line-height: 24px;
}
body, .article {
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  max-width: 560px;
  margin: auto;
}
h1, .h1 {
  font-size: 5.375rem;
  line-height: 6rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
}
h2, .h2 {
  font-size: 3.0625rem;
  line-height: 4.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
h3, .h3 {
  font-size: 1.75rem;
  line-height: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
h4, .h4 {
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
h5, .h5 {
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
p, ul, ol, pre, table, blockquote {
  margin-top: 0rem;
  margin-bottom: 1.5rem;
}
ul ul, ol ol, ul ol, ol ul {
  margin-top: 0rem;
  margin-bottom: 0rem;
}

/* Let's make sure all's aligned */
hr, .hr {
  border: 1px solid;
  margin: -1px 0;
}
a, b, i, strong, em, small, code {
  line-height: 0;
}
sub, sup {
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
```
