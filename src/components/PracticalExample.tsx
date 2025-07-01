import { ShoppingBag, TrendingUp, Users, Bot, BarChart3, Clock } from 'lucide-react'

const PracticalExample = () => {
  const results = [
    {
      icon: TrendingUp,
      metric: "45%",
      description: "Aumento en ventas",
      detail: "Incremento en conversiones gracias a recomendaciones personalizadas"
    },
    {
      icon: Users,
      metric: "60%",
      description: "Retención de clientes",
      detail: "Mayor fidelización mediante experiencias personalizadas"
    },
    {
      icon: Clock,
      metric: "80%",
      description: "Reducción de tiempo",
      detail: "En gestión de inventario y atención al cliente"
    },
    {
      icon: BarChart3,
      metric: "35%",
      description: "Reducción de costos",
      detail: "En operaciones y gestión de procesos manuales"
    }
  ]

  const solutions = [
    {
      icon: Bot,
      title: "Chatbot Inteligente",
      description: "Asistente virtual que responde consultas 24/7, ayuda con tallas, estilos y procesa pedidos automáticamente.",
      tech: "NLP + Machine Learning"
    },
    {
      icon: TrendingUp,
      title: "Sistema de Recomendaciones",
      description: "IA que analiza historial de compras y preferencias para sugerir productos personalizados.",
      tech: "Redes Neuronales"
    },
    {
      icon: BarChart3,
      title: "Análisis Predictivo",
      description: "Predicción de demanda, optimización de inventario y análisis de tendencias de moda.",
      tech: "Análisis de Datos"
    },
    {
      icon: ShoppingBag,
      title: "Automatización de Procesos",
      description: "Workflows automáticos para gestión de pedidos, facturación y seguimiento de envíos.",
      tech: "n8n Automation"
    }
  ]

  return (
    <section id="ejemplo" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Caso de Éxito Real
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cómo transformamos una tienda de ropa online tradicional en un e-commerce inteligente
          </p>
        </div>

        {/* Client Overview */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-pink-200">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <img
                  src="/images/online-store.jpg"
                  alt="Tienda de ropa online"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center space-x-3 mb-4">
                  <ShoppingBag className="w-8 h-8 text-pink-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    StyleAI Boutique
                  </h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Una tienda de ropa femenina online que enfrentaba desafíos con la personalización 
                  de la experiencia de compra, gestión de inventario y atención al cliente. Con más de 
                  10,000 productos y 500 pedidos mensuales, necesitaban automatización inteligente.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-pink-200">
                    <div className="font-semibold text-gray-800">Industria:</div>
                    <div className="text-gray-600">Moda y E-commerce</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-pink-200">
                    <div className="font-semibold text-gray-800">Duración del proyecto:</div>
                    <div className="text-gray-600">6 meses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Implemented */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Soluciones Implementadas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-lg w-fit mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {solution.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="text-xs text-pink-600 font-semibold bg-pink-100 px-2 py-1 rounded-full w-fit">
                    {solution.tech}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Results Achieved */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Resultados Obtenidos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => {
              const IconComponent = result.icon
              return (
                <div 
                  key={index}
                  className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full w-fit mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {result.metric}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {result.description}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {result.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-200">
            <div className="text-center">
              <div className="text-6xl text-blue-300 mb-4">"</div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                La transformación ha sido increíble. No solo hemos aumentado nuestras ventas significativamente, 
                sino que nuestros clientes ahora tienen una experiencia de compra completamente personalizada. 
                El chatbot maneja el 70% de las consultas automáticamente, y las recomendaciones de IA han 
                aumentado el valor promedio de cada compra.
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-right">
                  <div className="font-semibold text-gray-800">María González</div>
                  <div className="text-gray-600">CEO, StyleAI Boutique</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Tu negocio podría ser el próximo caso de éxito?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Descubre cómo la IA puede transformar tu empresa como lo hizo con StyleAI Boutique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar Consulta Gratuita
              </button>
              <button
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                Ver Todos los Servicios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PracticalExample
