import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import axios from "axios";
import { profile } from "../data/portfolioData";

// Backend API ka base URL — agar backend kisi aur port/domain pe ho to yahan change karein
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Backend ke /api/contact route pe POST request bhej rahe hain
      await axios.post(`${API_URL}/contact`, form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 bg-surface/40">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-rose text-sm font-medium mb-3">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
            Let's build something together
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>

          <div className="space-y-4">
            {[
              { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
              { icon: MapPin, label: profile.location, href: null },
            ].map(({ icon: Icon, label, href }) => {
              const content = (
                <motion.div
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3 text-sm text-muted"
                >
                  <span className="w-9 h-9 rounded-full bg-violet/15 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-violet" />
                  </span>
                  {label}
                </motion.div>
              );
              return href ? (
                <a key={label} href={href}>
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-surface p-8 space-y-5"
        >
          <div>
            <label className="text-sm text-muted mb-2 block">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-ink border border-white/10 px-4 py-3 text-sm text-ivory outline-none focus:border-rose transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-muted mb-2 block">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl bg-ink border border-white/10 px-4 py-3 text-sm text-ivory outline-none focus:border-rose transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm text-muted mb-2 block">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl bg-ink border border-white/10 px-4 py-3 text-sm text-ivory outline-none focus:border-rose transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-full bg-grad-primary text-ink font-medium py-3 flex items-center justify-center gap-2 shadow-glow disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send message"}
            {status !== "loading" && <Send size={16} />}
          </motion.button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-mint text-sm"
            >
              <CheckCircle size={16} /> Message sent — I'll get back to you soon!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-rose text-sm"
            >
              <AlertCircle size={16} /> Something went wrong. Please check the backend is running.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
