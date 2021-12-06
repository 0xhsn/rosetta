import { config } from "dotenv";

// Launch dot-env.
config();

const settings = {
  "name": "Rosetta",
  "state": {
    "frontity": {
      "url": process.env.WORDPRESS_APP_URL,
      "title": "Rosetta",
      "description": "Multilingual Frontity Template"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "About Us",
              "/about-us/"
            ],
            [
              "Arabic",
              "/category/ar/"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": process.env.WORDPRESS_APP_URL 
        }
      }
    },
    {
    "name": "@frontity/tiny-router",
    "state": {
      "router": {
        "autoFetch": true
       }
     }
    },
    "@frontity/html2react"
  ]
};

export default settings;
