'use strict';

const cheerio = require('cheerio');
const puppeteer = require('puppeteer-extra');

module.exports.newPuppeteer = () => {
    // Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
    const StealthPlugin = require('puppeteer-extra-plugin-stealth');
    puppeteer.use(StealthPlugin());

    // Add adblocker plugin to block all ads and trackers (saves bandwidth)
    const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
    puppeteer.use(AdblockerPlugin({ blockTrackers: true }));
    return puppeteer;
}

module.exports.loadUrl = async (page, url) => {
    try {
        await page.goto(url, {
            timeout: 20000,
            waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
        })
        const content = await page.content();
        return cheerio.load(content);
    } catch (error) {
        throw new Error("url " + url + " url not loaded -> " + error)
    }
}