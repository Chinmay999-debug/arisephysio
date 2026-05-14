import { motion } from "framer-motion";
import { Award, GraduationCap, Stethoscope } from "lucide-react";
import kamleshPhoto from "@/assets/dr-kamlesh-optimized.jpg";
import srPhoto from "@/assets/dr-sr-optimized.jpg";

const doctors = [
  {
    role: "Consultant Physiotherapist",
    firstName: "Kamlesh",
    lastName: "Kumawat",
    credentials: "BPT, MPT (Neuro), CMT",
    summary:
      "Dr. Kamlesh focuses on neuro rehabilitation, stroke recovery, spine pain, and paralysis care through precise assessment and structured physiotherapy plans.",
    image: kamleshPhoto,
    initials: "KK",
    highlights: [
      { icon: GraduationCap, t: "Neuro Physiotherapy", d: "BPT, MPT (Neuro), CMT" },
      {
        icon: Stethoscope,
        t: "Specialist Care",
        d: "PNF approach, stroke rehab, spine pain, and paralysis",
      },
      {
        icon: Award,
        t: "Certified Techniques",
        d: "Dry needling, kinesiology taping, cupping & Hijama, IASTM, Pilates",
      },
    ],
  },
  {
    role: "Consultant Physiotherapist",
    firstName: "S.R.",
    lastName: "Choudhary",
    credentials: "BPT, CMT, PNF Approach",
    summary:
      "Dr. S.R. Choudhary is trained at SMS Hospital and provides hands-on physiotherapy care with a focus on patient comfort, mobility, and functional recovery.",
    image: srPhoto,
    initials: "SC",
    highlights: [
      {
        icon: GraduationCap,
        t: "Clinical Training",
        d: "BPT, CMT, PNF approach; trained at SMS Hospital",
      },
      {
        icon: Stethoscope,
        t: "Rehabilitation Care",
        d: "Manual therapy and movement-focused physiotherapy",
      },
      {
        icon: Award,
        t: "Certified Techniques",
        d: "Kinesiology taping, dry needling, cupping & Hijama, IASTM, Pilates",
      },
    ],
  },
];

export default function Doctor() {
  return (
    <section id="doctor" className="relative overflow-hidden py-20 md:py-32">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{ background: "var(--gradient-radial-mint)" }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-mint mb-5">Clinicians</div>
          <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Meet your <span className="italic text-gradient-mint">doctors</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Two specialists, one shared standard of careful assessment, evidence-led treatment, and
            recovery plans that fit real life.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-8">
          {doctors.map((doc, index) => (
            <motion.article
              key={doc.lastName}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-mint/15 bg-background/60 sm:rounded-[2rem]"
            >
              <div className="absolute -inset-12 bg-gradient-to-br from-mint/15 via-transparent to-mint/5 opacity-70 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative grid min-h-full md:grid-cols-[0.92fr_1.08fr]">
                <div className="relative min-h-[300px] overflow-hidden border-b border-mint/15 sm:min-h-[380px] md:border-b-0 md:border-r">
                  {doc.image ? (
                    <img
                      src={doc.image}
                      alt={`Dr. ${doc.firstName} ${doc.lastName}, ${doc.role.toLowerCase()}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="flex h-full min-h-[380px] items-center justify-center bg-[radial-gradient(circle_at_30%_20%,hsl(var(--mint)/0.28),transparent_38%),linear-gradient(145deg,hsl(var(--card)),hsl(var(--background)))]">
                      <div className="flex h-32 w-32 items-center justify-center rounded-full border border-mint/25 bg-background/40 font-display text-5xl text-mint shadow-2xl">
                        {doc.initials}
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative p-6 sm:p-7 lg:p-8">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-mint">{doc.role}</div>
                  <h3 className="mt-5 font-display text-3xl leading-[1.05] sm:text-4xl lg:text-5xl">
                    <div>Dr.</div>
                    {doc.firstName}{" "}
                    <span className="italic text-gradient-mint">{doc.lastName}</span>
                  </h3>
                  <div className="mt-3 text-sm text-mint">{doc.credentials}</div>

                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    {doc.summary}
                  </p>

                  <div className="mt-8 space-y-5">
                    {doc.highlights.map(({ icon: Icon, t, d }) => (
                      <div key={t} className="flex gap-4 items-start">
                        <div className="h-10 w-10 rounded-full glass flex items-center justify-center shrink-0">
                          <Icon className="h-4 w-4 text-mint" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{t}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{d}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
