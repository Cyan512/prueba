import React, { useState } from "react";
import { MapPin, Clock, Camera, Sun, Umbrella, Star, CheckCircle, XCircle } from "lucide-react";

const LagunaHumantay = () => {
  const [activeStep, setActiveStep] = useState(null);

  const itinerary = [
    {
      title: "Del hotel a la catedral",
      desc: "Recojo a las 1:30 p.m. para visitar la basílica mayor con pinturas y arte de la escuela cusqueña.",
      time: "1:30 PM",
      icon: "🏛️",
      image: "https://images.unsplash.com/photo-1555961413-c7c8e6fd3b80?w=800&q=80"
    },
    {
      title: "De la catedral al Qorikancha",
      desc: "Caminata hacia el templo más venerado del Imperio, con adoratorios y restos sagrados.",
      time: "2:15 PM",
      icon: "⛩️",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80"
    },
    {
      title: "De Qorikancha a Saqsayhuaman",
      desc: "Visita a la gran fortaleza con muros zigzagueantes y piedras de más de 60 toneladas.",
      time: "3:00 PM",
      icon: "🏰",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80"
    },
    {
      title: "De Saqsayhuaman a Qenqo",
      desc: "Templo de la Pachamama con pasadizos subterráneos y tallados en piedra.",
      time: "3:45 PM",
      icon: "🗿",
      image: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=800&q=80"
    },
    {
      title: "De Qenqo a Puka Pukara",
      desc: "Fortaleza roja de forma circular para el control de caminos inkas.",
      time: "4:30 PM",
      icon: "🔴",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80"
    },
    {
      title: "De Puka Pukara a Tambomachay",
      desc: "Centro ceremonial con fuentes sagradas y terrazas agrícolas.",
      time: "5:15 PM",
      icon: "💧",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&q=80"
    },
    {
      title: "Retorno al hotel",
      desc: "Opción de visitar un centro de interpretación de textiles andinos.",
      time: "6:00 PM",
      icon: "🏨",
      image: "https://images.unsplash.com/photo-1555854877-bab0e460b281?w=800&q=80"
    },
  ];

  const recommendations = [
    { icon: <Sun className="w-5 h-5" />, text: "Realizarlo preferentemente durante la temporada seca (abril – octubre)." },
    { icon: <Sun className="w-5 h-5" />, text: "Sombrero o gorro para el sol y cortavientos." },
    { icon: <Sun className="w-5 h-5" />, text: "Protector solar y poncho de lluvia." },
    { icon: <MapPin className="w-5 h-5" />, text: "Calzado cómodo y dinero extra." },
    { icon: <Camera className="w-5 h-5" />, text: "Cámara o celular con suficiente batería y espacio." },
  ];

  const includes = [
    "Bus turístico ida y vuelta.",
    "Guía profesional."
  ];

  const notIncludes = [
    "Boleto Turístico de Ingreso (BTG).",
    "Alimentos y bebidas.",
    "Souvenirs.",
    "Propinas."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1920"
            alt="Cusco City Tour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">Experiencia Premium</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Cusco
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              City Tour
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Atrévete a visitar la capital arqueológica de América y descubre
            historia, cultura y paisajes únicos.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-white/80">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Clock className="w-4 h-4" />
              <span>4.5 horas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <MapPin className="w-4 h-4" />
              <span>7 destinos</span>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-red-400 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Una Experiencia <span className="text-orange-500">Inolvidable</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-200 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-200 to-transparent rounded-tr-full"></div>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed relative z-10">
              Atrévete a visitar la capital arqueológica de América, caminando entre
              calles coloniales, extensos muros de piedra, antiguos templos andinos
              y pintoresco arte colonial. Este recorrido de medio día te permite
              visitar la asombrosa catedral, el importante templo inka del
              Qorikancha y 4 impresionantes construcciones antiguas rodeadas de
              bosques y paisajes únicos.
            </p>
          </div>
        </div>
      </section>

      {/* ITINERARY SECTION */}
      <section className="py-20 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Tu <span className="text-orange-500">Itinerario</span>
          </h2>
          
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-orange-400 to-yellow-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {itinerary.map((item, idx) => (
                <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-5/12 ${idx % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-orange-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-2xl">{item.icon}</div>
                        <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                          {item.time}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.desc}</p>
                      
                      {/* Image */}
                      <div 
                        className="relative overflow-hidden rounded-lg cursor-pointer group"
                        onClick={() => setActiveStep(idx)}
                      >
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Camera className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-white border-4 border-orange-400 rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Empty space on the other side */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {activeStep !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveStep(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
              onClick={() => setActiveStep(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img 
              src={itinerary[activeStep]?.image} 
              alt={itinerary[activeStep]?.title}
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-bold mb-2">{itinerary[activeStep]?.title}</h3>
              <p className="text-white/80">{itinerary[activeStep]?.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* RECOMMENDATIONS SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            <span className="text-orange-500">Recomendaciones</span> Importantes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-orange-100">
                <div className="flex items-start gap-4">
                  <div className="text-orange-500 bg-orange-100 p-3 rounded-full flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 flex-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDES/NOT INCLUDES SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Includes */}
            <div className="bg-green-50 rounded-3xl p-8 shadow-lg border border-green-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-green-500 p-3 rounded-full">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Incluye</h2>
              </div>
              
              <div className="space-y-4">
                {includes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Not Includes */}
            <div className="bg-red-50 rounded-3xl p-8 shadow-lg border border-red-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-red-500 p-3 rounded-full">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">No incluye</h2>
              </div>
              
              <div className="space-y-4">
                {notIncludes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para la Aventura?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Descubre los secretos de la capital arqueológica de América
          </p>
          <button className="bg-white text-orange-500 font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
            ¡Reserva Ahora!
          </button>
        </div>
      </section>
    </div>
  );
};

export default LagunaHumantay;