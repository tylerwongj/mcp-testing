# Legacy MCP Servers

This directory contains information about MCP servers that were removed due to configuration issues.

## Failed Servers Removed

### 1. Tavily MCP Server
- **Issue**: Missing `TAVILY_API_KEY` environment variable
- **Error**: `TAVILY_API_KEY environment variable is required`
- **Fix**: Get API key from tavily.com and set environment variable

### 2. Zen MCP Server  
- **Issue**: Python virtual environment setup problems
- **Error**: `can't open file '/Users/tyler/.zen-mcp-server/run.py': [Errno 2] No such file or directory`
- **Fix**: Reinstall zen server or use alternative meditation/productivity MCP

### 3. Filesystem MCP Server
- **Issue**: Missing allowed directories configuration
- **Error**: `Error accessing directory --version: Error: ENOENT`
- **Fix**: Add allowed directories to server configuration

### 4. Notion MCP Server
- **Issue**: Missing `NOTION_API_KEY` environment variable  
- **Error**: `Connection closed` (likely due to missing API key)
- **Fix**: Get API key from Notion developers and set environment variable

## Re-enabling Instructions

To re-enable any of these servers:

1. **Fix the underlying issue** (API keys, configurations, etc.)
2. **Add back to Claude config**:
   ```bash
   claude mcp add <server-name> <command>
   ```
3. **Test the connection** with `/mcp` command

## Current Working Servers

- ✅ playwright: Browser automation
- ✅ memory: Knowledge graph
- ✅ context7: Documentation  
- ✅ browser-tools: Web testing
- ✅ sequential: Advanced thinking

All failed servers have been removed to eliminate connection errors during Claude Code startup.