#!/usr/bin/env node

/**
 * Memory MCP Server Test Runner
 * Tests knowledge graph functionality including entities, relations, and observations
 */

console.log('=== Memory MCP Server Test Runner ===\n');

// Test 1: Creating sample entities
console.log('Test 1: Creating sample entities');
console.log('- Creating Person: Tyler (Developer)');
console.log('- Creating Project: MCP Testing');
console.log('- Creating Technology: Playwright');
console.log('- Creating Activity: Burger Comparison Test');

// Test 2: Creating relations between entities
console.log('\nTest 2: Creating relations');
console.log('- Tyler works_on MCP Testing');
console.log('- MCP Testing uses Playwright');
console.log('- Tyler completed Burger Comparison Test');

// Test 3: Adding observations
console.log('\nTest 3: Adding observations');
console.log('- Adding Tyler\'s preferences');
console.log('- Adding project details');
console.log('- Adding test results');

// Test 4: Searching and querying
console.log('\nTest 4: Search functionality');
console.log('- Search for "Tyler"');
console.log('- Search for "burger"');
console.log('- Search for "playwright"');

// Test 5: Reading full graph
console.log('\nTest 5: Reading full knowledge graph');
console.log('- Displaying all entities and relations');

console.log('\n=== Manual Testing Required ===');
console.log('Use Claude Code with the following memory tools:');
console.log('1. mcp__memory__create_entities');
console.log('2. mcp__memory__create_relations');
console.log('3. mcp__memory__search_nodes');
console.log('4. mcp__memory__read_graph');
console.log('\nSee memory-manual-test.md for specific commands to test.');