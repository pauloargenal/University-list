## University list web and university-list-server

University list Application

- is a web application where you can browse/search a list of universities from all over the world.

### Node Versions

For web application

- [Node](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V14.md#14.12.0) - 14.12.0 version

For server

- [Node](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V14.md#16.2.0) - 16.2.0 version

### Prereq Setup

1. [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) or [Nodenv](https://github.com/nodenv/nodenv#installation) - For developers; Install Node 16.x

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
