# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# React Project with Vite

This is a React project bootstrapped with Vite. Vite is a build tool that offers a fast development server and optimized production build for modern JavaScript projects.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/vietcoder1998/youtub-share-fe.git
   ```

## Install dependencies:

```
npm install

```

## Start the evelopment server

```
npm run dev

```


## Environment Variables

```
REACT_APP_BASE_URL="http://localhost:5173"
REACT_APP_BASE_API="http://localhost:3032"
```


## Available Scripts


In the project directory, you can run:

* `npm run dev`: Runs the app in development mode.
* `npm run build`: Builds the app for production.
* `npm run serve`: Serves the production build locally.
* `npm run lint`: Lints the project files using ESLint.
* `npm run format`: Formats the project files using Prettier.


## License


This project is licensed under the MIT License - see the [LICENSE]() file for details.

```

Feel free to customize this README.md file according to your project's specific needs!

```
