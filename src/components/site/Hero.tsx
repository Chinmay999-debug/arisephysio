import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import body from "@/assets/hero-body-optimized.png";

const painPoints = [
  { top: "19%", left: "50%", side: "right", label: "Cervical", desc: "Neck & posture" },
  { top: "22.5%", left: "32%", side: "left", label: "Shoulder", desc: "Rotator cuff" },
  { top: "42%", left: "50%", side: "right", label: "Lumbar", desc: "Lower back" },
  { top: "71%", left: "57%", side: "right", label: "Knee", desc: "Patellofemoral" },
  { top: "47.5%", left: "18%", side: "left", label: "Wrist", desc: "Carpal tunnel" },
] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] pt-28 pb-16 overflow-hidden grain lg:pt-20 lg:pb-20"
    >
      {/* ambient gradients */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute top-1/2 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/15 blur-3xl sm:h-[680px] sm:w-[680px] lg:h-[800px] lg:w-[800px] lg:bg-mint/10" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:gap-10 lg:grid-cols-12 lg:items-start lg:px-8">
        {/* LEFT */}
        <div className="lg:col-span-6 relative z-10 lg:pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[clamp(3.4rem,15vw,5rem)] leading-[0.92] font-display sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Move again.
            <br />
            <span className="italic text-gradient-mint">Live</span> fully.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg"
          >
            Evidence-based physiotherapy by specialists who treat the cause, not the symptom.
            Personalised recovery plans for chronic pain, sports injuries, post-surgery and posture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9"
          >
            <a
              href="tel:+918529197961"
              className="group flex items-center gap-3 rounded-full bg-mint px-6 py-3.5 font-medium text-primary-foreground shadow-[0_0_35px_oklch(0.70_0.27_25/0.26)] transition-all hover:shadow-[0_0_50px_oklch(0.82_0.16_175/0.6)]"
            >
              <Phone className="h-4 w-4" />
              Call
              <ArrowRight className="h-4 w-4 -mr-1 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/918529197961"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full glass px-6 py-3.5 transition-all hover:border-mint/40"
            >
              <WhatsAppIcon className="h-4 w-4 text-mint" />
              WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-4 sm:mt-12 sm:gap-6"
          >
            {[
              { n: "2K+", l: "Sessions delivered" },
              { n: "98%", l: "Patient satisfaction" },
              { n: "2yr", l: "Clinical experience" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl text-gradient-mint sm:text-3xl">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-tight">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — body */}
        <div className="relative lg:col-span-6 lg:pt-20">
          <div className="relative mx-auto aspect-[3/5] max-h-[560px] max-w-[420px] sm:max-h-none sm:max-w-[520px]">
            {/* halo rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute h-[110%] w-[110%] rounded-full border border-mint/10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute h-[90%] w-[90%] rounded-full border border-mint/15 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute h-[70%] w-[70%] rounded-full bg-mint/5 blur-2xl" />
            </div>

            <motion.img
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={body}
              alt="Anatomical figure showing common pain points treated by Arise Physiotherapy"
              className="relative z-10 h-full w-full object-contain float-slow drop-shadow-[0_0_60px_oklch(0.82_0.16_175/0.3)]"
              width={720}
              height={1280}
              decoding="async"
              fetchPriority="high"
            />

            {/* pain hotspots */}
            {painPoints.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                className="absolute z-20"
                style={{ top: p.top, left: p.left }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  <div className="h-3 w-3 rounded-full bg-pain pulse-pain shadow-[0_0_20px_oklch(0.68_0.24_25/0.8)]" />
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap ${
                      p.side === "left" ? "right-5 text-right" : "left-5"
                    }`}
                  >
                    <div className="rounded-md glass px-2 py-1 text-[9px] uppercase tracking-wider sm:px-2.5 sm:text-[10px]">
                      <span className="text-pain font-medium">{p.label}</span>
                      <span className="text-muted-foreground ml-1.5 hidden sm:inline">
                        {p.desc}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* corner ticks */}
            <div className="absolute top-0 left-0 h-6 w-6 border-t border-l border-mint/40" />
            <div className="absolute top-0 right-0 h-6 w-6 border-t border-r border-mint/40" />
            <div className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-mint/40" />
            <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-mint/40" />
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:flex">
        <span>Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-mint/60 to-transparent" />
      </div>
    </section>
  );
}
