import { motion } from 'framer-motion'
import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import { education, certifications } from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-5xl w-full mx-auto">
        <SectionHeading index="05" label="Background" title="Education & Certifications" />

        <div className="mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7 flex flex-col md:flex-row gap-6 mb-5 last:mb-0"
            >
              <div className="shrink-0">
                <span className="w-14 h-14 rounded-xl flex items-center justify-center neon-border" style={{ backgroundColor: '#0a0f1e' }}>
                  <HiOutlineAcademicCap className="w-7 h-7 text-circuit" />
                </span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display text-lg text-mist-bright">{edu.degree}</h3>
                  <span className="font-mono text-xs text-circuit">{edu.duration}</span>
                </div>
                <p className="text-sm text-mist-soft mb-4">
                  {edu.institution} · {edu.location}
                </p>
                <ul className="space-y-1.5">
                  {edu.details.map((d, idx) => (
                    <li key={idx} className="text-mist text-sm leading-relaxed flex gap-2">
                      <span className="text-circuit mt-1 shrink-0">▸</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="section-label mb-6">Certifications & Distinctions</h3>
        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex gap-4"
            >
              <HiOutlineBadgeCheck className="w-8 h-8 text-circuit shrink-0" />
              <div>
                <h4 className="font-display text-base text-mist-bright mb-1">{cert.title}</h4>
                <p className="text-xs font-mono text-circuit/80 mb-2">{cert.issuer}</p>
                <p className="text-sm text-mist leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
