import Header from './components/Header'
import Hero from './components/Hero'
import Objectives from './components/Objectives'
import MainFunctions from './components/MainFunctions'
import Services from './components/Services'
import ValueProposition from './components/ValueProposition'
import PracticalExample from './components/PracticalExample'
import Contact from './components/Contact'
import ChatBot from './components/ChatBot'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <Objectives />
      <MainFunctions />
      <Services />
      <ValueProposition />
      <PracticalExample />
      <Contact />
      <ChatBot />
    </div>
  )
}

export default App
