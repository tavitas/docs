# Website

The InformDocs website provides documentation for the [SPREP Inform project](https://docs.pacific-data.sprep.org/docs/inform/introduction) and is built using Docusaurus 2

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Github Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Production Deployment

```
$ git push origin master
```

Push to master branch. This will trigger the circleci workflow to deploy the build to production via wodby.
