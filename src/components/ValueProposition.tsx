import { Globe, Zap, TrendingUp, Headphones } from 'lucide-react'

const ValueProposition = () => {
  const values = [
    {
      icon: Globe,
      title: "Enfoque 360°",
      description: "Abordamos cada proyecto desde múltiples perspectivas: tecnológica, estratégica y humana. No solo implementamos IA, sino que transformamos tu organización de manera integral.",
      features: [
        "Análisis completo de procesos actuales",
        "Estrategia de implementación personalizada",
        "Capacitación del equipo humano",
        "Integración con sistemas existentes"
      ],
      color: "from-blue-500 to-cyan-500",
      bgPattern: "bg-blue-50"
    },
    {
      icon: Zap,
      title: "Tecnología Accesible",
      description: "Hacemos que la inteligencia artificial sea comprensible y utilizable para todos los niveles de tu organización, sin jerga técnica innecesaria.",
      features: [
        "Interfaces intuitivas y amigables",
        "Documentación clara y completa",
        "Capacitación adaptada a cada rol",
        "Soporte en español las 24/7"
      ],
      color: "from-yellow-500 to-orange-500",
      bgPattern: "bg-yellow-50"
    },
    {
      icon: TrendingUp,
      title: "Resultados Medibles",
      description: "Cada implementación viene con métricas claras y KPIs específicos que demuestran el retorno de inversión y el impacto real en tu negocio.",
      features: [
        "KPIs definidos antes de la implementación",
        "Reportes de progreso regulares",
        "Métricas de ROI transparentes",
        "Análisis de impacto continuo"
      ],
      color: "from-green-500 to-emerald-500",
      bgPattern: "bg-green-50"
    },
    {
      icon: Headphones,
      title: "Soporte Continuo",
      description: "Tu éxito es nuestro éxito. Ofrecemos acompañamiento permanente para asegurar que tu inversión en IA continúe generando valor a largo plazo.",
      features: [
        "Soporte técnico 24/7 en español",
        "Actualizaciones y mejoras continuas",
        "Monitoreo proactivo de sistemas",
        "Consultoría estratégica permanente"
      ],
      color: "from-purple-500 to-pink-500",
      bgPattern: "bg-purple-50"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Propuesta de Valor Única
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lo que nos diferencia y hace que seas parte de la elite de empresas que lideran con inteligencia artificial
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div 
                key={index}
                className={`${value.bgPattern} rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 group`}
              >
                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`bg-gradient-to-r ${value.color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {value.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {value.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {value.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${value.color} mt-2.5 flex-shrink-0`}></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Por qué elegir AlfaIAIDigital?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Más que un proveedor de tecnología, somos tu socio estratégico en la transformación digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-800 font-semibold mb-2">Años de Experiencia</div>
              <div className="text-gray-600 text-sm">En desarrollo de soluciones de IA empresariales</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-800 font-semibold mb-2">Proyectos Exitosos</div>
              <div className="text-gray-600 text-sm">Implementaciones de IA que generan valor real</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-800 font-semibold mb-2">Soporte Técnico</div>
              <div className="text-gray-600 text-sm">Asistencia especializada en español</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para experimentar la diferencia?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Únete a las empresas que ya están transformando su futuro con IA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Agendar Consulta Gratuita
              </button>
              <button
                onClick={() => document.getElementById('ejemplo')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Ver Caso de Éxito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProposition
