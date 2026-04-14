import React from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="py-12 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-secondary font-bold text-xs">CW</span>
            </div>
            <span className="font-bold text-foreground tracking-tight">ClearWave</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
          </div>

          {/* Contact */}
          <a
            href="mailto:hello@clearwave.africa"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
          >
            <Mail className="w-4 h-4" />
            hello@clearwave.africa
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ClearWave. Built with ❤️ for African legal professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}