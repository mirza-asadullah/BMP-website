import { Routes, Route } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import WelcomeSection from './pages/WelcomePage'

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<WelcomeSection />} />
      
    </Routes>
  )
}

export default App