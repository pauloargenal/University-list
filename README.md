## University list web and university-list-server

University list Application

- is a web application where you can browse/search a list of universities from all over the world.

### Getting Started

- These instructions will get you a copy of the project up and running on your local machine for development

### Node Versions

For web application

- [Node](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V14.md#14.12.0) - 14.12.0 version

For server

- [Node](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V14.md#16.2.0) - 16.2.0 version

### Prereq Setup

1. [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) - For developers; Install Node 16.x

### Setup web application

1. `$ git clone git@github.com:Selenophilia/University-list.git && cd university-list-app`
2. `$ nvm use 14.12.0`
3. `$ npm install`
4. `$ npm run start` to launch the app
5. hit up localhost:3000

### Setup server

1. `$ git clone git@github.com:Selenophilia/university-list-server.git && cd university-list-server`
2. `$ nvm use 16.2.0`
3. `$ npm install`
4. `$ node src/index.js` to launch the app
5. hit up localhost:4000

### Useful Commands

- When running test with the code coverage
  - `$ npm run test`

### Built With

Front-End:

- React.js(create-react-app) - JS library that use mostly in the front-end
- React-Router - were used for routing of the pages
- HTML/SCSS - for creating my initial design and my template
- Material-Ui - react UI framework builting most of my components

Back-End:

- Post-man - use to test my graphql api in the back end.
- GraphQL/Apollo-server - is used for query building, fetching data and creating data inside my database.
- Prisma - database used to store user emails and password.

Security:

- JsonWebToken(JWT) - is used to authenticate the user inside the system
- Bcrypt.Js - used to hash users password.

### Bonus Requirements:

- Have a login and registration feature. Login and registration must have a validation on
  the input.

### Presentation Link:

- https://loom.com/share/68eda7d90d244e74a6baa392b035eb04
