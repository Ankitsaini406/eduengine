export default async function sitemap() {
    const apiPoint =
        process.env.NODE_ENV === "development"
            ? 'http://localhost:3002/'
            : 'https://eduengine.in/';

    const staticPages = [
        `${apiPoint}`,
        `${apiPoint}about-us`,
        `${apiPoint}contact-us`,
        `${apiPoint}careers`,
        `${apiPoint}services/app-development`,
        `${apiPoint}services/cloud-computing`,
        `${apiPoint}services/cyber-security`,
        `${apiPoint}services/machine-learning`,
        `${apiPoint}services/graphic-design`,
        `${apiPoint}services/web-development`,
    ];

    return staticPages.map((url) => ({
        url,
        lastModified: new Date().toISOString(),
    }));
}