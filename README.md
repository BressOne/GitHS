# Coding test

Provided exercise is an example implementation of a GQL API based on NodeJS. This API operate over 3rd party API entities (GH). GQL schema is self descriptive, refere to typedefinitions of graphQL for the details.

To get started, ensure you are running nodeJS >=22.3.0.

Stability is not guaranteed if you are using older versions of NodeJS.

1.  [Requirements](#requirements)
2.  [Installation](#installation)
3.  [Environment](#environment)
4.  [API](#api)
5.  [TODOs](#todos)

## Requirements

[](https://github.com/BressOne/spb_be/blob/main/README.md#requirements)

- Node.js >=22.3.0
- WSL/Linux/MacOS
- Yarn 1.22.22

## Installation

### Dev

To install dependencies, run the following command: `yarn`
To start the application in development mode with nodemon, use: `PORT=yourport GH_THROTTLER_ASPECT=yourghtrottler yarn dev`
Or dev build with `yarn build` and `yarn start` commands.
The app will appear on localhost:4000 by default if no PORT provided.
Also you can use embedded vscode debugger - chech .vscode cfg

Happy explore!

## Environment

There are several env vars, which the service can be adjusted with:

| var                 | Effect                                                               |
| ------------------- | -------------------------------------------------------------------- |
| PORT                | The server port to start on. Defaults to 4000                        |
| GH_THROTTLER_ASPECT | The servers requests per second limit torwards GH api. Defaults to 2 |

## API

Is a gql api available on `yourdomain:PORT/graphql` By default is http://localhost:4000/graphql
NOTE: i am not providing any playground, so use any of your choice, i prefer [altair](https://chromewebstore.google.com/detail/altair-graphql-client/flnheeellpciglgpaodhkhmapeljopja) as chrome extension

According to the task, implements:

```
Queries:
	listRepositories(token: String!): [Repository]
	repositoryDetails(token: String!, owner: String!, name: String!):
```

## Features

### TypeScript v5.

App is covered by TS with all files it has.
That makes code self-descriptive and robust. Consider it as musthave.

### GQL

API is implementing graphql with typedefs and resolvers.

---

### TODOs

There several places to improve.

- add dataloaders
- add caching
- usahge of token as gql query param is a poor design as lowkey makes hard to use context to store it
