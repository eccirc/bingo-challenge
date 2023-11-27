# Bingo Node

### David Williams - November 2023

## About this project

At the heart of this project is a utility function which checks if a given bingo card is a winning card by comparing it with a list of called bingo numbers - if all numbers in any row or column of a board are marked, that board wins.
In order to access this function, there is an api!
Running the Express server will give you access to **/api/isBingo**, which accepts a body containing:
```
{
    "bingoNumbersList": [],
    "bingoCard" : {
      "row1": [],
      "row2": [],
      "row3": [],
      "row4": [],
      "row5": []
    }
}
```
This is validated by the JsonSchema validation package, with further internal validation to ensure the correct types are passed (including that the arrays contain only numbers), and that your Bingo Card conforms to a 5x5 structure.
This returns either a 401 for invalid header or body formats, or 200 with the following:
```
{ isBingo: bolean, message: string }
```
with the message portion telling you if you card will win (or not) and a message - the response be be 'false' for 'isBingo' with a message should an invalid card be provided.

## Scripts

- To get everything setup run: `yarn install`
- Execute tests with: `yarn test` (test coverage page to be found in /coverage/lcov-report/index.html)
- Start the app with: `yarn start` (Compiles typescript to the /dist directory)

You can then visit `localhost:3000/api/isBingo` in your favorite API testing platform (Postman, Insomnia), set up for a GET request with the above body structure.

## Technologies

**Node.js**, **Express**, **Typescript**, **Jest**