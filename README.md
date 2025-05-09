# Backend Projects

This repository contains multiple backend projects demonstrating various functionalities, including a simple HTTP server, a to-do list manager, and an event logger.

## Project Structure

### 1. HTTP Server (`server/`)

A basic HTTP server implemented in Node.js that serves static HTML files.

- **Files**:
  - `server.js`: The main server file.
  - `index.html`, `about.html`, `contact.html`: Static HTML pages served by the server.

- **How to Run**:
  ```bash
  node server/server.js
  ```

The server listens on port `3000`. Open `http://localhost:3000` in your browser.

### 2. To-Do List Manager (`to-do/`)
A command-line application to manage a to-do list. Tasks are stored in a JSON file.

**Files:**
`to-do.js`: The main application file.
`tasks.json`: Stores the list of tasks.

**Commands:**
 - Add a task:
    ```bash
    node to-do/to-do.js add "Task description"
    ```

 - List all tasks:
    ```bash
    node to-do/to-do.js list
    ```

 - Remove a task:
    ```bash
    node to-do/to-do.js remove <task_number>
    ```
### 3. Event Logger (`eventLogger/`)
A Node.js application that logs events to a file and monitors system memory usage.

- **Files:**
    - `logger.js`: The main logger file.
    - `eventlog.log`: Stores the logged events.

- **How it Works:**
   - Logs system memory usage every 3 seconds.
   - Logs custom messages using an event emitter.

- **How to Run:**
    ```bash
    node eventLogger/logger.js
    ```

## Requirements
 - Node.js installed on your system.

