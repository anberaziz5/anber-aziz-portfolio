import { motion } from 'framer-motion'

export default function SectionHeading({ index, label, title, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'center' ? 'text-center flex flex-col items-center' : ''}`}
    >
      <span className="section-label flex items-center gap-2">
        <span className="text-mist-soft">{index}</span>
        {label}
      </span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-mist-bright mt-2 mb-3">
        {title}
      </h2>
      <div className="h-px w-16 bg-gradient-to-r from-circuit to-transparent" />
    </motion.div>
  )
}
