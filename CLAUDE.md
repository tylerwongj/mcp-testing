# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

This is a comprehensive testing environment for MCP (Model Context Protocol) servers. It contains test examples, documentation, and validation tools for various MCP servers available in Claude Code.

## Working MCP Servers

The following MCP servers are fully functional and tested:

### 1. Playwright MCP Server
- **Purpose**: Browser automation and testing
- **Key Tools**: 
  - `mcp__playwright__browser_navigate` - Navigate to URLs
  - `mcp__playwright__browser_click` - Click elements
  - `mcp__playwright__browser_type` - Type text
  - `mcp__playwright__browser_take_screenshot` - Capture screenshots
  - `mcp__playwright__browser_wait_for` - Wait for conditions
- **Usage**: Complex website navigation, form interactions, screenshot capture

### 2. Memory MCP Server
- **Purpose**: Knowledge graph and persistent memory storage
- **Key Tools**:
  - `mcp__memory__create_entities` - Create knowledge entities
  - `mcp__memory__create_relations` - Link entities with relationships
  - `mcp__memory__search_nodes` - Search knowledge graph
  - `mcp__memory__read_graph` - Read entire graph
- **Usage**: Store information across conversations, maintain context between sessions

### 3. Context7 MCP Server
- **Purpose**: Up-to-date library documentation retrieval
- **Key Tools**:
  - `mcp__context7__resolve-library-id` - Find library IDs
  - `mcp__context7__get-library-docs` - Get current documentation
- **Usage**: Always use for external library documentation to prevent hallucination
- **Workflow**: resolve-library-id → get-library-docs with topic

### 4. Browser Tools MCP Server
- **Purpose**: Web auditing and analysis
- **Key Tools**:
  - `mcp__browser-tools__takeScreenshot` - Capture screenshots
  - `mcp__browser-tools__runAccessibilityAudit` - Test accessibility
  - `mcp__browser-tools__runPerformanceAudit` - Performance analysis
  - `mcp__browser-tools__runSEOAudit` - SEO optimization checks
  - `mcp__browser-tools__getConsoleLogs` - Browser console output
- **Usage**: Website quality analysis, performance testing, debugging

### 5. Sequential MCP Server
- **Purpose**: Advanced multi-step thinking and analysis
- **Key Tools**:
  - `mcp__sequential__sequentialthinking` - Complex problem analysis
- **Usage**: Architecture decisions, complex debugging, multi-step analysis

## Project Structure

```
mcp-testing/
├── browser-tools/          # Browser auditing and analysis tests
├── context7/              # Library documentation tests
├── memory/                # Knowledge graph tests  
├── playwright/            # Browser automation tests
├── _untested-mcp-servers/ # Non-functional servers (archived)
├── mcp-examples.md        # Complete MCP usage examples
└── README.md             # Project overview
```

## Key Architecture Points

- Each MCP server has its own directory with dedicated test files
- Test runners are provided as JavaScript files for automated testing
- HTML test pages are included for browser-based testing
- Test results are logged in dedicated directories with timestamps
- Failed/legacy servers are archived in `_untested-mcp-servers/`

## Testing Strategy

1. **Manual Testing**: Use Claude Code commands to test individual MCP functions
2. **Automated Testing**: Run JavaScript test runners for systematic validation
3. **Browser Testing**: Load HTML test pages and use browser-based MCP tools
4. **Result Logging**: All test results are saved with timestamps for tracking

## Common Testing Commands

```bash
# No build/test scripts - this is a testing environment
# Use Claude Code directly to test MCP functions

# Example testing approach:
# 1. Load test HTML files in browser
# 2. Use Claude Code to execute MCP functions
# 3. Verify results against expected outcomes
```

## Important Notes

- Always use Context7 MCP for external library documentation
- Playwright and Browser Tools serve different purposes (automation vs analysis)
- Memory MCP maintains state across conversations
- Test results include timestamps and are preserved for analysis
- All MCP servers are pre-configured and ready for testing

## Failed/Legacy Servers

The following servers are non-functional and archived:
- tavily (missing API key)
- zen (Python setup issues)
- filesystem (configuration issues)
- notion (missing API key)

These have been moved to `_untested-mcp-servers/` and removed from active configuration.