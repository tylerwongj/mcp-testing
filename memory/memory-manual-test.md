# Memory MCP Server Manual Testing Guide

## Test Sequence

### 1. Create Test Entities
Test creating entities with observations:

```
Use mcp__memory__create_entities to create:
- Entity: "Tyler", Type: "Person", Observations: ["Developer focused on AI-assisted development", "Working on MCP server testing"]
- Entity: "Memory Test", Type: "Experiment", Observations: ["Testing knowledge graph functionality", "Created on 2025-07-11"]
```

### 2. Create Relations
Test creating relationships between entities:

```
Use mcp__memory__create_relations to create:
- Relation: Tyler -> works_on -> Memory Test
- Relation: Memory Test -> validates -> Memory MCP Server
```

### 3. Add Observations
Test adding new observations to existing entities:

```
Use mcp__memory__add_observations to add:
- To "Tyler": ["Prefers concise documentation", "Uses dark mode color schemes"]
- To "Memory Test": ["Successfully created entities and relations", "Testing search functionality"]
```

### 4. Search Functionality
Test search capabilities:

```
Use mcp__memory__search_nodes with queries:
- "Tyler" - Should find the Tyler entity
- "test" - Should find Memory Test entity
- "development" - Should find entities mentioning development
```

### 5. Read Full Graph
Test complete graph retrieval:

```
Use mcp__memory__read_graph to display:
- All entities with their observations
- All relations between entities
- Complete knowledge graph structure
```

### 6. Open Specific Nodes
Test targeted node access:

```
Use mcp__memory__open_nodes with names:
- ["Tyler"] - Get Tyler entity details
- ["Memory Test"] - Get Memory Test entity details
- ["Tyler", "Memory Test"] - Get multiple entities
```

### 7. Cleanup Operations
Test deletion functionality:

```
Use mcp__memory__delete_observations to remove:
- Specific observations from entities

Use mcp__memory__delete_relations to remove:
- Specific relations between entities

Use mcp__memory__delete_entities to remove:
- Complete entities (only for testing - be careful!)
```

## Expected Results

### Entity Creation
- Entities should be created with specified observations
- Each entity should have a unique name and type
- Observations should be stored as an array

### Relation Creation  
- Relations should connect existing entities
- Relations should have clear directional meaning
- Invalid relations (non-existent entities) should be rejected

### Search Results
- Search should match entity names, types, and observation content
- Results should be relevant to the query
- Empty queries should return appropriate responses

### Graph Reading
- Full graph should show complete structure
- All entities and relations should be present
- Data should be organized and readable

## Validation Checklist

- [ ] Entities created successfully
- [ ] Relations established correctly
- [ ] Observations added properly
- [ ] Search returns relevant results
- [ ] Full graph displays complete structure
- [ ] Specific nodes accessible by name
- [ ] Deletion operations work safely
- [ ] Error handling works for invalid operations

## Notes
- Test with real project data when possible
- Verify persistence across different sessions
- Check for data integrity after operations
- Document any unexpected behaviors or errors