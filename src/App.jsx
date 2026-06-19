import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import BackgroundFX from './components/BackgroundFX'
import Home from './pages/Home'

function App() {
  return (
    <div className="relative min-h-screen font-body text-mist-bright">
      <BackgroundFX />
      <Sidebar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
