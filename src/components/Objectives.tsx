import { Target, TrendingUp, Database, Brain, GraduationCap, Handshake } from 'lucide-react'

const Objectives = () => {
  const specificObjectives = [
    {
      icon: TrendingUp,
      title: "Automatización Inteligente",
      description: "Reducir costos operacionales en un 40% en los próximos 2 años mediante la implementación de soluciones de automatización basadas en IA.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Database,
      title: "Análisis de Datos Estratégico",
      description: "Transformar datos en insights accionables que impulsen la toma de decisiones estratégicas y el crecimiento empresarial.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Brain,
      title: "Redes Neuronales Personalizadas",
      description: "Desarrollar soluciones de IA a medida que se adapten perfectamente a las necesidades específicas de cada cliente.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: GraduationCap,
      title: "Capacitación y Empowerment",
      description: "Empoderar a los equipos con conocimientos en IA para maximizar la adopción y el aprovechamiento de las tecnologías implementadas.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Handshake,
      title: "Alianzas de Largo Plazo",
      description: "Establecer relaciones duraderas con un 90% de retención de clientes en 3 años, basadas en resultados medibles y soporte continuo.",
      color: "from-teal-500 to-teal-600"
    }
  ]

  return (
    <section id="objetivos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Nuestros Objetivos
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Definimos metas claras y medibles para transformar tu empresa con soluciones de IA de vanguardia
          </p>
        </div>

        {/* Main Objective */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Objetivo General
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-blue-600">Posicionarse como líder</span> en el mercado de 
                soluciones de inteligencia artificial, ofreciendo tecnologías innovadoras y accesibles que 
                transformen la forma en que las empresas operan y toman decisiones.
              </p>
            </div>
          </div>
        </div>

        {/* Specific Objectives */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
            Objetivos Específicos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specificObjectives.map((objective, index) => {
              const IconComponent = objective.icon
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border hover:border-blue-200"
                >
                  <div className={`bg-gradient-to-r ${objective.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {objective.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <p className="text-lg text-gray-700 mb-6">
              ¿Listo para alcanzar estos objetivos juntos?
            </p>
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Hablemos de tu Proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Objectives
