# Developing
## Tools for developing
* [Visual Studio Code](https://visualstudio.microsoft.com/de/vs/)
* [NodeJS + NPM](https://nodejs.org/en/download/)

→ Also checkout the [building guide](Building.md)


## Setup
Install dependencies using
```bash
npm i
```

## Developing

### Building
The project uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of your component:
```bash
npm run build
```

To watch files and rebuild when the files are modified, run the following command in a separate shell:
```bash
npm run build:watch
```

### Dev Server

This sample uses modern-web.dev's [@web/dev-server](https://www.npmjs.com/package/@web/dev-server) for previewing the project without additional build steps. Web Dev Server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers. See [modern-web.dev's Web Dev Server documentation](https://modern-web.dev/docs/dev-server/overview/) for more information.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html.

### Editing

If you use VS Code, we highly reccomend the [lit-plugin extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin), which enables some extremely useful features for lit-html templates:

- Syntax highlighting
- Type-checking
- Code completion
- Hover-over docs
- Jump to definition
- Linting
- Quick Fixes

The project is setup to reccomend lit-plugin to VS Code users if they don't already have it installed.

### Linting

Linting of TypeScript files is provided by [ESLint](eslint.org) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin.

To lint the project run:

```bash
npm run lint
```

### Docs
This project includes - mostly for documentation purposes -  a simple website generated with the [eleventy](11ty.dev) static site generator and the templates and pages in `/docs-src`. The site is generated into `/docs-gen`.

To build the site, run:

```bash
npm run docs
```

To serve the site locally, run:

```bash
npm run docs:serve
```

To watch the site files, and re-build automatically, run:

```bash
npm run docs:gen:watch
```

The site will usually be served at http://localhost:8000.


## Steps to do before merging/pushing code
Make sure that the project
1. is buildable
    ```bash
    npm run build
    ```
2. is linted 
    ```bash
    npm run lint
    ```
3. is formatted correctly
    ```bash
    npm run format
    ```
4. the docs are working
    ```bash
    npm run docs
    ```
5. has no uncommited files

Based on https://github.com/lit/lit-element-starter-ts
