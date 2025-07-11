# Context7 MCP Server Manual Testing Guide

## Test Sequence

### 1. Resolve Library IDs
Test resolving popular libraries to Context7-compatible IDs:

#### Frontend Libraries
```
Use mcp__context7__resolve-library-id:
- libraryName: "react"
- libraryName: "vue" 
- libraryName: "next.js"
- libraryName: "svelte"
```

#### Backend Libraries
```
Use mcp__context7__resolve-library-id:
- libraryName: "express"
- libraryName: "fastify"
- libraryName: "socket.io"
- libraryName: "nest.js"
```

#### Testing Libraries
```
Use mcp__context7__resolve-library-id:
- libraryName: "jest"
- libraryName: "playwright"
- libraryName: "vitest"
- libraryName: "cypress"
```

### 2. Fetch Documentation
Test fetching docs using resolved library IDs:

#### React Documentation
```
Use mcp__context7__get-library-docs:
- context7CompatibleLibraryID: [resolved React ID]
- topic: "hooks"
- tokens: 5000
```

#### Express Documentation  
```
Use mcp__context7__get-library-docs:
- context7CompatibleLibraryID: [resolved Express ID]
- topic: "routing"
- tokens: 5000
```

#### Playwright Documentation
```
Use mcp__context7__get-library-docs:
- context7CompatibleLibraryID: [resolved Playwright ID]
- topic: "automation"
- tokens: 5000
```

### 3. Topic-Specific Queries
Test specific documentation topics:

#### React Hooks Deep Dive
```
Use mcp__context7__get-library-docs:
- context7CompatibleLibraryID: [React ID]
- topic: "useState, useEffect, useContext, custom hooks"
- tokens: 8000
```

#### Express Middleware
```
Use mcp__context7__get-library-docs:
- context7CompatibleLibraryID: [Express ID]  
- topic: "middleware, authentication, error handling"
- tokens: 6000
```

#### Playwright Testing Patterns
```
Use mcp__context7__get-library-docs:
- context7CompatibleLibraryID: [Playwright ID]
- topic: "page object model, fixtures, test organization"
- tokens: 7000
```

### 4. Version-Specific Documentation
Test version-specific documentation retrieval:

#### Latest React
```
Use mcp__context7__resolve-library-id:
- libraryName: "react@latest"

Then get docs for specific version features
```

#### Specific Next.js Version
```
Use mcp__context7__resolve-library-id:
- libraryName: "next.js@14"

Test app router documentation
```

### 5. Utility Libraries
Test smaller utility library resolution:

#### Data Validation
```
Use mcp__context7__resolve-library-id:
- libraryName: "zod"

Use mcp__context7__get-library-docs:
- topic: "schema validation, type inference"
```

#### HTTP Requests
```
Use mcp__context7__resolve-library-id:
- libraryName: "axios"

Use mcp__context7__get-library-docs:
- topic: "interceptors, error handling"
```

## Expected Results

### Library Resolution
- Should return valid Context7-compatible library IDs
- IDs typically in format: "/org/project" or "/org/project/version"
- Should handle common package names correctly
- Should provide alternatives for ambiguous names

### Documentation Retrieval
- Should return current, accurate documentation
- Content should match official documentation
- Should include code examples and API references
- Should respect token limits while providing comprehensive info

### Topic Filtering
- Should focus on requested topics
- Should provide relevant sections only
- Should maintain context and examples
- Should avoid irrelevant documentation sections

## Validation Checklist

- [ ] Library IDs resolved successfully for major frameworks
- [ ] Documentation retrieved without errors
- [ ] Content appears current and accurate
- [ ] Topic filtering works as expected
- [ ] Token limits respected
- [ ] Code examples included in responses
- [ ] API references complete and correct
- [ ] Error handling works for invalid libraries

## Error Cases to Test

### Invalid Library Names
```
Use mcp__context7__resolve-library-id:
- libraryName: "nonexistent-library-12345"
```

### Invalid Library IDs
```
Use mcp__context7__get-library-docs:
- context7CompatibleLibraryID: "/invalid/library"
```

### Excessive Token Requests
```
Use mcp__context7__get-library-docs:
- tokens: 50000 (test upper limits)
```

## Notes
- Document which libraries are successfully resolved
- Note any gaps in documentation coverage
- Track response times for large documentation requests
- Verify accuracy by cross-referencing with official docs
- Test with libraries commonly used in your projects