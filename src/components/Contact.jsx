import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlinePaperAirplane } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d73c2de6-da58-4fab-a5e8-bd537f7fa8bb", 
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 3500)
      } else {
        console.error("Submission failed:", data);
        setStatus('idle')
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('idle')
      alert("Network error. Please try again.")
    }
  }

  const contactItems = [
    { icon: HiOutlineMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: HiOutlinePhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: HiOutlineLocationMarker, label: 'Location', value: profile.location, href: null },
    { icon: FaGithub, label: 'GitHub', value: profile.githubHandle, href: profile.github },
    { icon: FaLinkedin, label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-5xl w-full mx-auto">
        <SectionHeading index="06" label="Get In Touch" title="Let's Work Together" />

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <p className="text-mist leading-relaxed mb-2">
              Have a role, project, or opportunity in mind? I'd love to hear from you — reach out directly or send a message.
            </p>
            {contactItems.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="glass-card rounded-xl p-4 flex items-center gap-4 hover:shadow-neon-md transition-all">
                  <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(14,240,255,0.08)' }}>
                    <Icon className="w-5 h-5 text-circuit" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-mist-soft uppercase tracking-wide">{item.label}</p>
                    <p className="text-mist-bright text-sm truncate">{item.value}</p>
                  </div>
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-7 flex flex-col gap-4"
          >
            <div>
              <label htmlFor="name" className="text-xs font-mono text-mist-soft uppercase tracking-wide mb-1.5 block">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-void/40 border text-mist-bright placeholder:text-mist-soft/60 focus:border-circuit/60 outline-none transition-colors text-sm"
                style={{ borderColor: 'rgba(22,32,56,0.9)' }}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-mono text-mist-soft uppercase tracking-wide mb-1.5 block">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-void/40 border text-mist-bright placeholder:text-mist-soft/60 focus:border-circuit/60 outline-none transition-colors text-sm"
                style={{ borderColor: 'rgba(22,32,56,0.9)' }}
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-mono text-mist-soft uppercase tracking-wide mb-1.5 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity..."
                className="w-full px-4 py-3 rounded-lg bg-void/40 border text-mist-bright placeholder:text-mist-soft/60 focus:border-circuit/60 outline-none transition-colors text-sm resize-none"
                style={{ borderColor: 'rgba(22,32,56,0.9)' }}
              />
            </div>
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="btn-primary flex items-center justify-center gap-2 mt-2 disabled:opacity-70"
            >
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Message Sent ✓'}
              {status === 'idle' && (
                <>
                  <HiOutlinePaperAirplane className="w-4 h-4 rotate-90" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
