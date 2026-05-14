import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Check, MapPin, Clock, Phone, Mail } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  service: z.string().min(1, "Select a service"),
  date: z.string().min(1, "Pick a date"),
  message: z.string().max(500).optional(),
});

const services = [
  "Orthopaedic Rehab",
  "Sports Injury",
  "Chronic Pain",
  "Neuro Rehab",
  "Posture & Gait",
  "Other",
];

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      e.preventDefault();
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-radial-mint)", opacity: 0.5 }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* LEFT — info + map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-mint mb-5">
                — Visit Us
              </div>
              <h2 className="font-display text-4xl leading-[1.05] lg:text-5xl">
                Book your <span className="italic text-gradient-mint">assessment</span>.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Your first visit is a 60-minute consultation. We'll listen, examine, and design a
                personalised plan.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  t: "Narayan Vihar, Jaipur",
                  d: "39, Narayan Sagar A, Rajasthan 302020",
                },
                { icon: Clock, t: "Mon–Sat · 8am–8pm", d: "Sunday by appointment" },
                { icon: Mail, t: "arisephysiojpr@gmail.com", d: "We reply within 2 hours" },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-4 items-start p-4 rounded-2xl glass">
                  <div className="h-9 w-9 rounded-full bg-mint/10 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-mint" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{d}</div>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 items-start p-4 rounded-2xl glass">
                <div className="h-9 w-9 rounded-full bg-mint/10 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-mint" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium">Call or WhatsApp</div>
                  <div className="mt-2 grid gap-2">
                    {[
                      { label: "+91 85291 97961", tel: "+918529197961", wa: "918529197961" },
                      { label: "+91 79767 79324", tel: "+917976779324", wa: "917976779324" },
                    ].map((contact) => (
                      <div
                        key={contact.tel}
                        className="grid grid-cols-[1fr_auto] items-center gap-3"
                      >
                        <div className="text-xs text-muted-foreground">{contact.label}</div>
                        <div className="flex gap-1.5">
                          <a
                            href={`tel:${contact.tel}`}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-mint/15 bg-background/40 text-muted-foreground hover:text-mint transition-colors"
                            aria-label={`Call ${contact.label}`}
                          >
                            <Phone className="h-3.5 w-3.5 text-mint" />
                          </a>
                          <a
                            href={`https://wa.me/${contact.wa}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-mint/15 bg-background/40 text-muted-foreground hover:text-mint transition-colors"
                            aria-label={`WhatsApp ${contact.label}`}
                          >
                            <WhatsAppIcon className="h-3.5 w-3.5 text-mint" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[220px] overflow-hidden rounded-2xl border border-border sm:h-[260px]">
              <iframe
                title="Arise Physiotherapy location"
                src="https://maps.google.com/maps?q=Arise%20physiotherapy%2C%2039%20Narayan%20Sagar%20A%2C%20Narayan%20Vihar%2C%20Jaipur%2C%20Rajasthan%20302020&t=&z=17&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale-[40%] contrast-110 brightness-90"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-3xl p-6 glass sm:p-8 lg:p-10">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-mint/20 blur-3xl" />

              {submitted ? (
                <div className="relative py-16 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-mint flex items-center justify-center mb-6">
                    <Check className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-3xl">Request received</h3>
                  <p className="text-muted-foreground mt-3 max-w-md mx-auto">
                    Our team will confirm your appointment within 2 hours. For urgent care, call us
                    directly.
                  </p>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/xeevynbd"
                  method="POST"
                  onSubmit={onSubmit}
                  className="relative space-y-5"
                >
                  <input type="hidden" name="_subject" value="New Appointment Request" />
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-mint mb-2">
                    <Calendar className="h-3 w-3" /> Appointment request
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Full name"
                      name="name"
                      placeholder="Your name"
                      error={errors.name}
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      placeholder="+91 85291 97961"
                      error={errors.phone}
                    />
                  </div>
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    error={errors.email}
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label>Service</Label>
                      <select name="service" defaultValue="" className="input-base">
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.service && <Err>{errors.service}</Err>}
                    </div>
                    <Field label="Preferred date" name="date" type="date" error={errors.date} />
                  </div>

                  <div>
                    <Label>Anything we should know?</Label>
                    <textarea
                      name="message"
                      rows={3}
                      maxLength={500}
                      placeholder="Tell us about your symptoms…"
                      className="input-base resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-mint px-6 py-4 font-medium text-primary-foreground shadow-[0_0_35px_oklch(0.70_0.27_25/0.24)] transition-all hover:shadow-[0_0_50px_oklch(0.82_0.16_175/0.5)]"
                  >
                    Request appointment
                  </button>
                  <p className="text-[11px] text-muted-foreground text-center">
                    By submitting you consent to be contacted about your enquiry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .input-base {
          width: 100%;
          padding: 0.85rem 1rem;
          background: oklch(0.18 0.018 200 / 80%);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          font-size: 0.9rem;
          color: var(--foreground);
          transition: all 0.2s;
        }
        .input-base:focus { outline: none; border-color: var(--mint); box-shadow: 0 0 0 3px oklch(0.82 0.16 175 / 15%); }
        .input-base::placeholder { color: var(--muted-foreground); }
      `}</style>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
      {children}
    </label>
  );
}
function Err({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-pain mt-1.5">{children}</p>;
}
function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input name={name} type={type} placeholder={placeholder} className="input-base" />
      {error && <Err>{error}</Err>}
    </div>
  );
}
