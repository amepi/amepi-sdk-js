# Contributing

## Prerequisites

<!-- - Read this repository [wiki]() -->

- [Deno](https://deno.com/) (^1.39.2)
- [Visual Studio Code](https://code.visualstudio.com/)
  - [Enable (Workspace)](https://code.visualstudio.com/docs/editor/extension-marketplace#_enable-an-extension)
    the following vscode extensions:
    - [Deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
    - [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
  - See
    [workspace recommended extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)
    in the [.vscode/extensions.json](../.vscode/extensions.json) file

## Getting started

### Setup

#### Environment variables

##### Secret Manager

#### Debugging

### Managing dependencies

See
["Managing Dependencies"](https://docs.deno.com/runtime/tutorials/manage_dependencies)

See
["Using the debugger"](https://docs.deno.com/runtime/manual/references/vscode_deno#using-the-debugger)

## How to

### Prisma

This project uses the
[introspection workflow](https://www.prisma.io/docs/orm/prisma-schema/introspection#introspection-workflow).
Data Model is generated with
[the `prisma db pull` command](https://www.prisma.io/docs/orm/prisma-schema/introspection#the-prisma-db-pull-command)
and the prisma client is generated .

```Shell
# equivalent to prisma db pull command
deno task prisma:introspect
# equivalent to prisma generate command
deno task prisma:client
```

### Testing

Please ensure your PR passes tests with `yarn test:all`. Also please ensure the
Deno code is generated with `yarn denoify`.

## Commits and PRs

### Vendor dependencies

[Production software should always vendor its dependencies.](https://docs.deno.com/runtime/manual/basics/modules#but-what-if-the-host-of-the-url-goes-down-the-source-wont-be-available)
Therefore run [`deno vendor`](https://docs.deno.com/runtime/manual/tools/vendor)

### Package Versioning

Increment the module version in the [version.ts](../version.ts) file.

## Deployment

### Publish to NPM

You can develop and test all your code in Deno and TypeScript. When it’s time to
publish, you can use dnt to export it to Node.js/npm-compatible format.

See
[Cross-runtime modules with dnt](https://docs.deno.com/runtime/manual/advanced/publishing/dnt)

## Style Guide

### Git

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### JavaScript

- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

### Package Versioning

- [Semantic Versioning 2.0.0](https://semver.org/)
