import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineArrowUp } from 'react-icons/hi'
import { profile } from '../data/profile'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative px-6 md:px-12 lg:px-20 py-10 border-t" style={{ borderColor: 'rgba(22,32,56,0.8)' }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-mist-soft text-center md:text-left">
          © {new Date().getFullYear()} {profile.name}. Developing reliable backend systems & responsive frontends.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full flex items-center justify-center text-mist-soft hover:text-circuit border border-transparent hover:border-circuit/40 transition-all"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full flex items-center justify-center text-mist-soft hover:text-circuit border border-transparent hover:border-circuit/40 transition-all"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-full flex items-center justify-center text-mist-soft hover:text-circuit border border-transparent hover:border-circuit/40 transition-all"
          >
            <HiOutlineMail className="w-5 h-5" />
          </a>

          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full flex items-center justify-center text-circuit neon-border ml-2"
          >
            <HiOutlineArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
