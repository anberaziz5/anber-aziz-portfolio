import { motion } from 'framer-motion'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col group"
    >
      {/* Image placeholder */}
      <div className="h-44 relative overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0b2a4a, #0a0f1e)' }}>
        <div className="absolute inset-0 bg-grid-pattern bg-[size:24px_24px] opacity-30" />
        <span className="font-display text-3xl text-circuit/40 font-bold relative z-10 tracking-wide text-center">
          {project.title}
        </span>
        {project.featured && (
          <span className="absolute top-3 right-3 font-mono text-[0.65rem] px-2 py-1 rounded-full bg-circuit/15 text-circuit border border-circuit/30">
            FEATURED
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="font-mono text-xs text-circuit/80 mb-1">{project.subtitle}</p>
        <h3 className="font-display text-xl text-mist-bright mb-3">{project.title}</h3>
        <p className="text-mist text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-md text-mist-soft border"
              style={{ borderColor: 'rgba(22,32,56,0.9)', backgroundColor: 'rgba(14,20,38,0.6)' }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-mist-bright border hover:border-circuit/50 hover:text-circuit transition-all"
            style={{ borderColor: 'rgba(22,32,56,0.9)' }}
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-void"
            style={{ background: 'linear-gradient(135deg, #0ef0ff, #3b6eff)' }}
          >
            <HiOutlineExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}
