# Context7 MCP Server Testing

## Purpose
Tests the Context7 MCP server for retrieving up-to-date documentation from libraries and frameworks.

## Available Tools
- `mcp__context7__resolve-library-id` - Resolves package names to Context7-compatible library IDs
- `mcp__context7__get-library-docs` - Fetches documentation for specific libraries

## Test Files
1. `context7-test-runner.js` - JavaScript test runner
2. `library-test-queries.json` - Sample library queries
3. `context7-manual-test.md` - Manual testing procedures
4. `context7-test-results.txt` - Test results log

## Testing Approach
Test resolving library IDs and fetching documentation for popular libraries like React, Vue, Express, etc.

```bash
node context7-test-runner.js
```

## Key Features
- Prevents Claude from hallucinating outdated API information
- Provides single source of truth for current library documentation
- Supports progressive loading and topic-specific documentation
- Handles version-specific documentation retrieval

## Documentation Workflow
1. Use `resolve-library-id` to find correct library identifier
2. Use `get-library-docs` with the resolved ID to fetch documentation
3. Optionally specify topics to focus on specific areas
4. Documentation returns up-to-date API information and examples