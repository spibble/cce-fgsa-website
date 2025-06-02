# cce-fgsa-website
A (mock) website for the First Generation Student Alliance club at UCSD. This was created for UCSD CCE 3's Core Assignment 2 as the "collaborative text" portion of the assignment - we chose to recreate the website "genre." 

<div align="center">
  <img src="./public/fgsa.gif" alt="GIF of the website's front page">
</div>

## 🌐 Visit
If the badge below is green, then the project is currently being hosted on https://fgsa-at-ucsd.netlify.app. Feel free to pay it a visit!

[![Netlify Status](https://api.netlify.com/api/v1/badges/df62fd8d-1039-4669-b6cf-d3344d43da5d/deploy-status)](https://app.netlify.com/sites/fgsa-at-ucsd/deploys)

If the badge above is not green, and/or the website is not being hosted, you can still clone the repo and serve it locally if you wanna check it out! To do so, you can follow these steps:

1. Clone the repository into a directory of your choosing:
```
git clone https://github.com/spibble/cce-fgsa-website.git
```
2. Install dependencies (i.e., 11ty, Sass):
```
npm install
```
3. Serve the site locally:
```
npm run start
```
4. If everything is well, Eleventy will build the site and then you will see `[11ty] Server at http://localhost:8080/` in your terminal. Here, `http://localhost:8080/` is the URL that the website is being served on, so open it in your web browser and then you can play around with the site!

## 🛠️ Technologies

| Tech                                            | Purpose                                     |
|-------------------------------------------------|---------------------------------------------|
| [Eleventy](https://www.11ty.dev)                | Static site generation, project structure   |
| [Nunjucks](https://mozilla.github.io/nunjucks/) | Page & component templating language        |
| [SCSS](https://sass-lang.com)                   | Styling language (it's just CSS but nicer)  |
| JavaScript                                      | Extra responsiveness, interactive elements  |
| [Netlify](https://www.netlify.com)              | "Backend" to host the website remotely      |

## 📁 Project Structure

For those who are curious, at a glance, the project looks like this:
```
.
├── src                   
│   ├── _data             // JSON data that gets filled in the components
│   ├── _includes         
│   │   ├── components    // Nunjucks partials for reusable components
│   │   ├── layouts       // Nunjucks partials for pages to extend
│   │   └── words         // Markdown files for long-form written content in pages
│   ├── assets            
│   │   ├── images        // Images and icons for the site
│   │   └── scss          // Stylesheets that get compiled into main.css
│   └── pages             // Nunjucks layouts for each page of the site
├── .eleventy.js          // Eleventy config and rules
└── .package.json         // npm config, scripts, dependencies, etc.
