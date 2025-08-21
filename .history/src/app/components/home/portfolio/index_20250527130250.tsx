import "swiper/css";
import Projectswiper from "./projectswiper";

function Portfolio() {
    return (
        <section className="bg-lightgray dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-24">
                        <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                            <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">02</span>
                                <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                                <p className="section-bedge py-1.5 px-4 rounded-full">Portfolio</p>
                            </div>
                            <div className="flex flex-col gap-11">
                                <div className="flex flex-col gap-5 ">
                                    <h2 className="max-w-3xl">Featured projects</h2>
                                    <p className="max-w-2xl text-secondary/70 dark:text-white/70">A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-3.5">
                    <Projectswiper/>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
