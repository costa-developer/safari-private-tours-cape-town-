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
                        As a community of Catholic immigrants from Zimbabwe within the Archdiocese of Cape Town, we strive to be faithful disciples of Christ. We seek to live out our faith through our words and actions, sharing the Gospel with others and witnessing to the love of God.
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
