# Narwhal

Narwhal is an open-source project aimed at providing a responsive, real-time chat experience with a strong focus on open communities. Easily find new communities by using the Discover feature.

## Team

- Sam Lee
- Rory Well
- Jonathan Weinstein

## Current Feature Set

- Log in and register a new account
- Edit user profile
- Upload a custom user avatar
- Find new communities on the Discover page
- Create and join pods (communities)
- Upload a custom pod avatar
- Create and join topics (channels)
- Persistent, real-time chat for each topic
- Search for messages

## Under the Hood

Narwhal is a Node.js application built with Express.js and React. We take pride in our modern tech stack. Here's a brief list of other technologies we've implemented in our app:

- Redux
- Redux-Saga
- Socket.IO
- Postgres
- Postgres Full Text Search

## Development

### Getting Started

#### Main Narwhal Repo
Clone the main Narwhal repo and cd to the new directory.

```sh
npm install
cd client
npm install
```

To start the Node.js server, open up another terminal and run the following command from the root folder of the repo:

```sh
nodemon
```

Start the React development server by first going to the root folder of the repo and then running the following commands:
```sh
cd client
npm start
```

#### Microservices
Clone each of the microservice repos.

- [User microservice](https://github.com/narwhal-chat/narwhal-user-microservice)
- [Pod microservice](https://github.com/narwhal-chat/narwhal-pod-microservice)
- [Message microservice](https://github.com/narwhal-chat/narwhal-message-microservice)
- [Message search microservice](https://github.com/narwhal-chat/narwhal-message-search-microservice)

For each of the cloned microservice repos, install the dependencies.

```sh
npm install
```

#### Databases


## Contributing

Want to help make Narwhal an amazing product? Submit a pull request ^_^
