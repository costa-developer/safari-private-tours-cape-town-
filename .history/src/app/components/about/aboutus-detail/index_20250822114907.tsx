const AboutusDetail = () => {
    return (
        <section className="py-10 md:py-20 xl:py-40 dark:bg-secondary">
            <div className='container'>
                <div className='flex flex-col xl:flex-row gap-8'>
                    <div className='max-w-xl w-full'>
                        <h2 className='text-56'>About Us</h2>
                    </div>
                    <div className='flex flex-col gap-12'>
                        <p className="text-secondary dark:text-white">
                            We are a vibrant community of Zimbabwean Catholics living in Cape Town, united by our faith 
                            and commitment to Christ. We strive to live out our beliefs through prayer, worship, and service, 
                            sharing God’s love with everyone we meet and bearing witness to His mercy in our daily lives.
                        </p>
                        <p className='text-secondary dark:text-white'>
                            While we embrace our Zimbabwean heritage, we also cherish our unity with the local Church and society. 
                            Through fellowship, spiritual growth programs, and community events, we support one another in our faith 
                            journeys, fostering a welcoming and inclusive environment. Our mission is to strengthen our collective faith, 
                            celebrate our culture, and contribute meaningfully to the Catholic life of the Archdiocese of Cape Town.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutusDetail;
