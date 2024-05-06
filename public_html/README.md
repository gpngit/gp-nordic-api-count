# gp-nordic-api-count

# Count API

## Description
Count API is a simple Node.js application built with Express that provides endpoints for counting API calls. It allows you to increment and retrieve counts for specific IDs.

## Features
- Increment count for a specific ID
- Retrieve count for a specific ID

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/gpngit/gp-nordic-api-count.git

# Install dependencies:
2. **Install dependencies:**
npm install

## Usage
3. **Start the server:**
npm start

4. The server will start running on port 8000 by default. You can access the API at http://localhost:8000.

### Endpoints
- `/`: Root endpoint, returns 'API counter'.
- `/SET?id=<ID>`: Increment the count for the specified ID.
- `/GET?vid=<ID>`: Retrieve the count for the specified ID.

## Configuration
- The server port can be configured using the `PORT` environment variable. By default, it will use port 8000.
- CORS (Cross-Origin Resource Sharing) is configured in the 'index.js'.

## Dependencies
- axios: ^1.6.8
- express: ^4.19.2
- nodemon: ^3.1.0

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author
Svilena Koleva
