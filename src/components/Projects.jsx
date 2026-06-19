import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/profile'

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-5xl w-full mx-auto">
        <SectionHeading index="03" label="Selected Work" title="Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
