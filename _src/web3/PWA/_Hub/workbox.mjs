import pkg from 'workbox-build';
const { injectManifest } = pkg;

injectManifest({
  globDirectory: '_build_deploy',
  globPatterns: [
    '**/*.{html,js,css,png,webp,jpg}',
  ],
  swSrc: '_build_deploy/pwabuilder-sw.js',
  swDest: '_build_deploy/pwabuilder-sw.js',
});
