import { Settings, BarChart3, Brain, UserCheck } from 'lucide-react'

const MainFunctions = () => {
  const functions = [
    {
      icon: Settings,
      title: "Automatización de Procesos",
      tool: "n8n",
      image: "/images/automation-icon.jpg",
      description: "Diseñamos y implementamos workflows inteligentes que optimizan tus procesos empresariales.",
      features: [
        "Diseño de workflows personalizados",
        "Optimización de procesos existentes", 
        "Integración con Google Workspace",
        "Conexión con Slack y CRM",
        "Monitoreo y mantenimiento 24/7"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Análisis de Datos",
      tool: "Analytics Suite",
      image: "/images/data-analysis.png",
      description: "Convertimos tus datos en insights valiosos para la toma de decisiones estratégicas.",
      features: [
        "Análisis Descriptivo de tendencias",
        "Análisis Predictivo con IA",
        "Análisis Prescriptivo para acciones",
        "Limpieza y estructuración de datos",
        "Dashboards interactivos y reportes"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Brain,
      title: "Desarrollo de Redes Neuronales",
      tool: "Custom AI Models",
      image: "/images/neural-network.jpg",
      description: "Creamos modelos de IA personalizados que se adaptan perfectamente a tus necesidades específicas.",
      features: [
        "Visión por Computadora",
        "Procesamiento de Lenguaje Natural (NLP)",
        "Predicción Numérica avanzada",
        "Entrenamiento de modelos personalizados",
        "Optimización y fine-tuning continuo"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: UserCheck,
      title: "Consultoría y Capacitación",
      tool: "Knowledge Transfer",
      image: "/images/consulting.png",
      description: "Empoderamos a tu equipo con el conocimiento necesario para aprovechar al máximo la IA.",
      features: [
        "Talleres de formación especializados",
        "Auditorías tecnológicas completas",
        "Asesoramiento estratégico en IA",
        "Programas de capacitación personalizados",
        "Soporte continuo post-implementación"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section id="funciones" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Funciones Principales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cuatro áreas clave que transformarán tu negocio con tecnología de vanguardia
          </p>
        </div>

        {/* Functions Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {functions.map((func, index) => {
            const IconComponent = func.icon
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={func.image}
                    alt={func.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${func.color} p-3 rounded-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium opacity-90">{func.tool}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {func.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {func.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 mb-4">Características principales:</h4>
                    {func.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${func.color} mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="mt-8">
                    <button
                      onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                      className={`bg-gradient-to-r ${func.color} text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      Conocer Más
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Te interesa alguna de estas funciones?
            </h3>
            <p className="text-gray-600 mb-6">
              Cada función está diseñada para integrarse perfectamente con tu ecosistema tecnológico actual
            </p>
            <button
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver Servicios Completos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainFunctions
