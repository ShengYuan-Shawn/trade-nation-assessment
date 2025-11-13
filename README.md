# Trade Nation Assessment
Automated test suite for Trade Nation's web application using Playwright with TypeScript.

### Overview
This repository contains a comprehensive automated testing framework for the Trade Nation platform. The tests are built using Playwright, a modern cross-browser testing library, combined with TypeScript for type safety and improved maintainability.

---

## Running Test Through GitHub Actions
1. Navigate to https://github.com/ShengYuan-Shawn/trade-nation-assessment/actions/workflows/playwright.yml
2. Select 'Run Workflow'
3. Click on 'Run Workflow'
4. Monitor test runs

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js** (v16 or higher)
- **npm** package manager
- **git**

You can verify your installation by running:

```bash
# Check Node.js version
node --version

# Check npm version
npm --version
```

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/ShengYuan-Shawn/trade-nation-assessment.git
cd trade-nation-assessment
```

2. **Install dependencies:**
```bash
npm install
```

3. **Install Playwright browsers:**
```bash
npx playwright install
```

This will download and install the required browser binaries (Chromium, Firefox, WebKit).

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in UI mode (interactive)
```bash
npx playwright test --ui
```

### Run a specific test file
```bash
npx playwright test tests/market/TradeNationHomePage.spec.ts
```

Or for the login test:
```bash
npx playwright test tests/login/GoogleInvalidLogin.spec.ts
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### View test report
```bash
npx playwright show-report
```

## Project Structure

```
trade-nation-assessment/
├── factory/                      # Locator definitions
│   ├── HomePageLocators.ts       # Home page selectors
│   ├── LoginPageLocators.ts      # Login page selectors
│   └── MarketPageLocators.ts     # Market page selectors
├── fixtures/                     # Test fixtures
│   └── testSetup.ts              # Custom test fixtures setup
├── pages/                        # Page Object Model
│   ├── homePage.ts               # Home page methods
│   ├── loginPage.ts              # Login page methods
│   └── marketPage.ts             # Market page methods
├── tests/                        # Test suites
│   ├── login/                    # Login related tests
│   │   └── GoogleInvalidLogin.spec.ts
│   └── market/                   # Market related tests
│       └── TradeNationHomePage.spec.ts
├── utils/                        # Utility functions
│   └── commonUtils.ts            # Common utilities
├── screenshots/                  # Screenshot storage
├── test-results/                 # Test execution results
├── playwright-report/            # HTML test reports
├── playwright.config.ts          # Playwright configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

## Configuration

### Playwright Configuration (`playwright.config.ts`)

Key settings:
- **Test directory:** `./tests`
- **Parallel execution:** Enabled
- **Browser:** Chromium (default)
- **Viewport:** 1280x800
- **Timeouts:**
  - Action timeout: 15 seconds
  - Navigation timeout: 30 seconds
- **Retry:** 2 retries on CI, 0 on local
- **Reporter:** HTML report
- **Trace:** On first retry

To modify configuration, edit `playwright.config.ts`.

## Reporting

After test execution, Playwright generates an HTML report containing:
- Test execution summary
- Pass/fail status for each test
- Screenshots of failures
- Execution traces (on retry)
- Detailed logs and timings

To view the report:
```bash
npx playwright show-report
```

The report will open in your default browser.
