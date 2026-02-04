import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const FixedFooter = () => {
    const location = useLocation();
    const [footerOffset, setFooterOffset] = React.useState(0);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Determine how much of the main footer is visible
                if (entry.isIntersecting) {
                    const visibleHeight = entry.intersectionRect.height;
                    setFooterOffset(visibleHeight);
                } else {
                    setFooterOffset(0);
                }
            },
            {
                // Monitor the entire scroll range for the footer
                threshold: Array.from({ length: 101 }, (_, i) => i / 100),
            }
        );

        const footer = document.getElementById('main-footer');
        if (footer) {
            observer.observe(footer);
        }

        return () => {
            if (footer) {
                observer.unobserve(footer);
            }
        };
    }, []);

    // Hide the fixed footer on the booking page itself
    if (location.pathname === '/start-crm') {
        return null;
    }

    return (
        <div
            className="fixed left-0 right-0 z-[100] w-full flex justify-center p-6 sm:pb-8 animate-fade-up pointer-events-none transition-all duration-75 ease-out"
            style={{ bottom: `${footerOffset}px` }}
        >
            <div className="glass-card w-full max-w-5xl p-4 md:px-10 md:py-5 flex flex-col md:flex-row items-center justify-between gap-6 border-primary/20 bg-background/60 backdrop-blur-2xl shadow-[0_0_50px_rgba(var(--primary),0.15)] pointer-events-auto">
                <div className="flex items-center gap-4 text-center md:text-left">
                    <div className="hidden sm:flex w-10 h-10 rounded-full bg-primary/10 items-center justify-center">
                        <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-foreground">
                            Ready to transform your business?
                        </p>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">
                            Join 500+ companies growing with ZenXai
                        </p>
                    </div>
                </div>

                <Link
                    to="/start-crm"
                    className="btn-primary flex items-center gap-2 px-8 py-3 text-sm font-bold whitespace-nowrap group hover:scale-105 transition-all duration-300"
                >
                    Book a call
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
};

export default FixedFooter;
