# Narwhal

Narwhal is an open-source project aimed at providing a responsive, real-time chat app with a strong focus on open communities. Imagine Slack but with an easy way to discover new communities built right into the app!

## Table of Contents

1. [Team](#team)
1. [Current Feature Set](#current-feature-set)
1. [Under the Hood](#under-the-hood)
1. [Development](#development)
    1. [Getting Started](#getting-started)
1. [Contributing](#contributing)

## Team

- [Sam Lee](https://github.com/sleex89)
- [Rory Well](https://github.com/roryewell)
- [Jonathan Weinstein](https://github.com/JonathanWeinstein)

## Current Feature Set

- Log in and register a new account
- Edit user profile
- Find new communities on the Discover page
- Create and join pods (communities)
- Create and join topics (channels)
- Persistent, real-time chat for each topic
- Upload custom pod and user avatars
- Search for messages

## Under the Hood

Narwhal is a Node.js application built with Express.js and React. We take pride in our modern tech stack. Here's a brief list of other technologies we've implemented in our app:

- Redux
- Redux-Saga
- Socket.IO
- CSS Grid / Flexbox
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

To start the Node.js server, open up another terminal and run the following command from the root folder of the directory:

```sh
nodemon
```

Start the React development server by first going to the root folder of the directory and then running the following commands:
```sh
cd client
npm start
```

#### Databases

Narhwal uses Postgres as the main back-end database. All databases must be created before using the application. Below is a list of scripts to create the databases and their tables.

##### narwhal_users

```sql
-- update later
```

##### narwhal_pods

```sql
-- update later
```

##### narwhal_messages

```sql
-- update later
```

#### Microservices

Clone each of the microservice repos.

- [User microservice](https://github.com/narwhal-chat/narwhal-user-microservice)
- [Pod microservice](https://github.com/narwhal-chat/narwhal-pod-microservice)
- [Message microservice](https://github.com/narwhal-chat/narwhal-message-microservice)
- [Message search microservice](https://github.com/narwhal-chat/narwhal-message-search-microservice)

Install the dependencies for each of the cloned microservice directories.

```sh
npm install
```

To start a microservice, navigate to the root folder of the directory and run the following command:

```sh
nodemon
```

## Contributing

Want to help make Narwhal an amazing product? Review the [Development](#development) guide and start submitting pull requests ^_^
