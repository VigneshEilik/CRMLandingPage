import React from 'react';
import { Layout } from 'lucide-react';

// Import images
import aifortn2 from '@/assets/aifortn/aifortn2.jpeg';
import aifortnF7 from '@/assets/aifortn/f7hxcmqdsy5hqbjn8waw.jpeg';
import aifortn6 from '@/assets/aifortn/aifortn6.jpeg';

const PreviousProductsSection = () => {
    const products = [
        { id: 1, image: aifortn2, title: 'AI For Tamil Nadu -1' },
        { id: 2, image: aifortnF7, title: 'AI For Tamil Nadu -2' },
        { id: 3, image: aifortn6, title: 'AI For Tamil Nadu -3' },
    ];

    return (
        <section className="py-12 md:py-24 relative">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-glow-secondary/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Our <span className="gradient-text">Previous Workshops</span>
                    </h2>
                    <p className="text-muted-foreground text-lg animate-fade-up animate-delay-100">
                        Explore our track record of delivering high-performance CRM systems and business automation tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="animate-fade-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="glass-card group relative aspect-[16/10] overflow-hidden border-glass-border hover:border-primary/50 transition-all duration-500 shadow-xl cursor-default">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {product.title}
                                    </h3>
                                </div>

                                {/* Subtle Border Interaction */}
                                <div className="absolute inset-0 border-[1px] border-white/10 group-hover:border-primary/30 rounded-xl pointer-events-none transition-colors duration-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PreviousProductsSection;
