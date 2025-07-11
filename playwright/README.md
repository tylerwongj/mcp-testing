# Playwright MCP Server Tests

This directory contains test files for the Playwright MCP server functionality.

## Available Tools

- `mcp__playwright__browser_navigate`: Navigate to URLs
- `mcp__playwright__browser_click`: Click elements on pages
- `mcp__playwright__browser_type`: Type text into inputs
- `mcp__playwright__browser_take_screenshot`: Capture page screenshots
- `mcp__playwright__browser_wait_for`: Wait for conditions
- `mcp__playwright__browser_console_messages`: Get console logs
- `mcp__playwright__browser_snapshot`: Get page accessibility snapshot
- `mcp__playwright__browser_close`: Close browser

## Test Files

1. **mcdonalds-navigation-log.txt**: Complete log of McDonald's website navigation test
2. **mcdonalds-burger-menu.png**: Screenshot of McDonald's burger menu
3. **test-page-screenshot.png**: Screenshot of our test page

## Completed Tests

### McDonald's Website Navigation Test ✅
- **Objective**: Navigate to McDonald's website and access burger menu
- **Actions**: Homepage → Menu dropdown → Burgers section → Screenshot
- **Result**: Successfully demonstrated complex website navigation
- **Files**: `mcdonalds-navigation-log.txt`, `mcdonalds-burger-menu.png`

### Local Test Page Screenshots ✅
- **Objective**: Capture screenshots of our test pages
- **Result**: Successfully captured test page layout
- **Files**: `test-page-screenshot.png`

## How to Test

### Method 1: Using Claude Code (Recommended)
Ask Claude Code to use Playwright functions:
```
"Navigate to google.com using Playwright"
"Take a screenshot of this page"
"Click on the search button"
"Type 'hello world' into the search box"
```

### Method 2: Website Navigation Testing
1. Ask Claude to navigate to any website
2. Request specific interactions (clicking, typing, scrolling)
3. Capture screenshots of results
4. Get console logs if needed

### Method 3: Form and Element Testing
1. Navigate to pages with forms
2. Test filling out forms
3. Test clicking buttons and links
4. Capture page state changes

## Key Differences from Browser-Tools

**Playwright MCP Server**:
- Direct browser automation and control
- Screenshot capture and PDF generation
- Form interactions and element clicking
- Page navigation and content extraction
- Console message capture

**Browser-Tools MCP Server**:
- Web auditing and analysis
- Accessibility testing
- Performance monitoring
- SEO analysis
- Network monitoring

## Test Results Summary

- ✅ Website navigation: SUCCESSFUL
- ✅ Element clicking: SUCCESSFUL  
- ✅ Screenshot capture: SUCCESSFUL
- ✅ Page content extraction: SUCCESSFUL
- ✅ Console log capture: SUCCESSFUL
- ✅ Complex website interactions: SUCCESSFUL

## Next Test Ideas

1. **E-commerce Testing**: Navigate online stores, add items to cart
2. **Form Submission**: Test contact forms, login pages
3. **Search Functionality**: Test search boxes and results
4. **Multi-page Workflows**: Navigate through multi-step processes
5. **Mobile Testing**: Test responsive design elements