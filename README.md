# font64-loader

Inlines fonts in base64 encoding to prevent another network call.

## Installation
`npm install --save font64-loader`

## Basic Usage
```
    module: {
        loaders: {
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: "font64-loader"
            } 
        }
    }
```

## Usage with *sass-loader*

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

Quick install: `npm install --save style-loader css-loader resolve-url-loader sass-loader font64-loader`

For webpack to use the `font64-loader` in this instance, installing [resolve-url-loader](https://github.com/bholloway/resolve-url-loader), enabling `source-map`, and passing it to the `sass-loader` is a must. 