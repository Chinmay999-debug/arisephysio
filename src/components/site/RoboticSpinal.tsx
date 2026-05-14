import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Zap,
} from "lucide-react";
import machine from "../../../robotic-spinal.jpeg";

const howItWorks = [
  "Controlled computer-guided stretching of the spine",
  "Creates negative pressure around the affected disc",
  "Helps reduce pressure on nerves and disc structures",
  "Supports blood flow, mobility, and natural healing response",
];

const conditions = [
  "Slip disc and herniated disc",
  "Sciatica and leg pain",
  "Chronic back pain",
  "Neck pain and cervical spondylosis",
  "Degenerative disc disease",
  "Spine-related nerve compression",
];

const benefits = [
  "Non-surgical treatment approach",
  "Drug-free pain relief support",
  "Comfortable and relaxing therapy",
  "Supports mobility and posture",
  "Designed for faster functional recovery",
  "Long-term results with guided rehab",
];

const reasons = [
  "Expert physiotherapist supervision",
  "Advanced robotic technology",
  "Personalised treatment plan",
  "Clean and modern clinic setup",
];

export default function RoboticSpinal() {
  return (
    <section id="robotic-spinal" className="relative overflow-hidden py-20 md:py-32">
      <div
        className="absolute inset-0 -z-10 opacity-45"
        style={{ background: "var(--gradient-radial-mint)" }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75 }}
            className="lg:col-span-6"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-mint mb-5">
              — Advanced Spine Care
            </div>
            <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Robotic spinal <span className="italic text-gradient-mint">decompression</span>{" "}
              therapy.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              An advanced, non-surgical solution for selected spine problems. The system gently
              stretches the spine in a controlled way to help relieve pressure on discs and nerves.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Clock, t: "20-30 min", d: "session duration" },
                { icon: ShieldCheck, t: "Non-surgical", d: "comfortable care" },
                { icon: Stethoscope, t: "Supervised", d: "by physiotherapists" },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="rounded-2xl border border-mint/15 bg-background/45 p-4">
                  <Icon className="h-4 w-4 text-mint" />
                  <div className="mt-3 font-display text-2xl leading-none text-foreground">{t}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {d}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3.5 font-medium text-primary-foreground shadow-[0_0_35px_oklch(0.70_0.27_25/0.24)] transition-all hover:shadow-[0_0_50px_oklch(0.82_0.16_175/0.5)]"
              >
                Book your session
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+918529197961"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 glass transition-all hover:border-mint/40"
              >
                Call now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] border border-mint/20 bg-surface p-4 shadow-[var(--shadow-elevated)] sm:p-5">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mint/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.25rem] bg-white">
                <img
                  src={machine}
                  alt="Robotic spinal decompression therapy machine at Arise Physiotherapy"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="relative mt-4 rounded-2xl border border-mint/15 bg-background/55 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint/12">
                    <Zap className="h-4 w-4 text-mint" />
                  </div>
                  <div>
                    <div className="font-medium">Gentle spine relief</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Gentle, computer-controlled decompression is used to reduce disc and nerve
                      pressure while keeping the session comfortable and closely monitored.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          <InfoPanel icon={Sparkles} title="How it works" items={howItWorks} />
          <InfoPanel icon={Stethoscope} title="Conditions treated" items={conditions} />
          <InfoPanel icon={CheckCircle2} title="Benefits" items={benefits} />
          <InfoPanel icon={ShieldCheck} title="Why choose us" items={reasons} />
        </div>
      </div>
    </section>
  );
}

function InfoPanel({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Sparkles;
  title: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ y: 18 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.34, ease: "easeOut" }}
      className="rounded-2xl p-6 glass"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint/10">
          <Icon className="h-4 w-4 text-mint" />
        </div>
        <h3 className="font-display text-xl">{title}</h3>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
