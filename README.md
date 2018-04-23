# narwhal [![Travis CI Status](https://travis-ci.org/narwhal-chat/narwhal.svg?branch=master)](https://travis-ci.org/narwhal-chat)

narwhal is an open-source project aimed at providing a responsive, real-time chat app with a strong focus on open communities. Imagine Slack but with an easy way to discover new communities built right into the app!

## Table of Contents

1. [Team](#team)
1. [Current Feature Set](#current-feature-set)
1. [Under the Hood](#under-the-hood)
1. [Development](#development)
    1. [Getting Started](#getting-started)
1. [Screenshots](#screenshots)
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
- Real-time group chat for each topic
- Upload custom pod and user avatars
- Message searching

## Under the Hood

narwhal is a Node.js application built with Node.js and React. We take pride in our modern tech stack. Here's a brief list of other technologies we've implemented in our app:

- Redux
- Redux-Saga
- Socket.IO
- CSS Grid / Flexbox
- Postgres
- Postgres Full Text Search

## Development

### Getting Started

#### Main narwhal Repo

Clone the main narwhal repo and cd to the new directory.

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

narhwal uses Postgres as the main back-end database. All databases must be created before using the application. Below is a list of scripts to create the databases and their tables.

##### narwhal_users

```sql
-- Table: users
CREATE TABLE users (
    id serial  NOT NULL,
    username varchar(20)  NOT NULL,
    password varchar(100)  NOT NULL,
    email_address varchar(320)  NOT NULL,
    avatar varchar(500)  NOT NULL,
    create_date timestamp  NOT NULL DEFAULT now(),
    CONSTRAINT user_ak_email_address UNIQUE (email_address) NOT DEFERRABLE  INITIALLY IMMEDIATE,
    CONSTRAINT user_ak_username UNIQUE (username) NOT DEFERRABLE  INITIALLY IMMEDIATE,
    CONSTRAINT users_pk PRIMARY KEY (id)
);
```

##### narwhal_pods

```sql
-- Table: pod_user
CREATE TABLE pod_user (
    id serial  NOT NULL,
    pod_id int  NOT NULL,
    user_id int  NOT NULL,
    is_admin boolean  NOT NULL,
    join_date timestamp  NOT NULL DEFAULT now(),
    CONSTRAINT pod_user_ak_pod_id_user_id UNIQUE (pod_id, user_id) NOT DEFERRABLE  INITIALLY IMMEDIATE,
    CONSTRAINT pod_user_pk PRIMARY KEY (id)
);

-- Table: pod_category
CREATE TABLE pod_category (
    id serial  NOT NULL,
    name varchar(50)  NOT NULL,
    default_category_avatar varchar(500)  NOT NULL,
    CONSTRAINT pod_category_ak_name UNIQUE (name) NOT DEFERRABLE  INITIALLY IMMEDIATE,
    CONSTRAINT pod_category_pk PRIMARY KEY (id)
);

-- Table: pod
CREATE TABLE pod (
    id serial  NOT NULL,
    reference_name varchar(25)  NOT NULL,
    display_name varchar(25)  NOT NULL,
    description varchar(100)  NOT NULL,
    avatar varchar(500)  NOT NULL,
    pod_category_id int  NOT NULL,
    author_id int  NOT NULL,
    create_date timestamp  NOT NULL DEFAULT now(),
    is_deleted boolean  NOT NULL DEFAULT false,
    delete_date timestamp  NULL,
    CONSTRAINT pod_ak_reference_name UNIQUE (reference_name) NOT DEFERRABLE  INITIALLY IMMEDIATE,
    CONSTRAINT pod_pk PRIMARY KEY (id)
);

-- Table: topic
CREATE TABLE topic (
    id serial  NOT NULL,
    name varchar(20)  NOT NULL,
    pod_id int  NOT NULL,
    author_id int  NOT NULL,
    create_date timestamp  NOT NULL DEFAULT now(),
    is_deleted boolean  NOT NULL DEFAULT false,
    delete_date timestamp  NULL,
    CONSTRAINT topic_pk PRIMARY KEY (id)
);

-- Foreign keys
-- Reference: pod_category_id (table: pod)
ALTER TABLE pod ADD CONSTRAINT pod_category_id
    FOREIGN KEY (pod_category_id)
    REFERENCES pod_category (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: pod_user_pod (table: pod_user)
ALTER TABLE pod_user ADD CONSTRAINT pod_user_pod
    FOREIGN KEY (pod_id)
    REFERENCES pod (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: topic_pod_id (table: topic)
ALTER TABLE topic ADD CONSTRAINT topic_pod_id
    FOREIGN KEY (pod_id)
    REFERENCES pod (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;
```

##### narwhal_messages

```sql
-- Table: topic_message
CREATE TABLE topic_message (
    id serial  NOT NULL,
    message_text varchar(500)  NOT NULL,
    message_text_tokens tsvector  NOT NULL,
    topic_id int  NOT NULL,
    author_id int  NOT NULL,
    create_date timestamp  NOT NULL DEFAULT now(),
    is_deleted boolean  NOT NULL DEFAULT false,
    delete_date timestamp  NULL,
    last_update_date timestamp  NOT NULL DEFAULT now(),
    CONSTRAINT topic_message_pk PRIMARY KEY (id)
);
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

## Screenshots

### Login
![Login](https://dzwonsemrish7.cloudfront.net/items/0Y2P3K0b132p0n1h2g2k/Image%202018-04-22%20at%205.59.08%20PM.png "Login")

### Discover
![Discover](https://dzwonsemrish7.cloudfront.net/items/2X3v3L1k2H012d1U2m0Z/Image%202018-04-22%20at%2011.00.00%20PM.png "Discover")

### Chat
![Chat](https://dzwonsemrish7.cloudfront.net/items/0y0k3W112M3x1r0U1m1L/Image%202018-04-22%20at%2011.18.01%20PM.png "Chat")

## Contributing

Want to help make narwhal an amazing product? Review the [Development](#development) guide and start submitting pull requests ^_^
