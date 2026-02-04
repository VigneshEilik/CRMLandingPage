import React from 'react';
import { Sparkles } from 'lucide-react';

const TestimonialsSection = () => {
    // 3 slots for YouTube Shorts
    const videoTestimonials = [
        { id: '1', videoId: 'https://youtube.com/shorts/Z8gyUz6WICU?feature=share' },
        { id: '2', videoId: 'https://youtube.com/shorts/CoGrsGR7Lts?feature=share' },
        { id: '3', videoId: 'https://youtube.com/shorts/BvFzJr-wltk?feature=share' },
    ];

    const getYouTubeId = (url) => {
        if (!url) return null;
        const match = url.match(/(?:shorts\/|v=|\/embed\/|youtu\.be\/|\/v\/|\/e\/|watch\?v=|\&v=)([^#\&\?]*)/);
        return (match && match[1].length === 11) ? match[1] : url;
    };

    return (
        <section className="py-12 md:py-24 relative">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-glow-primary/10 rounded-full blur-[120px] animate-pulse-glow" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
                    <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 animate-fade-up">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Client Stories</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        From Our Trusted <span className="gradient-text">Clients</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {videoTestimonials.map((video) => {
                        const embedId = getYouTubeId(video.videoId);
                        return (
                            <div key={video.id} className="animate-fade-up group">
                                <div className="glass-card transition-all duration-300 overflow-hidden border-glass-border hover:border-primary/30 shadow-lg">
                                    {/* Video Container (Vertical Portrait for Shorts) */}
                                    <div className="relative aspect-[7/12] bg-slate-900 overflow-hidden">
                                        {embedId ? (
                                            <iframe
                                                className="absolute inset-0 w-full h-full"
                                                src={`https://www.youtube-nocookie.com/embed/${embedId}?modestbranding=1&rel=0&origin=${window.location.origin}`}
                                                title={`Testimonial ${video.id}`}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                loading="lazy"
                                            />
                                        ) : (
                                            <>
                                                {/* Decorative Placeholder */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                                                <div className="absolute inset-0 grid-pattern opacity-20" />
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
