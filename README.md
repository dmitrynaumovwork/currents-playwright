# currents-playwright
Wrong line is pointed in the Playwright output stream if the Currents report is imported in playwright-config.

# Original
This is the default Playwright sample that was installed with `npm init playwright@latest`.

# Made changes
- the first test in the `test/example.spec.js` has been changed to always fail
- the `@currents/playwright` reporter has been added in `playwright.config.js`
- the `currentsConfig` definition and the reporter in `defineConfig.reporter` have been commented out (they have no effect on reproducing the problem and can be uncommented)


# Install dependencies
```
npm ci
```

# Test run
```
npx playwright test
```

# Incorrect output stream
To see the wrong line in the output stream that caused the test to fail:
- run the test

# Correct output stream
To see the correct line in the output stream that caused the test to fail:
- comment the line `const { currentsReporter } = require('@currents/playwright');` in `playwright.config.js` 
- run the test
