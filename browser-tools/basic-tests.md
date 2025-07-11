# Browser Tools MCP Server - Basic Tests

## Test 1: Screenshot Capture
**Command**: Take a screenshot of the current page
**Expected**: Screenshot file saved successfully
**Tool**: `mcp__browser-tools__takeScreenshot`

## Test 2: Console Logs
**Command**: Get console logs from the browser
**Expected**: Array of console messages
**Tool**: `mcp__browser-tools__getConsoleLogs`

## Test 3: Console Errors
**Command**: Get console errors from the browser
**Expected**: Array of error messages
**Tool**: `mcp__browser-tools__getConsoleErrors`

## Test 4: Network Logs
**Command**: Get network request logs
**Expected**: Array of network requests
**Tool**: `mcp__browser-tools__getNetworkLogs`

## Test 5: Network Errors
**Command**: Get network error logs
**Expected**: Array of failed network requests
**Tool**: `mcp__browser-tools__getNetworkErrors`

## Test 6: Accessibility Audit
**Command**: Run accessibility audit on current page
**Expected**: Accessibility report with issues and recommendations
**Tool**: `mcp__browser-tools__runAccessibilityAudit`

## Test 7: Performance Audit
**Command**: Run performance audit on current page
**Expected**: Performance metrics and optimization suggestions
**Tool**: `mcp__browser-tools__runPerformanceAudit`

## Test 8: SEO Audit
**Command**: Run SEO audit on current page
**Expected**: SEO analysis with recommendations
**Tool**: `mcp__browser-tools__runSEOAudit`

## Test 9: Best Practices Audit
**Command**: Run best practices audit on current page
**Expected**: Best practices report
**Tool**: `mcp__browser-tools__runBestPracticesAudit`

## Test 10: Clear Logs
**Command**: Clear all browser logs
**Expected**: Logs cleared successfully
**Tool**: `mcp__browser-tools__wipeLogs`

## Test 11: Debug Mode
**Command**: Enable debug mode
**Expected**: Debug mode activated
**Tool**: `mcp__browser-tools__runDebuggerMode`

## Test 12: Audit Mode
**Command**: Run comprehensive audit mode
**Expected**: Complete audit report
**Tool**: `mcp__browser-tools__runAuditMode`

## Running These Tests

1. Open a browser and navigate to test-page.html
2. Use Claude Code to run each test command
3. Verify the expected outcomes
4. Document any issues or unexpected behavior