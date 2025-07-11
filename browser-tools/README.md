# Browser Tools MCP Server Tests

This directory contains comprehensive test files for the browser-tools MCP server functionality.

## Available Tools

- `mcp__browser-tools__takeScreenshot`: Capture page screenshots
- `mcp__browser-tools__runAccessibilityAudit`: Test accessibility compliance
- `mcp__browser-tools__runPerformanceAudit`: Performance analysis
- `mcp__browser-tools__runSEOAudit`: SEO optimization checks
- `mcp__browser-tools__runBestPracticesAudit`: General best practices
- `mcp__browser-tools__getConsoleLogs`: Browser console output
- `mcp__browser-tools__getConsoleErrors`: Console error messages
- `mcp__browser-tools__getNetworkLogs`: Network request logs
- `mcp__browser-tools__getNetworkErrors`: Network error logs
- `mcp__browser-tools__wipeLogs`: Clear browser logs
- `mcp__browser-tools__runDebuggerMode`: Debug mode activation
- `mcp__browser-tools__runAuditMode`: Comprehensive audit mode

## Test Files

1. **basic-tests.md**: Simple function tests with expected outcomes
2. **test-page.html**: Interactive test page with various elements
3. **accessibility-test.html**: Page with accessibility issues for testing
4. **performance-test.html**: Page with performance issues for testing
5. **test-runner.js**: Automated test runner with logging

## How to Test

### Method 1: Using Claude Code (Recommended)
1. Open any test HTML file in a browser
2. Use Claude Code to run MCP functions against the page
3. Compare results with expected outcomes in basic-tests.md

**Example Commands:**
```
"Take a screenshot of this page"
"Run an accessibility audit on this page"
"Get the console logs from this page"
"Run a performance audit on this page"
```

### Method 2: Direct Function Testing
Open test-page.html and use the interactive buttons to:
- Generate console logs/errors
- Make network requests
- Trigger performance issues
- Test form functionality

Then use Claude Code to analyze the results.

### Method 3: Test Runner
1. Load test-runner.js in the browser console
2. Run `runBrowserToolsTests()` for automated testing
3. View results and logs in the console

## Test Scenarios

### Basic Functionality Tests
- Screenshot capture on different pages
- Console log retrieval after generating logs
- Network monitoring during requests
- Error detection and reporting

### Accessibility Testing
- Run audit on accessibility-test.html
- Check for missing alt text, poor contrast, etc.
- Validate proper heading structure

### Performance Testing  
- Run audit on performance-test.html
- Test heavy DOM manipulation
- Monitor memory usage and FPS

### SEO Testing
- Check meta tags and titles
- Analyze heading structure
- Validate link structure

## Expected Results

Each test in basic-tests.md includes:
- **Command**: What to ask Claude Code
- **Expected**: What should happen
- **Tool**: Which MCP function is used

## Test Coverage

- ✅ Screenshot capture
- ✅ Accessibility auditing
- ✅ Performance analysis
- ✅ SEO auditing
- ✅ Console log retrieval
- ✅ Network monitoring
- ✅ Error handling
- ✅ Log management