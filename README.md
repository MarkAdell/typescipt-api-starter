# Typescript API Starter

## Getting Started

Clone the repository
```bash
$ git clone git@github.com:MarkAdell/typescript-api-starter.git

$ cd typescript-api-starter
```

Install the dependencies
```bash
$ npm install
```

To run the server in development mode
```bash
$ npm run start:dev
```

Visit `<base_url>/api-docs` to view swagger API docs.

## Things to do once you start using the starter for your project

- Update the following properties in `package.json` as necessary:
  - name
  - version
  - description
  - repository
  - author
  - license
  - bugs
- Update `transports.DailyRotateFile` options in `src/config/logger.ts` as necessary.
- Copy `.env.example.dev` or `.env.example.prod` to a `.env` file and update the environment variables as necessary.
- Update PM2 configs in `ecosystem.config.js` as necessary.
- Review the turned off linting rules in `.eslintrc` and update them as necessary.
