
export default async function sitemap() {

    const apiPoint = process.env.NODE_ENV === "development" ? process.env.LOCAL_URL : process.env.HOST_URL;

    const staticPages = [
        {
            url: `${apiPoint}about-us`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${apiPoint}contact-us`,
            lastModified: new Date().toISOString(),
        },
    ];

    return [
        {
            url: `${apiPoint}`,
            lastModified: new Date(),
        },
        // ...tourDetails,
        // ...blogDetails,
        ...staticPages,
    ]
}