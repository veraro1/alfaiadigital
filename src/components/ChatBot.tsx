import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy AlfaBot, tu asistente virtual de AlfaIAIDigital. ¿En qué puedo ayudarte hoy? Puedo responder preguntas sobre nuestros servicios, precios, procesos y mucho más.",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    // Servicios generales
    if (input.includes('servicio') || input.includes('que hacen') || input.includes('que ofrecen')) {
      return "Ofrecemos 3 servicios principales:\n\n🔄 **Automatización con n8n** (desde $2,500)\n📊 **Análisis de Datos** (desde $3,000)\n🧠 **Desarrollo de IA a Medida** (desde $5,000)\n\nTambién brindamos consultoría y capacitación. ¿Te interesa algún servicio en particular?"
    }
    
    // Automatización
    if (input.includes('automatización') || input.includes('n8n') || input.includes('workflow')) {
      return "🔄 **Automatización con n8n:**\n\n• Workflows personalizados\n• Integración con Google Workspace, Slack, CRM\n• Monitoreo 24/7\n• Reducción del 40% en costos operacionales\n\n**Precio:** Desde $2,500\n\n¿Te gustaría saber más sobre cómo funciona?"
    }
    
    // Análisis de datos
    if (input.includes('datos') || input.includes('analisis') || input.includes('dashboard') || input.includes('reportes')) {
      return "📊 **Análisis de Datos:**\n\n• Análisis Descriptivo, Predictivo y Prescriptivo\n• Dashboards interactivos\n• Reportes ejecutivos personalizados\n• Limpieza y estructuración de datos\n\n**Precio:** Desde $3,000\n\n¿Qué tipo de datos necesitas analizar?"
    }
    
    // IA a medida
    if (input.includes('ia') || input.includes('inteligencia artificial') || input.includes('redes neuronales') || input.includes('chatbot') || input.includes('machine learning')) {
      return "🧠 **Desarrollo de IA a Medida:**\n\n• Redes neuronales para visión artificial\n• Chatbots inteligentes\n• Sistemas de recomendación\n• Procesamiento de lenguaje natural\n• Análisis predictivo avanzado\n\n**Precio:** Desde $5,000\n\n¿Tienes algún proyecto específico en mente?"
    }
    
    // Precios
    if (input.includes('precio') || input.includes('costo') || input.includes('cotización') || input.includes('cuanto cuesta')) {
      return "💰 **Nuestros Precios:**\n\n🔄 Automatización con n8n: Desde $2,500\n📊 Análisis de Datos: Desde $3,000\n🧠 IA a Medida: Desde $5,000\n\nTodos incluyen:\n• Consulta inicial gratuita\n• Soporte 24/7\n• Capacitación del equipo\n• Garantía de resultados\n\n¿Te gustaría una cotización personalizada?"
    }
    
    // Proceso/tiempo
    if (input.includes('proceso') || input.includes('tiempo') || input.includes('cuanto demora') || input.includes('etapas')) {
      return "⏱️ **Nuestro Proceso:**\n\n1. **Consulta gratuita** (1-2 días)\n2. **Análisis y propuesta** (3-5 días)\n3. **Desarrollo** (4-12 semanas según proyecto)\n4. **Implementación** (1-2 semanas)\n5. **Capacitación** (1 semana)\n6. **Soporte continuo** (permanente)\n\n¿En qué etapa te gustaría empezar?"
    }
    
    // Experiencia/casos de éxito
    if (input.includes('experiencia') || input.includes('casos') || input.includes('éxito') || input.includes('clientes') || input.includes('resultados')) {
      return "🏆 **Nuestra Experiencia:**\n\n• +5 años especializados en IA empresarial\n• +100 proyectos exitosos\n• 90% retención de clientes en 3 años\n• 40% reducción promedio de costos\n\n**Caso destacado:** StyleAI Boutique logró 45% aumento en ventas con nuestras soluciones.\n\n¿Te gustaría conocer más casos específicos?"
    }
    
    // Contacto
    if (input.includes('contacto') || input.includes('reunión') || input.includes('cita') || input.includes('hablar')) {
      return "📞 **Contacta con nosotros:**\n\n📧 contacto@alfaiadigital.com\n📱 +34 900 123 456\n📍 Madrid, España\n\n**¡Consulta inicial GRATUITA!**\n\nTambién puedes completar el formulario en esta página y te contactaremos en menos de 24 horas. ¿Prefieres que te llamemos o agendamos una videollamada?"
    }
    
    // Equipo/empresa
    if (input.includes('equipo') || input.includes('empresa') || input.includes('quienes son') || input.includes('sobre ustedes')) {
      return "👥 **Sobre AlfaIAIDigital:**\n\nSomos una agencia especializada en IA con enfoque 360°:\n\n• **Misión:** Democratizar el acceso a la IA empresarial\n• **Visión:** Liderar la transformación digital con IA\n• **Valores:** Tecnología accesible, resultados medibles, soporte continuo\n\nNuestro equipo combina experiencia técnica con conocimiento de negocio. ¿Te gustaría conocer más sobre nuestra metodología?"
    }
    
    // Tecnología accesible
    if (input.includes('accesible') || input.includes('fácil') || input.includes('complejo') || input.includes('técnico')) {
      return "🎯 **Tecnología Accesible:**\n\nHacemos que la IA sea comprensible para todos:\n\n• Interfaces intuitivas y amigables\n• Capacitación adaptada a cada rol\n• Documentación clara en español\n• Soporte 24/7 especializado\n• Sin jerga técnica innecesaria\n\n¿Tienes alguna preocupación específica sobre la complejidad tecnológica?"
    }
    
    // Soporte
    if (input.includes('soporte') || input.includes('ayuda') || input.includes('mantenimiento') || input.includes('apoyo')) {
      return "🛠️ **Nuestro Soporte:**\n\n• **24/7** disponibilidad en español\n• Monitoreo proactivo de sistemas\n• Actualizaciones y mejoras continuas\n• Consultoría estratégica permanente\n• Capacitación ongoing del equipo\n\n**Garantía:** 90% retención de clientes por nuestro soporte excepcional.\n\n¿Necesitas soporte inmediato para algún proyecto?"
    }
    
    // Saludos
    if (input.includes('hola') || input.includes('buenos') || input.includes('saludos') || input.includes('hi')) {
      return "¡Hola! 👋 Encantado de conocerte. Soy AlfaBot y estoy aquí para ayudarte con todo lo relacionado a nuestros servicios de inteligencia artificial.\n\n¿En qué puedo asistirte hoy? Puedo contarte sobre:\n• Nuestros servicios y precios\n• Casos de éxito\n• Proceso de trabajo\n• Agendar una consulta gratuita"
    }
    
    // Gracias
    if (input.includes('gracias') || input.includes('thanks') || input.includes('perfecto')) {
      return "¡De nada! 😊 Estoy aquí para ayudarte. Si tienes más preguntas sobre nuestros servicios de IA o necesitas agendar una consulta, no dudes en preguntarme.\n\n¿Hay algo más en lo que pueda asistirte?"
    }
    
    // Default response
    return "Entiendo tu consulta, pero me gustaría darte la información más precisa. ¿Podrías preguntarme sobre:\n\n🔹 Servicios específicos (automatización, análisis de datos, IA)\n🔹 Precios y cotizaciones\n🔹 Proceso de trabajo\n🔹 Casos de éxito\n🔹 Contacto y consultas\n\nO si prefieres, puedes contactar directamente a nuestro equipo humano: contacto@alfaiadigital.com"
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = getBotResponse(inputText)
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group animate-pulse hover:animate-none"
        >
          <MessageCircle className="w-6 h-6" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
            !
          </div>
          <div className="absolute bottom-16 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            ¿Necesitas ayuda? ¡Pregúntame!
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">AlfaBot</h3>
                <p className="text-xs opacity-90">Asistente Virtual IA</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-200'}`}>
                    {message.sender === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="whitespace-pre-line text-sm">{message.text}</div>
                    <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString('es-ES', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-[80%]">
                  <div className="p-2 rounded-full bg-gray-200">
                    <Bot className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Escribe tu pregunta aquí..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Pregúntame sobre servicios, precios, procesos o agenda una consulta gratuita
            </p>
          </form>
        </div>
      )}
    </>
  )
}

export default ChatBot
