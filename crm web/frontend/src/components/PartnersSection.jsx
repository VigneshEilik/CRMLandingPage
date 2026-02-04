import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from 'embla-carousel-auto-scroll';

// Import logos from the assets folder
// Note: Folder name "Assets logo" contains spaces
import logo1 from '../Assets logo/1.png';
import logo2 from '../Assets logo/2.png';
import logo3 from '../Assets logo/3.png';
import logo4 from '../Assets logo/4.png';
import logo5 from '../Assets logo/5.png';
import logo6 from '../Assets logo/6.png';
import logo7 from '../Assets logo/7.png';
import logo8 from '../Assets logo/8.png';
import logo9 from '../Assets logo/9.png';
import logo10 from '../Assets logo/10.png';
import logo11 from '../Assets logo/11.png';
import logo12 from '../Assets logo/12.png';
import logo13 from '../Assets logo/13.png';
import logo14 from '../Assets logo/14.png';

const PartnersSection = () => {
    const logos = [
        logo1, logo2, logo3, logo4, logo5, logo6, logo7,
        logo8, logo9, logo10, logo11, logo12, logo13, logo14
    ];


    return (
        <section className="py-10 md:py-16 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-8 md:mb-12">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em]">
                        Trusted by industry-leading partners
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    <Carousel
                        plugins={[
                            AutoScroll({
                                speed: 1,
                                stopOnInteraction: false,
                                stopOnMouseEnter: false,
                            })
                        ]}
                        opts={{
                            align: "start",
                            loop: true,
                            dragFree: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="flex items-center">
                            {logos.map((logo, index) => (
                                <CarouselItem key={index} className="pl-16 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/5">
                                    <div className="flex items-center justify-center p-8 transition-all duration-300 hover:scale-110">
                                        <img
                                            src={logo}
                                            alt={`Partner Logo ${index + 1}`}
                                            className="h-24 w-auto object-contain max-w-[220px]"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
