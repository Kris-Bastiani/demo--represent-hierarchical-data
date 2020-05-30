# Demo: Represent hierarchical data (Back-end)

## Dependencies

I have used ExpressJS and Mongoose to work with a MongoDB database,
for the sake of getting this up and running quickly and with a minimum of fuss.

I've employed the use of [`node-mongo-seeds`](https://github.com/toymachiner62/node-mongo-seeds)
to populate the database quickly and easily.

## How to run

- Ensure that NodeJS is installed. This project uses major version 12; the specific version at the time of writing is v12.16.3
- Ensure that MongoDB is installed. The specific version at the time of writing is 4.2.6
- In a Terminal instance, run `mongod` to start MongoDB
- In a separate Terminal instance, navigate to this project's directory and run `npm i` to install the relevant dependencies
- When running for the first time, run `npm run seed` to populate the database with the contents of the `seeds` directory
- Once done, run `npm start` to start the server on port 3002

## Limitations

Due to my back-end skills being less mature than my front-end skills,
I do not yet know good techniques for testing request handlers and such.
As a result, back-end test coverage is unfortunately lacking.
I'm particularly eager to improve on this to fill these knowledge gaps.
