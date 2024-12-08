# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an unhandled promise rejection occurs within an HTTP server's request handler.  The issue arises from not properly handling errors thrown within asynchronous operations.  This can lead to server crashes and unexpected behavior. 

## How to Reproduce

1. Clone the repository.
2. Run `node bug.js`.
3. Observe the inconsistent behavior (sometimes it works, sometimes it crashes).

## Solution

The `bugSolution.js` file provides a corrected version that properly handles the potential errors using `.catch()`. This ensures that the server responds gracefully even when unexpected errors occur.

## Key takeaway

Always handle potential errors within asynchronous operations in Node.js to prevent crashes and create robust applications.  Use try...catch blocks for synchronous operations and .catch() for asynchronous operations (promises).