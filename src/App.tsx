import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Chat } from './pages/Chat'
import { Wallet } from './pages/Wallet'
import { Marketplace } from './pages/Marketplace'
import { Apps } from './pages/Apps'
import { Nutrition } from './pages/Nutrition'
import { Comunidades } from './pages/Comunidades'
import { Music } from './pages/Music'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Splash } from './pages/Splash'
import { Health } from './pages/Health'
import { Financial } from './pages/Financial'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/splash" element={<Splash />} />
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/communities" element={<Comunidades />} />
      <Route path="/music" element={<Music />} />
      <Route path="/about" element={<About />} />
      <Route path="/health" element={<Health />} />
      <Route path="/financial" element={<Financial />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App