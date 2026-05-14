import { motion } from "framer-motion";
import kamleshPhoto from "@/assets/dr-kamlesh-optimized.jpg";
import srPhoto from "@/assets/dr-sr-optimized.jpg";
import sanjuPhoto from "@/assets/dr-sanju-optimized.jpg";
import yashikaPhoto from "@/assets/dr-yashika-optimized.jpg";

const team = [
  {
    name: "Dr. Kamlesh Kumawat",
    role: "Consultant Physiotherapist",
    initials: "KK",
    image: kamleshPhoto,
    imagePosition: "center 6%",
    credentials: "BPT, MPT (Neuro), CMT",
    focus: "PNF approach stroke rehab, ",
    special: "spine and paralysis specialist",
    certifications:
      "Certified in dry needling, kinesiology taping, cupping & Hijama, IASTM, and Pilates",
  },
  {
    name: "Dr. S.R. Choudhary",
    role: "Consultant Physiotherapist",
    initials: "SC",
    image: srPhoto,
    imagePosition: "center 0%",
    credentials: "BPT, CMT, PNF Approach",
    focus: "Trained at SMS Hospital",
    certifications:
      "Certified in kinesiology taping, dry needling, cupping & Hijama, IASTM, and Pilates",
  },
  {
    name: "Dr. Sanju Jangir",
    role: "Consultant Female Physiotherapist",
    initials: "SJ",
    image: sanjuPhoto,
    imagePosition: "center 18%",
    credentials: "BPT, IASTM, CCTS ",
    focus: "Trained at SMS Hospital",
    certifications: "",
  },
  {
    name: "Dr. Yashika Agrawal",
    role: "Consultant Female Physiotherapist",
    initials: "YA",
    image: yashikaPhoto,
    imagePosition: "center 0%",
    imageScale: "scale-[1.01]",
    credentials: "BPT, CMT, CCTS",
    focus: "Specialized in ortho rehab and paediatric rehab. 2+ years experience",
    certifications: "",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center lg:mb-16">
          <div className="text-[10px] uppercase tracking-[0.3em] text-mint mb-5">— The Team</div>
          <h2 className="font-display text-4xl leading-[1.05] lg:text-6xl">
            Specialists, not <span className="italic text-gradient-mint">generalists</span>.
          </h2>
        </div>

        <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-full"
            >
              <div className="relative flex h-full min-h-[400px] flex-col items-center overflow-hidden rounded-3xl border border-border bg-surface px-5 py-6 text-center transition-all duration-500 group-hover:-translate-y-1 group-hover:border-mint/40 sm:min-h-[430px] sm:py-7">
                <div className="absolute inset-0 bg-gradient-to-br from-surface-elevated to-surface" />
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-mint/10 via-mint/5 to-transparent" />
                <div className="relative mb-6">
                  <div className="absolute -inset-3 rounded-full bg-mint/15 blur-2xl transition-opacity duration-500 group-hover:opacity-90" />
                  {m.image ? (
                    <div className="relative h-40 w-40 overflow-hidden rounded-full border border-mint/25 bg-white shadow-[0_0_45px_oklch(0.70_0.27_25/0.22)] transition-transform duration-700 group-hover:scale-[1.03] sm:h-44 sm:w-44">
                      <img
                        src={m.image}
                        alt={`${m.name}, ${m.role.toLowerCase()}`}
                        className={`h-full w-full ${m.imageScale ?? "scale-[1.08]"} object-cover`}
                        style={{ objectPosition: m.imagePosition }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : (
                    <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-mint/25 bg-background/40 shadow-[0_0_45px_oklch(0.70_0.27_25/0.22)] sm:h-44 sm:w-44">
                      <span className="font-display text-5xl text-mint/30 group-hover:text-mint/40 transition-colors">
                        {m.initials}
                      </span>
                    </div>
                  )}
                </div>

                <div className="relative flex flex-1 flex-col items-center">
                  <div className="min-h-10 text-[10px] uppercase tracking-[0.2em] text-mint">
                    {m.role}
                  </div>
                  <div className="mt-3 font-display text-2xl leading-tight">{m.name}</div>
                  <div className="mt-3 text-sm text-foreground/90">{m.credentials}</div>
                  <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {m.focus}
                    {"special" in m && m.special && (
                      <>
                        <br />
                        {m.special}
                      </>
                    )}
                  </div>

                  {m.certifications && (
                    <div className="mt-3 text-xs leading-relaxed text-muted-foreground/80">
                      {m.certifications}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
