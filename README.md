[ ![Codeship Status for lousando/font64-loader](https://codeship.com/projects/b553acb0-9722-0133-1233-02c848466e78/status?branch=master)](https://codeship.com/projects/125689)

# font64-loader

Inlines fonts in base64 encoding to prevent another network call.

## Installation
`npm install --save font64-loader`

## Setup with *sass-loader*

```
   devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader?sourceMap"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: "font64-loader"
            }
        ]
    }
```

Quick install: 

`npm install --save style-loader css-loader resolve-url-loader sass-loader font64-loader`

For webpack to use the `font64-loader` in this instance:
    * install: [resolve-url-loader](https://github.com/bholloway/resolve-url-loader)
    * enable `source-map` with `dev-tool`
    * and pass `?sourceMap` to the `sass-loader`. 

## Usage with *sass-loader*

"sample.scss"

```
    @font-face {
      font-family: cool-font;
      src: url("../fonts/cool-font.ttf"); // path relative to "sample.scss"
    }
```