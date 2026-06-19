import { motion } from 'framer-motion'
import { HiOutlineLocationMarker, HiOutlineAcademicCap, HiOutlineGlobeAlt } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import { profile, languages } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-5xl w-full mx-auto">
        <SectionHeading index="01" label="About Me" title="Who I Am" />

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 glass-card rounded-2xl p-8"
          >
            <h3 className="font-display text-xl text-circuit mb-3">Professional Summary</h3>
            <p className="text-mist leading-relaxed mb-6">{profile.summary}</p>

            <h3 className="font-display text-xl text-circuit mb-3">Career Objective</h3>
            <p className="text-mist leading-relaxed">{profile.objective}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <HiOutlineLocationMarker className="w-6 h-6 text-circuit shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono text-mist-soft uppercase tracking-wide mb-1">Location</p>
                <p className="text-mist-bright text-sm">{profile.location}</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <HiOutlineAcademicCap className="w-6 h-6 text-circuit shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono text-mist-soft uppercase tracking-wide mb-1">University</p>
                <p className="text-mist-bright text-sm">{profile.university}</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <HiOutlineGlobeAlt className="w-6 h-6 text-circuit shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs font-mono text-mist-soft uppercase tracking-wide mb-2">Languages</p>
                {languages.map((lang) => (
                  <div key={lang.name} className="mb-1.5 last:mb-0">
                    <p className="text-mist-bright text-sm">{lang.name}</p>
                    <p className="text-mist-soft text-xs">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
