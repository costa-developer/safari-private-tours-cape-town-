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
                            We are a community of Zimbabwean Catholics in Cape Town, striving to live faithfully in Christ 
                            and share His love through our words and actions.
                        </p>
                        <p className='text-secondary dark:text-white'>
                            We embrace our Zimbabwean heritage while uniting with the local Church. Through prayer, fellowship, 
                            and shared experiences, we support one another in faith and contribute to the vibrant Catholic life 
                            within the Archdiocese.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutusDetail;
