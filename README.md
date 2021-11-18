# Yarn monorepo with Webpack module federation and library

This is a yarn (v1) monorepo (using workspaces) that contains two Webapack federated modules (a host and a remote) and one component library.

***

## Folder structure

I have a root folder *mono-mf-yarn* where I have the `package.json` file describing the monorepo packages placed inside the *packages* folder.

#### Packages

The projects inside the *packages* folder are:

- **host**: this is the shell React+Typescript application (webpack federated module)


- **remote-one**: this is a remote React+Typescript application (webpack federated module)


- **library**: this is a React+Typescript component library. It's bundled with rollup.js, published on Github packages.

***

## Main features

### Library live reload

The *library* dependency can be installed from Github packages registry.
While developing it can be build locally and used as dependency in other projects, the *host* for example. The rollup **watch** feature rebuild the library when a change is made. This allows to have the live reload feature.

#### How it works
If the *library* version in the `package.json` of the *host* matches the version of the *library* in his `package.json`, it uses the local one, otherwise it downloads it from the registry.
 
*WARNING*: After changing the version you want to use you have to update the dependencies using `yarn` or `yarn install` command.

#### Steps to follow

- To run the project with the remote *library* dependency:
  1. install the remote dependency with `yarn` command
  2. from *host* folder run `yarn start` to start the project locally


- To run the project with the local *library* dependency and live reload:
  1. install the local dependency with `yarn` command
  2. from *library* folder run `yarn start` to build the project and have watch functionality active to rebuild on change
  3. from *host* folder run `yarn start` to start the project locally

### Publish on Github packages with yarn

It's possible to publish a packaheg to Github packages registry with yarn. To publish follow this [guide](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages).

The working example of the *library* project is based on files: `package.json`, `.npmrc`.

The command line to execute to publish is `yarn publish` from the folder project.
