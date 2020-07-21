<h1 align="center"> @involvestecnologia/scraper-lib </h1>

<hr/>

<p> A lib to ensure the best config and tools when using puppeteer. </p>

<h3> List of features </h3>

<ul>
  <li>Applies various evasion techniques to make detection of headless puppeteer harder.</li>
  <li>Very fast & efficient blocker for ads and trackers. Reduces bandwidth & load times.</li>
  <li>Utility functions like loadUrl</li>
</ul>

<h3> Code Demo </h3>

```js

const scraperLib = require('@involvestecnologia/scraper-lib');
const puppeteer = scraperLib.newPuppeteer();
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
const homePage = await scraperLib.loadUrl(page, 'http://google.com');

```


<h3> Download & Installation </h3>

```shell
$ npm i @involvestecnologia/scraper-lib
```

<h3>Contributing</h3>
Keep it simple. Keep it minimal.