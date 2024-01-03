# Contributing

## Prerequisites

- Read this repository [wiki]()
- [Deno](https://deno.com/) (^1.39.1)
- [Visual Studio Code](https://code.visualstudio.com/)
  - [Deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)

<!-- - [Node.js](https://nodejs.org/en) (^20.10.0)
  - [Biome](https://biomejs.dev/) -->

## PRs

### Vendor dependencies

[Production software should always vendor its dependencies.](https://docs.deno.com/runtime/manual/basics/modules#but-what-if-the-host-of-the-url-goes-down-the-source-wont-be-available)
Therefore run [`deno vendor`](https://docs.deno.com/runtime/manual/tools/vendor)

### Testing

Please ensure your PR passes tests with `yarn test:all`. Also please ensure the
Deno code is generated with `yarn denoify`.

## Deployment

### Publish to NPM

You can develop and test all your code in Deno and TypeScript. When it’s time to
publish, you can use dnt to export it to Node.js/npm-compatible format.

See
[Cross-runtime modules with dnt](https://docs.deno.com/runtime/manual/advanced/publishing/dnt)
