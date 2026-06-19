export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-void">
      {/* Base grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-60" />
      {/* Radial glow top */}
      <div className="absolute inset-0 bg-radial-glow" />
      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#3b6eff]/10 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-circuit/10 blur-[120px] animate-float-slow" style={{ animationDelay: '2s' }} />
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void" />
      <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 200px 80px #05070d' }} />
    </div>
  )
}
