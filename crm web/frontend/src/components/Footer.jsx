import { Mail } from 'lucide-react';
import logo from '@/assets/zenxai-logo.png';

const Footer = () => {
  return (
    <footer id="main-footer" className="py-10 md:py-16 bg-slate-950/90 border-t border-glass-border/30 relative z-20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        {/* Legal & Copyright */}
        <div className="mt-8">
          <p className="text-sm text-muted-foreground text-center font-medium">
            Copyright © Hexite Technologies Private Limited, 2025. All rights reserved.
          </p>
          <br />
          <p className="text-xs text-muted-foreground/50 text-center max-w-4xl mx-auto leading-relaxed mb-6">
            All content provided on this page is for informational and promotional purposes only.
            Results may vary and are not guaranteed. Please review our Privacy Policy and Terms of Service
            to understand how we protect your data and the terms of our custom development agreements.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
