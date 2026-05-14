import { motion } from "framer-motion";
import clinic from "@/assets/clinic.jpg";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
            <img
              src={clinic}
              alt="Arise Physiotherapy clinic interior"
              className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[560px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 max-w-[200px] hidden md:block">
            <div className="text-[10px] uppercase tracking-[0.2em] text-mint">
              Personalised care
            </div>
            <div className="font-display text-xl mt-1 leading-tight">
              Modern physiotherapy clinic
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-6"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-mint mb-5">— The Clinic</div>
          <h2 className="font-display text-4xl leading-[1.05] lg:text-5xl">
            A sanctuary for movement, designed for{" "}
            <span className="italic text-gradient-mint">recovery</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Arise Physiotherapy & Neuro Rehab Center is a modern physiotherapy clinic in Jaipur,
            built to make recovery feel clear, comfortable, and patient-focused. We combine careful
            assessment, hands-on treatment, guided exercise, and advanced therapy support to help
            people move better with confidence.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From spine pain and sports injuries to neuro rehabilitation, posture concerns, and daily
            mobility issues, every plan is personalised around the patient&apos;s symptoms, goals,
            and lifestyle.
          </p>
          <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:mt-10">
            {[
              ["Modern Setup", "Clean, comfortable clinical environment"],
              ["Personalised Plans", "Treatment designed around your goals"],
              ["Advanced Therapies", "Dry needling, cupping, PNF and decompression care"],
              ["Neuro & Ortho Rehab", "Focused recovery for movement, pain and function"],
            ].map(([t, d]) => (
              <div key={t} className="border-l border-mint/40 pl-4">
                <div className="text-sm font-medium">{t}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{d}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
