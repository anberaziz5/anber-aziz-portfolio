import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import SkillBar from './SkillBar'
import { skillCategories } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-5xl w-full mx-auto">
        <SectionHeading index="02" label="Capabilities" title="Skills & Technologies" />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-7"
            >
              <h3 className="font-display text-lg text-circuit mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-circuit shadow-neon-sm" />
                {category.name}
              </h3>
              {category.skills.map((skill, idx) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={idx * 0.08} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
