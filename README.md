# Demo: Represent hierarchical data

A basic end-to-end system consisting of a MongoDB database, a Node back-end built with Express and Mongoose, and a front-end using (very rudimentary) Preact. Testing is done via Jest.

This is built as a monorepo with [Lerna](https://github.com/lerna/lerna) for the sake of keeping the project together while maintaining appropriate separation of concerns.

The use of [`node-mongo-seeds`](https://github.com/toymachiner62/node-mongo-seeds) has also been employed to populate the database quickly and easily.

The back-end formats the data received from the database before passing the result to the front-end.

The front-end then restructures the data hierarchically and presents it as nested unordered lists.

## Prerequisites

Any terminal instances interacting with this project should be using Node v12 (version at the time of writing is 12.16.3). If you are using Node Version Manager (nvm) and have Node v12 installed, you can run `nvm use`.

This project also relies on MongoDB v4 (version at the time of writing is 4.2.6).

## Installation

- Open a new terminal instance and `cd` into the project's root directory
- Install root-level dependencies by running `npm i`
- Install package-specific dependencies by running `npm run bootstrap`

## Running locally

- Open a new terminal instance and run `mongod` to start the MongoDB service
	- **If this is your first time running the project:**
	- Open a new terminal instance and `cd` into the project's root directory
	- In this terminal instance, run `npm run seed` to populate the database
- Open a new terminal instance and `cd` into the project's `packages/backend` directory
- In this terminal instance, run `npm start` to start running the back-end
- Open a new terminal instance and `cd` into the project's `packages/frontend` directory
- In this terminal instance, run `npm start` to serve the front-end at `http://localhost:1234`

## Database cleanup

To remove this project's database and clean up your local MongoDB once you're done:

- Open a new terminal instance and run `mongod` to start the MongoDB service (if it's not already running)
- Open a new terminal instance and run `mongo` to start the MongoDB shell
- **Optional:** Run `show dbs` to show a list of databases that exist in MongoDB
- Run `use demo--represent-hierarchical-data` to switch to the database for this project
- Run `db.dropDatabase()` to drop the database currently in use
- **Optional:** Run `show dbs` to show a list of databases that exist in MongoDB and confirm the relevant database is now gone

## Testing

In a terminal instance pointed at the project's root directory, run `npm test` to run all tests across the font and back ends, and receive a coverage report for each.

Alternatively, `npm test` can also be run in each specific package's directory.
