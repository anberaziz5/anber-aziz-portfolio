import { motion } from 'framer-motion'

export default function SkillBar({ name, level, delay = 0 }) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-mist-bright text-sm font-medium">{name}</span>
        <span className="font-mono text-xs text-circuit">{level}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden relative" style={{ backgroundColor: '#0e1426' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{ background: 'linear-gradient(90deg, #0a8fa8, #0ef0ff)' }}
        >
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full shadow-neon-sm" style={{ backgroundColor: '#7df9ff' }} />
        </motion.div>
      </div>
    </div>
  )
}
