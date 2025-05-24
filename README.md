# BookStack Playwright Automation Testing

This repository contains automated tests for the BookStack application using Playwright test framework.

## Prerequisites

- Node.js (version 14 or higher)
- NPM (Node Package Manager)
- Visual Studio Code (recommended)

## Project Setup

1. Clone this repository:
```bash
git https://github.com/irmanramadhan94/bookstack_playwright.git
cd bookstack_playwright
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
bookstack_playwright/
├── tests/                    # Test files directory
│   ├── platform.spec.js     # Platform feature tests
│   ├── support.spec.js      # Support feature tests
│   ├── search.spec.js       # Search functionality tests
│   ├── github.spec.js       # GitHub related tests
│   └── community.spec.js    # Community page tests
├── playwright.config.js      # Playwright configuration
└── package.json             # Project dependencies
```

## Running Tests

### Run all tests:
```bash
npx playwright test
```

### Run specific test file:
```bash
npx playwright test tests/platform.spec.js
```

### Run tests in headed mode (with browser visible):
```bash
npx playwright test --headed
```

### Run tests with debug mode:
```bash
npx playwright test --debug
```

## Test Features

The automation suite covers the following features:
- Platform navigation and content verification
- Support services and documentation access
- Search functionality
- GitHub project integration
- Community page navigation

## Report Generation

After running tests, HTML reports are automatically generated. To view the report:
```bash
npx playwright show-report
```

## VS Code Integration

1. Install Playwright Test for VS Code extension
2. Use the Testing sidebar to run/debug tests
3. Right-click on test files to run individual tests

## Troubleshooting

If you encounter any issues:
1. Ensure all dependencies are installed
2. Check if the BookStack application is accessible
3. Verify your network connection
4. Try running tests in debug mode for detailed logs
