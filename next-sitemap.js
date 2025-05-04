/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.smuoverlander.it',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    alternateRefs: [
        {
            href: 'https://www.smuoverlander.it/en',
            hreflang: 'en',
        },
    ],
}
