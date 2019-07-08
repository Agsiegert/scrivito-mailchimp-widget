# scrivito-mailchimp-lambda-widget
A Scrivito widget including a Mailchimp mailing list signup via lambda function

[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![GitHub last commit](https://img.shields.io/github/last-commit/Agsiegert/scrivito-mailchimp-widget.svg)](https://github.com/Agsiegert/scrivito-mailchimp-widget) [![GitHub top language](https://img.shields.io/github/languages/top/Agsiegert/scrivito-mailchimp-widget.svg)](https://github.com/Agsiegert/scrivito-mailchimp-widget)

## Screenshot

![screenshot](https://raw.githubusercontent.com/agsiegert/scrivito-mailchimp-widget/master/mailchimp-screenshot.png)

## Installation

Install the package in your scrivito app:

```shell
$ npm install scrivito-mailchimp-widget
```

Import the widget in your javascript (e.g. in `src/Widgets/index.js`):

```js
import "scrivito-mailchimp-widget";
```

## To use this widget

This widget is designed to be used with Netlify Functions. To do so add or update the following to your `netlify.toml` file:
```toml
  command = "npm run build && npm run build:lambda"
  functions = "lambda"
```
Then add these scripts to your `package.json` file:
```json
  "build:lambda": "netlify-lambda build src/lambda",
  "start:lambda": "netlify-lambda serve src/lambda",
```
Then extract the `lambda/` folder and contents from
```shell
  /node_modules/scrivito-mailchimp-widget/src/
```
and set it at the root level of your project in `/src/`.
ie:
```shell
 $ cp -r node_modules/scrivito-mailchimp-widget/src/lambda src/
```

Finally, you will need to add your Mailchimp credentials for your list to the the Environment variables in your Netlify dashboard.
```shell
  MAILCHIMP_API_KEY
  MAILCHIMP_LIST_ID
  MAILCHIMP_REGION
```


## Widget Configuration
In the widget properties you can set:
- Submit button text

## Check code quality

```shell
$ npm run eslint
```
and
```shell
$ npm run es-check
```
