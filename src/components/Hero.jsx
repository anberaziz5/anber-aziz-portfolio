import { motion } from 'framer-motion'
import { HiOutlineArrowDown, HiOutlineDownload, HiOutlineMail } from 'react-icons/hi'
import { HiOutlineCollection } from 'react-icons/hi'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-28 pb-20 lg:pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center text-center max-w-3xl"
      >
        {/* Profile image placeholder */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-circuit/20 blur-2xl animate-pulse-glow" />
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full neon-border bg-[#0a0f1e] flex items-center justify-center overflow-hidden">
            <span className="font-display text-5xl md:text-6xl text-circuit font-semibold">AA</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-circuit shadow-neon-md border-2 border-void" />
        </div>

        <span className="section-label mb-4"> available for opportunities</span>

        <h1 className="font-display text-4xl md:text-6xl font-bold text-mist-bright mb-3 tracking-tight">
          {profile.name}
        </h1>

        <p className="font-mono text-circuit text-base md:text-lg mb-6">
          {profile.title}
        </p>

        <p className="text-mist text-base md:text-lg leading-relaxed max-w-xl mb-10">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary flex items-center gap-2"
          >
            <HiOutlineCollection className="w-5 h-5" />
            View Projects
          </button>
          <a href="/anber_aziz_cv.pdf" download className="btn-outline flex items-center gap-2">
            <HiOutlineDownload className="w-5 h-5" />
            Download CV
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline flex items-center gap-2"
          >
            <HiOutlineMail className="w-5 h-5" />
            Contact Me
          </button>
        </div>
      </motion.div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 text-circuit/70 hover:text-circuit"
      >
        <HiOutlineArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  )
}
