import logo from '@/assets/zenxai-logo.png';

const FixedLogo = () => {
    return (
        <div className="absolute top-0 left-2 md:left-0 z-[100] animate-fade-in pointer-events-none lg:pointer-events-auto">
            <a href="/" className="block group pointer-events-auto">
                <img
                    src={logo}
                    alt="ZenXai Logo"
                    className="h-28 md:h-36 w-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
            </a>
        </div>
    );
};

export default FixedLogo;
