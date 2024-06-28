# Practical Algorithm Website

```sh
npm run dev    // development purpose
npm run expose // for testing on other devices on the same network
```

![blog](https://github.com/Practical-Algorithm/Practical_Website/blob/b4e2292cf7fad7aab668eaa07c6e416fe0dae73e/public/demo.png)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
│   ├── images/
├── src/
│   ├── components/
│   ├── icons/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run expose`          | Starts WiFi-local dev server at `yourIP:4321`    |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
