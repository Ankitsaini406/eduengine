
export async function GET() {

    const apiPoint = process.env.NODE_ENV === "development" ? process.env.LOCAL_URL : process.env.HOST_URL;

    const robots = `
        User-agent: *
        Allow: /
        Disallow: /admin/
        Sitemap: ${apiPoint}sitemap.xml
    `;

    
    return new Response(robots.trim(), {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}