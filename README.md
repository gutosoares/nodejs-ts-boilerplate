# Nodejs Typescript Boilerplate

This is a simple NodeJS template using Typescript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to install

```
Mongodb
```

```
node
```

for run this project.

### Installing

First, you need to clone this repository and install all dependencies, using the first command below.

```
npm i
```

And start the server in dev mode.

```
npm run dev
```

All endpoint for this RESTful api


```
[GET]http://localhost:3000/api/v1/realties => Get all realties registered in the database
```

```
[GET]http://localhost:3000/api/v1/realties/:id => Get a single realty registred in the database using id
```

```
[POST]http://localhost:3000/api/v1/realties => Save a new realty on database system
```

```
[PATCH]http://localhost:3000/api/v1/realties/update/:id => Edit a single realty registred in the database using id
```

```
[DELETE]http://localhost:3000/api/v1/realties/:id => Remove a single realty on database system
```

## Running the tests

For see all test working, run this command below

```
npm run test
```

or

```
npm run test:watch
```

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Node.js](https://nodejs.org/en/) - The web framework used
* [Typescript](https://typescriptlang.org) - Javascript super set
* [MongoDB](https://www.mongodb.com/) - NoSQL database

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Augusto Soares**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
