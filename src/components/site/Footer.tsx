import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import logo from "@/assets/arise-logo-pdf-transparent.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border pt-16 pb-10 md:pt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-mint/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 pb-12 lg:grid-cols-12 lg:pb-14">
          <div className="lg:col-span-5">
            <div className="mb-5 inline-flex">
              <img
                src={logo}
                alt="Arise Physio"
                className="h-16 w-auto max-w-[300px] object-contain drop-shadow-[0_0_20px_oklch(0.68_0.24_25/0.2)]"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              A boutique clinic redefining recovery in Jaipur through evidence-based physiotherapy
              and uncompromising patient care.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, href: "https://www.instagram.com/arisephysiojpr" },
                { icon: Facebook, href: "#" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noreferrer"}
                  className="h-9 w-9 rounded-full glass flex items-center justify-center hover:border-mint/50 hover:text-mint transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-mint mb-5">Explore</div>
            <ul className="space-y-3 text-sm">
              {[
                ["#about", "Clinic"],
                ["#doctor", "Doctor"],
                ["#services", "Services"],
                ["#team", "Team"],
                ["#contact", "Book Visit"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="text-muted-foreground hover:text-mint transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-mint mb-5">Contact</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-3.5 w-3.5 text-mint" />
                <span className="flex flex-wrap gap-x-2 gap-y-1">
                  <a href="tel:+918529197961" className="hover:text-mint transition-colors">
                    +91 85291 97961
                  </a>
                  <span>/</span>
                  <a href="tel:+917976779324" className="hover:text-mint transition-colors">
                    +91 79767 79324
                  </a>
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/918529197961"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-mint transition-colors"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 text-mint" />
                  WhatsApp available
                </a>
              </li>
              <li>
                <a
                  href="mailto:arisephysiojpr@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-mint transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-mint" />
                  arisephysiojpr@gmail.com
                </a>
              </li>
            </ul>
            <a
              href="https://www.google.com/maps/place/Arise+physiotherapy/@26.8610802,75.7160345,17z/data=!3m1!4b1!4m6!3m5!1s0x396db5381355c81f:0x40a1b1ce2536bfb3!8m2!3d26.8610802!4d75.7183808!16s%2Fg%2F11z6bjvcmk?authuser=1&entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="mt-5 block text-sm text-muted-foreground hover:text-mint transition-colors"
            >
              39, Narayan Sagar A<br />
              Narayan Vihar, Jaipur, Rajasthan 302020
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Arise Physiotherapy. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
