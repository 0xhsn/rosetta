# 🌸 Rosetta

In the mission of creating a performant, pretty, and functional Arabic supported theme. Mainly for Wordpress but you can go static/serverless. This project was bootstrapped with [Frontity](https://frontity.org/).

### Demo
https://frontity-0xhsn.vercel.app/

### ⚙️  Launch a development server

Create a `.env` with `WORDPRESS_APP_URL` variable pointing to your WordPress URL, use `https://test.frontity.org/` for testing/experimental data.
```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

### 🔄 Deploy

With the files generated in the _build_ you can deploy your project.

#### As a node app

Use `npx frontity serve` to run it like a normal Node app.

This command generates (and runs) a small web server that uses the generated `server.js` and `/static` to serve your content.

#### As a serverless service

Upload your `static` folder to a CDN and your `server.js` file to a serverless service, like Vercel or Netlify.

> Get more info about [how to deploy](https://docs.frontity.org/deployment) a Frontity project

### 🧑🏻‍💻 TODO: 
- [ ] RTL
- [ ] Tailwind CSS
- [ ] Logo Placeholder
- [ ] Footer
- [ ] Slideshow
- [ ] Socail Media Share Widget for Articls
- [ ] Dark Mode
- [ ] Unit Testing

### 🔗 Helpful Links:
- [frontity-examples](https://github.com/frontity-demos/frontity-examples)
- [tailwindcss-rtl](https://www.npmjs.com/package/tailwindcss-rtl)
