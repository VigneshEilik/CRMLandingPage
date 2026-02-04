import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, User, Phone, Mail, Sparkles, Building, MapPin, ExternalLink, Check } from 'lucide-react';
import { toast } from 'sonner';

const ProgressTracker = ({ currentStep }) => {
    const steps = [
        { id: 1, label: 'Your Details' },
        { id: 2, label: 'Watch & Book' }
    ];

    return (
        <div className="w-full max-w-xl mx-auto mb-8 md:mb-12 px-4">
            <div className="relative flex justify-between items-center">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 md:h-1 bg-glass-border/30 -translate-y-1/2 z-0 rounded-full" />
                <div
                    className="absolute top-1/2 left-0 h-0.5 md:h-1 bg-primary transition-all duration-700 ease-in-out -translate-y-1/2 z-0 rounded-full"
                    style={{ width: currentStep === 1 ? '50%' : '100%' }}
                />

                {steps.map((step) => (
                    <div key={step.id} className="relative z-10 flex flex-col items-center">
                        <div
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${currentStep >= step.id
                                ? 'bg-primary border-primary text-white shadow-[0_0_20px_rgba(var(--primary),0.4)]'
                                : 'bg-background border-glass-border text-muted-foreground'
                                }`}
                        >
                            {currentStep > step.id ? (
                                <Check className="w-5 h-5 md:w-6 md:h-6 stroke-[3]" />
                            ) : (
                                <span className="text-xs md:text-sm font-bold">{step.id}</span>
                            )}
                        </div>
                        <span className={`absolute -bottom-7 md:bottom-[-2rem] whitespace-nowrap text-[8px] md:text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${currentStep >= step.id ? 'text-primary' : 'text-muted-foreground opacity-50'
                            }`}>
                            {step.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const StartCRM = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        mobile: '',
        city: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form Submitted:', formData);
        setIsSubmitting(false);
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        toast.success("Details Submitted!", {
            description: "Now watch this brief video and book your session below.",
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 py-20 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />

                <div className="container mx-auto max-w-5xl relative z-10 px-0 md:px-6">
                    <ProgressTracker currentStep={2} />

                    <div className="mt-4 md:mt-12 text-center animate-fade-up">
                        {/* Video Box - Maximized for Mobile */}
                        <div className="relative aspect-video w-full mx-auto mb-8 md:mb-12 overflow-hidden shadow-2xl group">
                            <div className="relative h-full w-full bg-slate-900 border-0">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube-nocookie.com/embed/A2yDfVi8YsU?modestbranding=1&rel=0&autoplay=1"
                                    title="Success Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4 md:gap-6 px-6">
                            <a
                                href="https://harivikash-b.dayschedule.com/build-scale-your-own-crm-brand-in-60-days"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full max-w-md flex items-center justify-center gap-3 py-4 md:py-5 text-lg md:text-xl font-bold hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(var(--primary),0.3)]"
                            >
                                Book it Now
                                <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                            </a>

                            <button
                                onClick={() => navigate('/')}
                                className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm font-medium underline underline-offset-4"
                            >
                                Back to Website
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden py-12 md:py-24 px-4 md:px-6">
            {/* Background Effects */}
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-glow-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-glow-secondary/10 rounded-full blur-[80px] md:blur-[120px]" />

            <div className="container mx-auto max-w-2xl relative z-10">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 md:mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to Website
                </button>

                <ProgressTracker currentStep={1} />

                <div className="animate-fade-up mt-8 md:mt-16">
                    <div className="glass-card p-5 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />

                        <div className="mb-8 md:mb-10 text-center">
                            <div className="inline-flex items-center gap-2 glass-card px-3 md:px-4 py-1.5 mb-4 md:mb-6">
                                <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Limited Slots</span>
                            </div>
                            <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">
                                Secure Your <span className="gradient-text">Free Session</span>
                            </h1>
                            <p className="text-sm md:text-muted-foreground max-w-md mx-auto font-medium text-muted-foreground">
                                Provide your details below to unlock our exclusive strategy session calendar.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Full Name</label>
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-glow-primary/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-300" />
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-background/50 border border-glass-border rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Company Name</label>
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-glow-primary/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-300" />
                                        <div className="relative">
                                            <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                                            <input
                                                required
                                                type="text"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                className="w-full bg-background/50 border border-glass-border rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Work Email ID</label>
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-glow-primary/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-300" />
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-background/50 border border-glass-border rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Mobile Number</label>
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-glow-primary/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-300" />
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                                            <input
                                                required
                                                type="tel"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                className="w-full bg-background/50 border border-glass-border rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">City</label>
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-glow-primary/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-300" />
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                                            <input
                                                required
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="w-full bg-background/50 border border-glass-border rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg font-bold mt-6 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 group shadow-[0_15px_30px_rgba(var(--primary),0.2)]"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Submit and Continue
                                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:translate-x-1 rotate-180" />
                                    </>
                                )}
                            </button>

                            <p className="text-[10px] text-center text-muted-foreground mt-6 px-4 uppercase tracking-[0.2em] leading-relaxed opacity-60">
                                We value your privacy. Your data is encrypted and secure.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartCRM;
