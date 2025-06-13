
export default function robots() {

    const apiPoint = process.env.NODE_ENV === "development" ? process.env.LOCAL_URL : process.env.HOST_URL;

    return {
        rules: {
            userAgent: '*',
            allow: ["/"],
            disallow: [],
        },
        sitemap: `${apiPoint}sitemap.xml`,
    }
}