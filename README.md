# Backend API for React Sidebar Chat Application
This repository contains the backend API for the React Sidebar Chat Application. The API handles WebSocket communication and real-time messaging between the server and clients. This README provides an overview of the backend functionality and instructions for setting up and running the API.

## Technologies Used
- Node.js: A JavaScript runtime used to build the backend server.
- Express.js: A web application framework for Node.js used to create the API endpoints.
- Socket.IO: A library for enabling WebSocket communication between the server and clients.
### Prerequisites
Before running the backend API, make sure you have the following installed on your system:
- Node.js: Download and install Node.js (version 12 or higher).
## Getting Started
To set up and run the backend API locally, follow these steps:

- Clone the backend repository:
`git clone https://github.com/smalik21/sidebar-react-backend.git`
- Install dependencies:
`npm install`
- Start the backend server:
`node app.js`
- The server will start running on the default port 3030.

## WebSocket Communication
The backend API utilizes Socket.IO to establish WebSocket communication between the server and clients. Socket.IO provides real-time, bidirectional communication channels, allowing clients to send and receive messages instantly without the need for frequent HTTP requests.

The server code you provided sets up a WebSocket connection and handles incoming messages. When a client connects, it sends all stored messages to the client. When a new message is received from a client, it is stored in memory (the messages array) and broadcasted to all connected clients.

The message event is used to send and receive messages. The server listens for the message event and handles incoming messages from clients. The received message should have the following structure:

javascript
Copy code
{
  name: 'John',        // The name of the user sending the message
  input: 'Hello'       // The content of the message
}
The server stores the message in the messages array with additional details such as clientId and timeStamp. It then emits the message event to all connected clients, including the updated messages array.

Frontend Repository
The frontend code for the React Sidebar Chat Application is available in a separate repository. You can find the frontend code and documentation at https://github.com/smalik21/sidebar-react.
