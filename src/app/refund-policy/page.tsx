import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Refund Policy | Eduengine Technologies Pvt. Ltd.",
        description:
            "Read Eduengine's refund and return policy to understand your rights regarding returns, cancellations, and reimbursements for products and services.",
        alternates: {
            canonical: "https://eduengine.in/refund-policy",
        },
        keywords: [
            "Eduengine Refund Policy",
            "Return Policy",
            "Order Cancellation",
            "Product Returns",
            "Refund Process",
            "Reimbursement Policy",
            "Eduengine Returns",
            "Refund Terms",
            "Customer Rights",
            "Money Back Guarantee",
        ],
        openGraph: {
            title: "Refund Policy | Eduengine - Returns & Cancellations",
            description:
                "Learn about Eduengine's refund and return policy, including eligibility, process, and timelines for returns and reimbursements.",
            url: "https://eduengine.in/refund-policy",
            type: "website",
            // images: [
            //     {
            //         url: "https://eduengine.in/refund-policy-hero.webp", // Replace with your actual refund policy image
            //         width: 1200,
            //         height: 630,
            //         alt: "Eduengine Refund Policy",
            //     },
            // ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Refund Policy | Eduengine Returns & Cancellations",
            description:
                "Review Eduengine's refund and return policy for information on returns, cancellations, and customer reimbursements.",
        },
    };
};


export default async function Page() {
    return (
        <main className="py-20 px-3">
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center text-foreground mb-8">Return and Refund Policy</h1>
                <p className="text-foreground">Last updated: June 26, 2025</p>
                <p className="text-foreground mt-4">Thank you for shopping at EduEngine.</p>
                <p className="text-foreground">If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns.</p>
                <p className="text-foreground">The following terms are applicable for any products that You purchased with Us.</p>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Interpretation and Definitions</h2>
                <h3 className="text-xl font-semibold text-foreground mb-2">Interpretation</h3>
                <p className="text-foreground">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                <h3 className="text-xl font-semibold text-foreground mb-2">Definitions</h3>
                <p className="text-foreground">For the purposes of this Return and Refund Policy:</p>
                <ul className="list-disc list-inside text-foreground space-y-4">
                    <li><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to EduEngine.</li>
                    <li><strong>Goods</strong> refer to the items offered for sale on the Service.</li>
                    <li><strong>Orders</strong> mean a request by You to purchase Goods from Us.</li>
                    <li><strong>Service</strong> refers to the Website.</li>
                    <li><strong>Website</strong> refers to EduEngine, accessible from <a href="https://eduengine.in/" rel="external nofollow noopener" target="_blank" className="text-blue-500 hover:underline">https://eduengine.in/</a></li>
                    <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Your Order Cancellation Rights</h2>
                <p className="text-foreground">You are entitled to cancel Your Order within 7 days without giving any reason for doing so.</p>
                <p className="text-foreground">The deadline for cancelling an Order is 7 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.</p>
                <p className="text-foreground">In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:</p>
                <ul className="list-disc list-inside text-foreground space-y-4">
                    <li>By email: director@eduengine.com</li>
                    <li>By visiting this page on our website: <a href="https://eduengine.in/contact-us" rel="external nofollow noopener" target="_blank" className="text-blue-500 hover:underline">https://eduengine.in/contact-us</a></li>
                </ul>
                <p className="text-foreground">We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.</p>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Conditions for Returns</h2>
                <p className="text-foreground">In order for the Goods to be eligible for a return, please make sure that:</p>
                <ul className="list-disc list-inside text-foreground space-y-4">
                    <li>The Goods were purchased in the last 7 days</li>
                    <li>The Goods are in the original packaging</li>
                </ul>
                <p className="text-foreground">The following Goods cannot be returned:</p>
                <ul className="list-disc list-inside text-foreground space-y-4">
                    <li>The supply of Goods made to Your specifications or clearly personalized.</li>
                    <li>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
                    <li>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                    <li>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
                </ul>
                <p className="text-foreground">We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</p>
                <p className="text-foreground">Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.</p>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Returning Goods</h2>
                <p className="text-foreground">You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:</p>
                <p className="text-foreground">Chandpol, Sikar (Rajasthan) - 332001</p>
                <p className="text-foreground">We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.</p>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Gifts</h2>
                <p className="text-foreground">If the Goods were marked as a gift when purchased and then shipped directly to you, You&apos;ll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.</p>
                <p className="text-foreground">If the Goods weren&apos;t marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.</p>
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-2">Contact Us</h3>
                <p className="text-foreground">If you have any questions about our Returns and Refunds Policy, please contact us:</p>
                <ul className="list-disc list-inside text-foreground space-y-4">
                    <li>By email: director@eduengine.com</li>
                    <li>By visiting this page on our website: <a href="https://eduengine.in/contact-us" rel="external nofollow noopener" target="_blank" className="text-blue-500 hover:underline">https://eduengine.in/contact-us</a></li>
                </ul>
            </div>
        </main>
    )
}