# ui

### React component library using styled-components

A component library developed using React and styled-components to enable easy use across multiple projects.

### Usage

`yarn add @g_neal88/ui`

This package has the following peer dependencies:

- styled-components
- react

Make sure both are installed in your project to avoid issues.

### Development

**Clone the repo:**

```sh
git clone https://github.com/GeoffNeal/ui.git
cd ui
```

_N.B: Make sure you are using Node v20 or above_

**Install dependencies**

`yarn install`

**Develop using storybook**

This library uses storybook to develop the UI. To start the storybook server, run the following command:

`yarn storybook`

This should then open a window with the storybook components at http://localhost:6006/

As you develop a component updates will be shown here.

**Testing**

`yarn test`

This project uses Jest and React Testing Library

**To publish**

To create a new version of the package, run `yarn changeset`, this will prompt you to provide details of the release.

Commit and push the generated file to a new PR into main. Once merged changeset will create a release PR with the version bump and the updated CHANGELOG.md

Merge the release PR and the package will be published to NPM automatically.
