# Memory MCP Server Testing

## Purpose
Tests the knowledge graph functionality of the Memory MCP server for storing and retrieving entities, relations, and observations.

## Available Tools
- `mcp__memory__create_entities` - Create entities with observations
- `mcp__memory__create_relations` - Create relationships between entities  
- `mcp__memory__add_observations` - Add observations to existing entities
- `mcp__memory__delete_entities` - Delete entities and relations
- `mcp__memory__delete_observations` - Delete specific observations
- `mcp__memory__delete_relations` - Delete specific relations
- `mcp__memory__read_graph` - Read entire knowledge graph
- `mcp__memory__search_nodes` - Search for nodes by query
- `mcp__memory__open_nodes` - Open specific nodes by name

## Test Files
1. `memory-test-runner.js` - JavaScript test runner
2. `sample-knowledge-graph.json` - Example graph structure
3. `memory-manual-test.md` - Manual testing procedures

## Testing Approach
Run the test runner to create a sample knowledge graph, then verify storage and retrieval functionality.

```bash
node memory-test-runner.js
```

## Knowledge Graph Capabilities
- Store information across conversations
- Retrieve previously stored data
- Maintain context between sessions
- Create knowledge bases
- Personal information management