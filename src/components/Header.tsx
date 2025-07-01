import { useState } from 'react'
import { Menu, X, Brain } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">AlfaIAIDigital</h1>
              <p className="text-sm text-gray-600">Agencia de Inteligencia Artificial</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('objetivos')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Objetivos
            </button>
            <button
              onClick={() => scrollToSection('funciones')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Funciones
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('objetivos')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Objetivos
              </button>
              <button
                onClick={() => scrollToSection('funciones')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Funciones
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-left bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-fit"
              >
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
