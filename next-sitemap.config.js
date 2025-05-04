import sanityClient from "@/lib/sanityClient";

async function getSanityPages() {
    const query = '*[_type == "page"]{ "slug": slug.current }';
    const pages = await sanityClient.fetch(query);
    return pages.map(page => `https://www.smuoverlander.it/${page.slug}`);
}

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
    async additionalPaths() {
        const sanityPages = await getSanityPages();
        return sanityPages.map(pageUrl => ({
            loc: pageUrl,
            changefreq: 'daily',
            priority: 0.7,
        }));
    },
};
