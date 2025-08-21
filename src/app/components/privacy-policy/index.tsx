"use client"

import Link from "next/link"

function PrivacyPolicy() {
    return (
        <section>
            <div className="relative w-full dark:bg-darkblack">
                <div className="container">
                    <div className='flex flex-col gap-1.5 py-10 md:py-20'>
                        <p>
                            This Privacy Statement explains how personal information about our (potential) customers and other individuals using our services is collected, used, and disclosed by **Getnextjs Template** ("us", "we", "our"). This Privacy Statement describes our privacy practices in relation to the use of our websites, including any customer portals or interactive websites (
                            <Link href="https://nextjs.org/">https://getnextjstemplates.com/</Link>), our software (Next.js), services, solutions, tools, and related applications, services, and programs, including research and marketing activities, offered by us (the "Services").
                        </p>

                        <p>
                            By signing up for our Services and agreeing to our General Terms and Conditions, you consent to the collection, usage, storage, and disclosure of your information as described in this Privacy Statement.
                        </p>

                        <p>
                            Our Services may contain links to external websites or services. The privacy practices and content of such sites or services will be governed by their respective privacy policies.
                        </p>

                        <p>
                            We may update this Privacy Statement periodically. If changes occur, we will notify you by updating the date at the top of the statement and providing additional notifications (such as a statement on our homepage or an email notification). We encourage you to review this Privacy Statement whenever you use our Services to stay informed about how we handle your information.
                        </p>

                        <div className="my-6">
                            <h4 className="font-semibold">Personal Information Collection</h4>
                            <p className="mt-6">
                                While using our Services, we may ask you to provide certain personally identifiable information that can be used to contact or identify you. This may include basic user details (such as your name, email address, telephone number, and profile picture), company information, and any other data you choose to share with us.
                            </p>

                            <p>
                                We do not collect financial information (such as credit card details or security codes). All payments are handled through a third-party provider. If applicable, please refer to their Privacy Policy: 
                                <Link href="https://getnextjstemplates.com/">https://getnextjstemplates.com/</Link>.
                            </p>
                        </div>

                        <div className="my-6">
                            <h4 className="font-semibold">Personal Information You Provide to Us</h4>
                            <p className="mt-6">
                                When using our Services, you may provide personally identifiable information, such as when creating an account, requesting customer support, or interacting with our platform.
                            </p>
                            <p className="mt-6">
                                As noted, we do not collect financial details directly. Payments are processed via third-party providers. Please review their privacy policy for details: 
                                <Link href="https://getnextjstemplates.com/">https://getnextjstemplates.com/</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy;
