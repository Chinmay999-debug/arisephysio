import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Activity,
  Bone,
  Brain,
  Dumbbell,
  HeartPulse,
  Footprints,
  Baby,
  Zap,
  Hand,
  CircleDot,
  Waves,
  UserRound,
  Video,
  ShieldPlus,
  Stethoscope,
  X,
} from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Advanced Physiotherapy",
    desc: "Assessment-led treatment plans for pain, mobility, strength, and long-term recovery.",
    overview: [
      "Advanced physiotherapy is a complete, assessment-led approach for patients who need more than short-term pain relief. It looks at pain history, posture, joint movement, muscle strength, flexibility, balance, work habits, and the way symptoms affect everyday life.",
      "Treatment may combine manual therapy, therapeutic exercise, electrotherapy, soft-tissue release, posture correction, activity modification, and a progressive home plan. The goal is to identify why the problem is happening and build a recovery plan that improves comfort, control, and long-term function.",
    ],
    benefits: [
      "Reduces pain and stiffness",
      "Improves mobility, strength, and posture",
      "Helps prevent repeated flare-ups",
      "Builds a clear recovery roadmap",
    ],
    suitableFor: [
      "Chronic pain",
      "Post-injury weakness",
      "Mobility restriction",
      "Patients needing structured rehab",
    ],
    session: [
      "Detailed movement assessment",
      "Hands-on treatment where needed",
      "Exercise progression",
      "Home care and prevention guidance",
    ],
  },
  {
    icon: Bone,
    title: "Orthopedic Physiotherapy",
    desc: "Care for joint, muscle, ligament, fracture, and post-surgical recovery concerns.",
    overview: [
      "Orthopedic physiotherapy focuses on conditions affecting bones, joints, muscles, ligaments, tendons, and post-surgical recovery. It supports patients with neck pain, back pain, shoulder stiffness, knee pain, arthritis, fractures, ligament injuries, and joint replacement rehabilitation.",
      "The treatment plan is staged according to pain level, healing status, strength, range of motion, and functional goals. Care may include joint mobilisation, soft-tissue techniques, strengthening, balance work, walking retraining, and return-to-activity planning.",
    ],
    benefits: [
      "Restores joint range and muscle strength",
      "Supports post-operative recovery",
      "Improves walking and daily function",
      "Reduces compensation patterns",
    ],
    suitableFor: [
      "Fracture rehabilitation",
      "Joint pain and arthritis",
      "Ligament injuries",
      "Post-surgery recovery",
    ],
    session: [
      "Pain and movement screening",
      "Manual therapy and mobility work",
      "Strength and stability training",
      "Functional retraining",
    ],
  },
  {
    icon: Brain,
    title: "Neurophysiotherapy Rehab",
    desc: "Rehabilitation for stroke, paralysis, balance issues, and neurological movement conditions.",
    overview: [
      "Neurophysiotherapy rehab helps patients whose movement is affected by the nervous system. It may support recovery after stroke, paralysis, nerve weakness, spinal cord involvement, balance problems, coordination difficulty, and altered walking patterns.",
      "The approach uses repetition, facilitation, functional practice, balance training, gait training, postural control, strengthening, and task-specific movement. Therapy is built to improve independence in real activities such as sitting, standing, walking, transfers, hand use, and self-care.",
    ],
    benefits: [
      "Improves balance and coordination",
      "Supports walking and transfer ability",
      "Builds strength and motor control",
      "Encourages independence and confidence",
    ],
    suitableFor: ["Stroke recovery", "Paralysis care", "Balance problems", "Neurological weakness"],
    session: [
      "Functional ability assessment",
      "Guided movement practice",
      "Balance and gait training",
      "Caregiver and home exercise guidance",
    ],
  },
  {
    icon: Activity,
    title: "Sports Injury Rehab",
    desc: "Structured recovery for sprains, strains, overuse injuries, and return-to-activity goals.",
    overview: [
      "Sports injury rehab is designed for sprains, strains, ligament injuries, tendon pain, muscle tears, overuse injuries, and return-to-training goals. It works for athletes, gym-goers, runners, and active people who want to return safely without rushing recovery.",
      "Rehab is progressed from pain relief and mobility restoration into strength, balance, stability, agility, plyometrics, and sport-specific loading. The plan also looks at training errors, poor mechanics, weakness, and mobility limitations that may have contributed to the injury.",
    ],
    benefits: [
      "Supports safe return to sport",
      "Reduces reinjury risk",
      "Improves strength and load tolerance",
      "Restores confidence in movement",
    ],
    suitableFor: ["Sprains and strains", "Tendon pain", "Muscle tears", "Return-to-play planning"],
    session: [
      "Injury-stage assessment",
      "Pain and swelling control",
      "Strength and agility progressions",
      "Sport-specific drills",
    ],
  },
  {
    icon: Footprints,
    title: "PNF Approach",
    desc: "Guided neuromuscular techniques to improve control, flexibility, and functional movement.",
    overview: [
      "PNF, or Proprioceptive Neuromuscular Facilitation, uses guided movement patterns to improve flexibility, muscle activation, coordination, and functional control. It follows natural diagonal and spiral movement patterns instead of training only one muscle at a time.",
      "A therapist may use resistance, stretching, verbal cues, and assisted movement to help the nervous system activate muscles more effectively. It is commonly used in neuro rehab, sports rehab, stiffness, weakness, and movement re-education.",
    ],
    benefits: [
      "Improves neuromuscular control",
      "Supports flexibility and strength",
      "Helps movement re-education",
      "Useful for functional rehab",
    ],
    suitableFor: [
      "Stroke and neuro rehab",
      "Muscle weakness",
      "Poor coordination",
      "Stiffness and movement restriction",
    ],
    session: [
      "Movement pattern assessment",
      "Assisted and resisted movements",
      "Stretching and facilitation",
      "Functional carryover exercises",
    ],
  },
  {
    icon: Zap,
    title: "Dry Needling Therapy",
    desc: "Targeted trigger-point care for muscular tightness, pain, and restricted movement.",
    overview: [
      "Dry needling is a targeted technique for trigger points, tight muscle bands, local pain, and restricted movement. Fine needles are applied to selected points after assessment to help reduce muscle guarding and improve mobility.",
      "It may be used for neck and shoulder tightness, back pain, headaches linked with muscle tension, sports-related tightness, and chronic muscle knots. It is usually combined with stretching, strengthening, posture correction, and movement retraining for better results.",
    ],
    benefits: [
      "Reduces trigger-point sensitivity",
      "Helps relax tight muscles",
      "Improves movement comfort",
      "Supports faster progress with exercise",
    ],
    suitableFor: [
      "Muscle knots",
      "Neck and shoulder tightness",
      "Back muscle spasm",
      "Sports-related tightness",
    ],
    session: [
      "Trigger-point assessment",
      "Targeted dry needling",
      "Post-needling mobility work",
      "Corrective exercise guidance",
    ],
  },
  {
    icon: CircleDot,
    title: "Cupping Therapy",
    desc: "Soft-tissue support to ease stiffness, improve mobility, and assist recovery.",
    overview: [
      "Cupping therapy uses controlled suction over soft tissues to reduce stiffness, improve tissue mobility, and support local circulation. It can be helpful for muscle tightness, back stiffness, shoulder tension, post-workout soreness, and recovery support.",
      "Cup placement, pressure, and duration are selected according to the treatment area and patient comfort. Cupping may be static or combined with gentle movement, stretching, and manual therapy.",
    ],
    benefits: [
      "Eases soft-tissue tightness",
      "Improves local mobility",
      "Supports recovery and relaxation",
      "Pairs well with stretching and exercise",
    ],
    suitableFor: ["Back stiffness", "Shoulder tension", "Muscle tightness", "Recovery support"],
    session: [
      "Soft-tissue assessment",
      "Controlled cup application",
      "Gentle mobility work",
      "Aftercare and hydration guidance",
    ],
  },
  {
    icon: UserRound,
    title: "Geriatric Physiotherapy",
    desc: "Age-sensitive care for strength, balance, mobility, joint health, and independence.",
    overview: [
      "Geriatric physiotherapy supports older adults with walking difficulty, balance problems, joint pain, weakness, stiffness, falls, post-surgery recovery, and reduced confidence in daily movement. The care is gentle, progressive, and adapted to medical history and comfort.",
      "Treatment may include balance training, strengthening, walking practice, pain management, posture correction, mobility drills, breathing work, and fall-prevention strategies. The focus is on practical independence, not just exercises.",
    ],
    benefits: [
      "Improves balance and walking safety",
      "Builds strength for daily tasks",
      "Supports joint comfort and mobility",
      "Reduces fall risk",
    ],
    suitableFor: [
      "Older adults with weakness",
      "Fall prevention",
      "Arthritis and joint pain",
      "Post-surgical mobility recovery",
    ],
    session: [
      "Mobility and fall-risk screening",
      "Gentle strengthening",
      "Balance and gait training",
      "Home safety and exercise advice",
    ],
  },
  {
    icon: Hand,
    title: "Myofascial Release",
    desc: "Manual soft-tissue work to reduce fascial tightness and improve comfortable movement.",
    overview: [
      "Myofascial release is a hands-on soft-tissue technique used to reduce fascial restriction, muscle tightness, and movement discomfort. Fascia may become restricted because of posture, injury, repetitive strain, stress, scarring, or long-term protective movement patterns.",
      "The therapist applies sustained pressure, gentle stretching, and tissue-specific techniques to improve tissue glide and comfort. It is commonly used for neck and shoulder tightness, back stiffness, postural tension, and chronic soft-tissue discomfort.",
    ],
    benefits: [
      "Reduces fascial restriction",
      "Improves soft-tissue mobility",
      "Eases postural tension",
      "Supports comfortable movement",
    ],
    suitableFor: [
      "Chronic stiffness",
      "Postural tightness",
      "Soft-tissue restriction",
      "Neck, shoulder, and back tension",
    ],
    session: [
      "Soft-tissue assessment",
      "Sustained manual release",
      "Mobility and stretching work",
      "Corrective movement advice",
    ],
  },
  {
    icon: Zap,
    title: "TENS Therapy",
    desc: "Transcutaneous Electrical Nerve Stimulation for non-invasive pain management support.",
    overview: [
      "TENS, or Transcutaneous Electrical Nerve Stimulation, uses mild electrical impulses through surface electrodes to support non-invasive pain management. It can help calm pain sensitivity and make movement easier during a physiotherapy session.",
      "It may be used for back pain, neck pain, joint pain, muscle pain, nerve-related discomfort, and some chronic pain presentations. Settings are adjusted according to comfort, symptom response, and the treatment goal.",
    ],
    benefits: [
      "Non-invasive pain relief support",
      "Can improve exercise tolerance",
      "Useful for acute or chronic discomfort",
      "Comfort-controlled intensity",
    ],
    suitableFor: [
      "Back and neck pain",
      "Joint pain",
      "Muscular pain",
      "Pain-sensitive rehab stages",
    ],
    session: [
      "Pain assessment",
      "Electrode placement",
      "Comfort-based intensity setting",
      "Exercise or movement after pain relief",
    ],
  },
  {
    icon: Waves,
    title: "Ultrasound Therapy",
    desc: "Therapeutic ultrasound support for soft-tissue healing, pain, and inflammation care.",
    overview: [
      "Ultrasound therapy uses sound-wave energy to support soft-tissue healing, pain relief, and inflammation management in selected conditions. It may be used for tendon, ligament, muscle, and soft-tissue injuries after clinical assessment.",
      "A therapist applies the treatment head with gel over the target region and selects settings based on tissue depth, condition stage, and therapeutic goal. It is most effective when used as part of a broader rehab plan.",
    ],
    benefits: [
      "Supports soft-tissue healing",
      "Helps with selected inflammatory conditions",
      "May reduce pain and stiffness",
      "Pairs with mobility and strengthening",
    ],
    suitableFor: [
      "Tendon irritation",
      "Ligament sprain support",
      "Muscle strain recovery",
      "Soft-tissue pain",
    ],
    session: [
      "Condition screening",
      "Therapeutic ultrasound application",
      "Mobility work",
      "Progressive loading plan",
    ],
  },
  {
    icon: Baby,
    title: "Pelvic Floor Physical Therapy",
    desc: "Focused care for pelvic strength, control, recovery, and functional confidence.",
    overview: [
      "Pelvic floor physical therapy focuses on pelvic muscle strength, relaxation, breathing coordination, core control, and functional confidence. It may support postnatal recovery, pelvic weakness, leakage concerns, pelvic discomfort, and difficulty returning to exercise.",
      "Care is handled with privacy and sensitivity. Treatment may include education, guided pelvic floor activation or relaxation, breathing work, core strengthening, posture correction, mobility exercises, and progressive functional training.",
    ],
    benefits: [
      "Improves pelvic muscle control",
      "Supports postnatal recovery",
      "Builds core and breathing coordination",
      "Restores confidence with movement",
    ],
    suitableFor: [
      "Postnatal recovery",
      "Pelvic weakness",
      "Leakage concerns",
      "Core rehabilitation",
    ],
    session: [
      "Private consultation",
      "Pelvic and core education",
      "Guided exercise plan",
      "Progressive home programme",
    ],
  },
  {
    icon: ShieldPlus,
    title: "Osteopathy Treatment",
    desc: "Hands-on assessment and treatment focused on alignment, mobility, and body mechanics.",
    overview: [
      "Osteopathy treatment uses hands-on assessment and manual techniques to support mobility, alignment, posture, and whole-body mechanics. It considers how joints, muscles, soft tissues, and movement patterns influence pain and restriction.",
      "Care may include soft-tissue work, joint mobilisation, stretching, movement correction, and posture guidance. Techniques are selected after assessment and adapted to the patient’s comfort level.",
    ],
    benefits: [
      "Improves joint and tissue mobility",
      "Supports posture and alignment",
      "Reduces mechanical stiffness",
      "Complements physiotherapy rehab",
    ],
    suitableFor: [
      "Restricted movement",
      "Mechanical pain",
      "Posture-related discomfort",
      "Patients preferring hands-on care",
    ],
    session: [
      "Whole-body movement review",
      "Manual therapy",
      "Mobility and posture correction",
      "Self-care guidance",
    ],
  },
  {
    icon: Video,
    title: "Tele Physiotherapy",
    desc: "Remote consultation and guided exercise support for recovery from home.",
    overview: [
      "Tele physiotherapy gives patients guided professional support through video consultation when clinic visits are difficult. It is useful for follow-ups, exercise correction, posture guidance, pain education, and home-based rehab progression.",
      "The therapist may assess movement on video, explain exercises, correct technique, plan progressions, and help modify daily activities. It keeps patients connected to care even when distance, travel, or schedule is a challenge.",
    ],
    benefits: [
      "Convenient care from home",
      "Exercise correction and progression",
      "Useful for follow-up support",
      "Reduces missed rehab sessions",
    ],
    suitableFor: [
      "Follow-up consultations",
      "Home exercise guidance",
      "Remote patients",
      "Busy schedules",
    ],
    session: [
      "Video movement assessment",
      "Exercise demonstration",
      "Technique correction",
      "Progression and follow-up plan",
    ],
  },
  {
    icon: Stethoscope,
    title: "Spinal Injury Rehabilitation",
    desc: "Rehab support for spinal pain, injury recovery, posture, and controlled movement.",
    overview: [
      "Spinal injury rehabilitation supports neck, mid-back, and lower-back conditions including mechanical pain, disc-related symptoms, postural strain, stiffness, weakness, and recovery after injury. The approach is careful, staged, and movement-focused.",
      "Treatment may include pain relief, spinal mobility work, core activation, nerve mobility exercises, posture correction, ergonomic advice, and progressive strengthening. The plan avoids sudden overload while rebuilding confidence in movement.",
    ],
    benefits: [
      "Reduces spinal pain and stiffness",
      "Improves core control",
      "Supports posture and sitting tolerance",
      "Builds safe movement confidence",
    ],
    suitableFor: [
      "Neck and back pain",
      "Disc-related symptoms",
      "Postural strain",
      "Spinal injury recovery",
    ],
    session: [
      "Spine and nerve screening",
      "Pain-relief strategies",
      "Core and mobility work",
      "Ergonomic and activity guidance",
    ],
  },
  {
    icon: HeartPulse,
    title: "Clinical Physiotherapy",
    desc: "Clinic-based physiotherapy care guided by examination, goals, and measured progress.",
    overview: [
      "Clinical physiotherapy is supervised clinic-based care for pain, stiffness, weakness, injury recovery, posture problems, and movement limitations. It begins with a clinical examination and clear goals for treatment.",
      "Sessions may include manual therapy, electrotherapy, exercise prescription, movement correction, strengthening, balance training, and home-program guidance. Progress is reviewed regularly so treatment can be adjusted as symptoms and function improve.",
    ],
    benefits: [
      "Structured diagnosis-led care",
      "Hands-on and exercise-based treatment",
      "Measurable functional progress",
      "Clear home programme",
    ],
    suitableFor: [
      "Pain and stiffness",
      "Weakness after injury",
      "Movement limitation",
      "Patients needing supervised rehab",
    ],
    session: [
      "Clinical assessment",
      "Treatment plan selection",
      "Supervised exercises",
      "Progress review and updates",
    ],
  },
  {
    icon: Dumbbell,
    title: "Pilates",
    desc: "Controlled movement training for core strength, posture, flexibility, and stability.",
    overview: [
      "Pilates is a controlled movement system that improves core strength, posture, breathing control, flexibility, balance, and body awareness. It is useful for rehab patients, beginners, active individuals, and people who need low-impact strengthening with precise form.",
      "Sessions may focus on spinal control, pelvic stability, hip strength, shoulder control, breathing patterns, and gradual progression of movement difficulty. Exercises are adapted to current ability and recovery goals.",
    ],
    benefits: [
      "Builds core strength and stability",
      "Improves posture and body awareness",
      "Supports spine care",
      "Low-impact strength training",
    ],
    suitableFor: [
      "Back care",
      "Posture correction",
      "Injury prevention",
      "Rehab and fitness progression",
    ],
    session: [
      "Movement control assessment",
      "Guided Pilates exercises",
      "Breathing and posture cues",
      "Progressive strengthening",
    ],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<(typeof services)[number] | null>(null);

  useEffect(() => {
    if (!activeService) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveService(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeService]);

  return (
    <section id="services" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-mint mb-5">
              — What we treat
            </div>
            <h2 className="max-w-2xl font-display text-4xl leading-[1.05] lg:text-6xl">
              A complete spectrum of <span className="italic text-gradient-mint">care</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Specialised physiotherapy services built around precise diagnosis, conservative care,
            and steady functional progress.
          </p>
        </div>

        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 18 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-24px" }}
              transition={{ duration: 0.34, ease: "easeOut", delay: i < 8 ? i * 0.025 : 0 }}
              className="group relative flex h-full min-h-[295px] transform-gpu flex-col overflow-hidden rounded-2xl p-6 glass transition-colors duration-500 [backface-visibility:hidden] hover:border-mint/40 sm:p-7"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mint/0 to-mint/0 group-hover:from-mint/10 group-hover:to-transparent transition-all duration-700" />
              <div className="relative flex h-full flex-col">
                <div className="h-11 w-11 rounded-xl bg-mint/10 flex items-center justify-center mb-5 group-hover:bg-mint/20 transition-colors">
                  <s.icon className="h-5 w-5 text-mint" />
                </div>
                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <button
                  type="button"
                  onClick={() => setActiveService(s)}
                  className="mt-auto inline-flex items-center gap-2 self-start pt-7 text-xs font-medium uppercase tracking-[0.16em] text-mint transition-colors hover:text-foreground"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeService && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-background/80 px-4 py-5 backdrop-blur-md sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-dialog-title"
          onClick={() => setActiveService(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="relative flex max-h-[86svh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-mint/25 bg-surface shadow-[0_30px_100px_-30px_oklch(0_0_0/0.85)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-mint/20 blur-3xl" />
            <button
              type="button"
              onClick={() => setActiveService(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-mint/30 bg-background/85 text-foreground shadow-[0_14px_45px_-18px_oklch(0_0_0/0.9)] transition-colors hover:border-mint/60 hover:text-mint sm:right-5 sm:top-5"
              aria-label="Close service details"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative overflow-y-auto p-6 pr-5 sm:p-8 sm:pr-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/12">
                <activeService.icon className="h-5 w-5 text-mint" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-mint">
                Service details
              </div>
              <h3
                id="service-dialog-title"
                className="mt-3 font-display text-3xl leading-tight sm:text-4xl"
              >
                {activeService.title}
              </h3>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {activeService.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <ServiceDetailList title="Benefits" items={activeService.benefits} />
                <ServiceDetailList title="Best for" items={activeService.suitableFor} />
              </div>

              <div className="mt-7 rounded-2xl border border-mint/15 bg-background/35 p-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-mint">
                  What to expect
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {activeService.session.map((item) => (
                    <div key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex flex-col gap-3 border-t border-mint/15 bg-background/45 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5">
              <a
                href="#contact"
                onClick={() => setActiveService(null)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-mint px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_35px_oklch(0.70_0.27_25/0.24)] transition-all hover:shadow-[0_0_50px_oklch(0.82_0.16_175/0.5)]"
              >
                Book this service
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="inline-flex items-center justify-center rounded-full border border-mint/20 px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-mint"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

function ServiceDetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-mint/15 bg-background/30 p-4">
      <div className="text-[10px] uppercase tracking-[0.22em] text-mint">{title}</div>
      <div className="mt-3 space-y-2">
        {items.map((item) => (
          <div key={item} className="flex gap-2 text-sm text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
