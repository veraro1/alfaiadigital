import { Workflow, Database, Cpu, CheckCircle, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: "Automatización con n8n",
      subtitle: "Workflows Inteligentes",
      description: "Conectamos tus sistemas y automatizamos procesos complejos con la plataforma n8n, creando flujos de trabajo que funcionan 24/7.",
      features: [
        "Workflows personalizados para tu negocio",
        "Integración de sistemas existentes",
        "Automatización de tareas repetitivas",
        "Monitoreo y mantenimiento continuo",
        "Soporte técnico 24/7",
        "Escalabilidad garantizada"
      ],
      image: "/images/n8n-tool.webp",
      price: "Desde $2,500",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      icon: Database,
      title: "Análisis de Datos",
      subtitle: "Insights Accionables",
      description: "Transformamos tus datos en información valiosa mediante técnicas avanzadas de análisis y visualización interactiva.",
      features: [
        "Reportes ejecutivos personalizados",
        "Modelos predictivos con IA",
        "Dashboards interactivos",
        "Limpieza y estructuración de datos",
        "Análisis de tendencias y patrones",
        "Optimización de procesos basada en datos"
      ],
      image: "/images/data-analysis.png",
      price: "Desde $3,000",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: Cpu,
      title: "Desarrollo de IA a Medida",
      subtitle: "Soluciones Personalizadas",
      description: "Creamos modelos de inteligencia artificial específicos para tu industria y necesidades particulares.",
      features: [
        "Redes neuronales para visión artificial",
        "Chatbots inteligentes y asistentes virtuales",
        "Sistemas de recomendación personalizados",
        "Procesamiento de lenguaje natural",
        "Análisis predictivo avanzado",
        "Integración con sistemas existentes"
      ],
      image: "/images/neural-network.jpg",
      price: "Desde $5,000",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-violet-50"
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Servicios Ofrecidos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tres categorías de servicios especializados para transformar tu empresa con inteligencia artificial
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isReverse = index % 2 !== 0

            return (
              <div 
                key={index}
                className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
              >
                {/* Image Side */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.bgColor} opacity-90`}></div>
                      <div className="absolute top-6 left-6">
                        <div className={`bg-gradient-to-r ${service.color} p-3 rounded-lg shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-6 right-6 text-right">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {service.price}
                        </div>
                        <div className="text-sm text-gray-600">por proyecto</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2">
                  <div className="max-w-xl">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`bg-gradient-to-r ${service.color} p-2 rounded-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent uppercase tracking-wider`}>
                        {service.subtitle}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                      {service.title}
                    </h3>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`w-5 h-5 text-green-500 mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                      className={`bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2`}
                    >
                      <span>Solicitar Cotización</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              ¿No estás seguro qué servicio necesitas?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos puede ayudarte a identificar la mejor solución de IA para tu negocio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Consulta Gratuita
              </button>
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Ver Ejemplo Práctico
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
