import { motion } from 'framer-motion'
import { HiOutlineBriefcase } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-4xl w-full mx-auto">
        <SectionHeading index="04" label="Career Path" title="Work Experience" />

        <div className="relative pl-8 md:pl-10">
          {/* vertical line */}
          <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-circuit via-circuit/30 to-transparent" />

          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-8 md:-left-10 top-1 w-8 h-8 rounded-full flex items-center justify-center border border-circuit/50 shadow-neon-sm" style={{ backgroundColor: '#0a0f1e' }}>
                <HiOutlineBriefcase className="w-4 h-4 text-circuit" />
              </span>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display text-lg text-mist-bright">{job.role}</h3>
                  <span className="font-mono text-xs text-circuit">{job.duration}</span>
                </div>
                <p className="text-sm text-mist-soft mb-4">
                  {job.company} · {job.location}
                </p>
                <ul className="space-y-2">
                  {job.points.map((point, idx) => (
                    <li key={idx} className="text-mist text-sm leading-relaxed flex gap-2">
                      <span className="text-circuit mt-1.5 shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
