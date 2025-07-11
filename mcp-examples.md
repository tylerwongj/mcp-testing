# MCP Server Examples

This document demonstrates the 4 working MCP servers available in Claude Code:

## 1. Playwright MCP Server
Browser automation and testing capabilities.

### Example Usage:
```javascript
// Navigate to a website
await page.goto('https://example.com');

// Take a screenshot
await page.screenshot({ path: 'example.png' });

// Click elements
await page.click('button[type="submit"]');

// Type text
await page.type('input[name="username"]', 'testuser');

// Wait for elements
await page.waitForSelector('.result');
```

### Available Tools:
- `mcp__playwright__browser_navigate`: Navigate to URLs
- `mcp__playwright__browser_click`: Click elements
- `mcp__playwright__browser_type`: Type text
- `mcp__playwright__browser_take_screenshot`: Capture screenshots
- `mcp__playwright__browser_wait_for`: Wait for conditions

## 2. Memory MCP Server
Knowledge graph and memory management.

### Example Usage:
```javascript
// Create entities
await createEntities([
  {
    name: "Project X",
    entityType: "project",
    observations: ["Started in 2024", "Uses React and Node.js"]
  }
]);

// Create relations
await createRelations([
  {
    from: "Tyler",
    to: "Project X",
    relationType: "develops"
  }
]);

// Search memory
await searchNodes("React projects");
```

### Available Tools:
- `mcp__memory__create_entities`: Create knowledge entities
- `mcp__memory__create_relations`: Link entities
- `mcp__memory__search_nodes`: Search knowledge graph
- `mcp__memory__read_graph`: Read entire graph

## 3. Context7 MCP Server
Documentation and library information.

### Example Usage:
```javascript
// Resolve library ID
const libraryId = await resolveLibraryId("react");

// Get documentation
const docs = await getLibraryDocs({
  context7CompatibleLibraryID: "/facebook/react",
  topic: "hooks",
  tokens: 5000
});
```

### Available Tools:
- `mcp__context7__resolve-library-id`: Find library IDs
- `mcp__context7__get-library-docs`: Get documentation

## 4. Browser Tools MCP Server
Web browser testing and debugging.

### Example Usage:
```javascript
// Take screenshot
await takeScreenshot();

// Run accessibility audit
await runAccessibilityAudit();

// Get console logs
await getConsoleLogs();

// Run performance audit
await runPerformanceAudit();
```

### Available Tools:
- `mcp__browser-tools__takeScreenshot`: Capture page screenshots
- `mcp__browser-tools__runAccessibilityAudit`: Test accessibility
- `mcp__browser-tools__runPerformanceAudit`: Performance testing
- `mcp__browser-tools__getConsoleLogs`: Get browser console logs

## 5. Sequential MCP Server
Advanced thinking and problem-solving.

### Example Usage:
```javascript
// Complex analysis
await sequentialThinking({
  thought: "Analyzing the performance bottleneck in the application",
  thoughtNumber: 1,
  totalThoughts: 5,
  nextThoughtNeeded: true
});
```

### Available Tools:
- `mcp__sequential__sequentialthinking`: Multi-step analysis

## Testing the MCP Servers

To test these servers, you can use them directly through Claude Code:

1. **Playwright**: "Take a screenshot of google.com"
2. **Memory**: "Remember that I'm working on a React project"
3. **Context7**: "Show me React hooks documentation"
4. **Browser Tools**: "Run an accessibility audit on the current page"
5. **Sequential**: "Think through how to optimize database queries"

## Status Summary

✅ **Working MCP Servers:**
- playwright: Browser automation
- memory: Knowledge graph
- context7: Documentation
- browser-tools: Web testing
- sequential: Advanced thinking

🗂️ **Legacy/Failed Servers (moved to ~/.npm/_npx/legacy-mcp-servers/):**
- tavily: Missing API key
- zen: Python setup issues
- filesystem: Config issues  
- notion: Missing API key

All failed servers have been removed from the Claude configuration to eliminate connection errors.