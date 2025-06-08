# Backend Practices

This repository contains basic beginner backend practices demonstrating various functionalities, including a simple HTTP server, a to-do list manager, and an event logger.

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

### 4. Web Server (`01_web_server/`)

A simple web server implemented in both Node.js and Bun.

- **Files:**
  - `server-node.js`: Web server using Node.js.
  - `server-bun.js`: Web server using Bun.

- **How it Works:**
  - Serves different responses based on the URL path.
  - Handles routes like `/`, `/ice-tea` (Node.js), and `/tea` (Bun).
  - Returns a 404 response for unknown routes.

- **How to Run:**
  - Using Node.js:
    ```bash
    node 01_web_server/server-node.js
    ```
    The server listens on `http://127.0.0.1:3000`.

  - Using Bun:
    ```bash
    bun run 01_web_server/server-bun.js
    ```
    The server listens on `http://127.0.0.1:3000`.

### 5. Express Tea API (`02_express/`)

A RESTful API built with Express.js to manage a collection of teas.

- **Files:**
  - `index.js`: The main application file.
  - `logger.js`: Custom logger for logging requests and events.
  - `.env`: Environment variables file.
  - `app.log`: Log file for storing application logs.

- **How it Works:**
  - Provides endpoints to perform CRUD operations on a tea collection.
  - Logs HTTP requests using Morgan and Winston.
  - Endpoints:
    - `GET /teas`: Retrieve all teas.
    - `GET /teas/:id`: Retrieve a specific tea by ID.
    - `POST /teas`: Add a new tea.
    - `PUT /teas/:id`: Update an existing tea by ID.
    - `DELETE /teas/:id`: Delete a tea by ID.

- **How to Run:**
  1. Create a `.env` file in the `02_express/` directory with the following content:
     ```
     PORT=3000
     ```
  2. Install dependencies:
     ```bash
     npm install
     ```
  3. Start the server:
     ```bash
     node index.js
     ```
  The server listens on `http://127.0.0.1:3000`.

## Requirements
 - Node.js installed on your system.

