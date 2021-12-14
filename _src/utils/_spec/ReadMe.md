# Structure
All test files will be contained within this directory then symlinked and run from their respective project directories

## Playwright
> our main e2e testing suite
> https://playwright.dev/
> Add to `package.json` with: `yad @playwright/test`
> [CONFIG](https://playwright.dev/docs/intro/#creating-a-configuration-file)
- `$ npx playwright codegen wikipedia.org` <<-- Record Scriptw for e2e tests via GUI
- `$ npx playwright open --device="iPhone 11" wikipedia.org`
- `$ npx playwright open --viewport-size=800,600 --color-scheme=dark twitter.com`
- `$ npx playwright open --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com`
> - Emulate timezone, language & location
> - Once page opens, click the "my location" button to see geolocation in action

### [CI](https://playwright.dev/docs/ci)
> \[TBD - but an option]
_via [github actions](https://github.com/microsoft/playwright/blob/master/.github/workflows/tests_secondary.yml)_
\[which then runs [this](https://github.com/microsoft/playwright/blob/master/utils/build/build-playwright-driver.sh)]
```
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-node@v2
    with:
      node-version: '14'
  - name: Install operating system dependencies
    run: npx playwright install-deps
  - name: Run your tests
    run: npm test
```

### Testing
- _reference_
  - https://playwright.dev/docs/verification
  - https://playwright.dev/docs/test-advanced/#test-suite-options
  - https://playwright.dev/docs/selectors
_**Annotations**_
- https://playwright.dev/docs/test-annotations#tag-tests
- https://playwright.dev/docs/test-annotations#conditionally-skip-a-group-of-tests
- https://playwright.dev/docs/test-annotations#use-fixme-in-beforeeach-hook
_**Assertions**_
  https://playwright.dev/docs/assertions
- https://playwright.dev/docs/test-assertions
- https://playwright.dev/docs/test-parallel#reusing-single-page-between-tests
- https://playwright.dev/docs/test-advanced#add-custom-matchers-using-expectextend <-- create custom assertions
_**Fixtures**_
> You no longer need to wrap tests in describes that set up environment, everything is declarative and typed.
- https://playwright.dev/docs/test-fixtures
_**Reporting**_
- https://playwright.dev/docs/test-reporters#custom-reporters
- https://playwright.dev/docs/test-advanced
  - search for "save contents."
_**Test Server**_
- https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
- https://playwright.dev/docs/test-advanced#projects

### [Library](https://playwright.dev/docs/library)
> Allows for scrtiptable automation
```
const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();
```
