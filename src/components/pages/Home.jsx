import Button from "@components/atoms/Button";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
                <div className="max-w-[75rem] px-4 mx-auto flex flex-col items-start text-left space-y-6">
                    <p className="text-lg font-medium tracking-wide uppercase">
                        Descubre tu Destino Ideal
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Explora Sin Límites
                    </h1>
                    <p className="max-w-xl text-base md:text-lg text-white/90">
                        Descubre los mejores destinos con nosotros. Vive experiencias
                        inolvidables, explora nuevos horizontes y crea recuerdos que durarán
                        toda la vida. Nos encargamos de todo para que solo disfrutes el
                        viaje.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <NavLink
                            to="/destinos"
                            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300"
                        >
                            Destinos
                        </NavLink>
                        <NavLink
                            to="/contacto"
                            className="px-6 py-3 bg-transparent border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-300"
                        >
                            Contáctanos
                        </NavLink>
                    </div>
                </div>
            </section>

            <main>
                <section className="bg-gray-50 py-20">
                    <div className="max-w-[75rem] px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Texto */}
                        <div className="space-y-6">
                            <p className="text-lg font-medium text-blue-600 uppercase">
                                Explora el Mundo
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                25 Años Creando Experiencias Inolvidables
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Viajar es vivir. Descubre los destinos más fascinantes con
                                nosotros y haz de cada viaje una experiencia única. Nos
                                encargamos de cada detalle para que disfrutes sin
                                preocupaciones.
                            </p>
                            <NavLink
                                to="/contact"
                                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300"
                            >
                                Destinos
                            </NavLink>
                        </div>

                        {/* Imagen */}
                        <div className="flex justify-center md:justify-end">
                            <img
                                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                                alt="Viaje y aventura"
                                className="rounded-xl shadow-lg w-full max-w-md object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="max-w-[75rem] px-4 mx-auto">
                        <h2 className="text-3xl font-bold mb-10 text-gray-800">Trekking</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Choquequirao",
                                    subtitle: "[ LA CIUDAD PERDIDA ]",
                                    description:
                                        "El Choquequirao Trek lleva a la «hermana sagrada de Machu Picchu», una ciudad inca oculta entre montañas, con paisajes asombrosos y ruinas impresionantes.",
                                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Choquequirao.JPG/640px-Choquequirao.JPG",
                                },
                                {
                                    title: "Salkantay",
                                    subtitle: "[ CAMINO AL APU ]",
                                    description:
                                        "El Salkantay Trek es una de las rutas más espectaculares hacia Machu Picchu, rodeada de glaciares, lagunas y valles verdes.",
                                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Salkantay.jpg/640px-Salkantay.jpg",
                                },
                                {
                                    title: "Camino Inca",
                                    subtitle: "[ RUTA CLÁSICA ]",
                                    description:
                                        "El Camino Inca combina paisajes impresionantes, historia milenaria y una llegada única a Machu Picchu a través de la Puerta del Sol.",
                                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Inca_trail.jpg/640px-Inca_trail.jpg",
                                },
                            ].map((card, index) => (
                                <div
                                    key={index}
                                    className="max-w-xs bg-[#1a1a1a] text-white shadow-lg rounded overflow-hidden mx-auto"
                                >
                                    {/* Imagen */}
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-full h-48 object-cover"
                                    />

                                    {/* Contenido */}
                                    <div className="p-5 flex flex-col items-center text-center space-y-4">
                                        <h2 className="text-xl font-bold">{card.title}</h2>
                                        <p className="text-[#FF9300] text-sm tracking-widest font-semibold">
                                            {card.subtitle}
                                        </p>

                                        {/* Línea decorativa */}
                                        <div className="w-10 h-[2px] bg-[#FF6210]"></div>

                                        <p className="text-sm text-gray-300">{card.description}</p>

                                        {/* Botón */}
                                        <button className="bg-[#FF4B00] hover:bg-[#e44400] px-6 py-3 text-sm font-bold uppercase rounded-sm transition-colors">
                                            Más información
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="max-w-[75rem] px-4 mx-auto">
                        <h2 className="text-3xl font-bold mb-10 text-gray-800">Dayli Tours​</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Choquequirao",
                                    subtitle: "[ LA CIUDAD PERDIDA ]",
                                    description:
                                        "El Choquequirao Trek lleva a la «hermana sagrada de Machu Picchu», una ciudad inca oculta entre montañas, con paisajes asombrosos y ruinas impresionantes.",
                                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Choquequirao.JPG/640px-Choquequirao.JPG",
                                },
                                {
                                    title: "Salkantay",
                                    subtitle: "[ CAMINO AL APU ]",
                                    description:
                                        "El Salkantay Trek es una de las rutas más espectaculares hacia Machu Picchu, rodeada de glaciares, lagunas y valles verdes.",
                                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Salkantay.jpg/640px-Salkantay.jpg",
                                },
                                {
                                    title: "Camino Inca",
                                    subtitle: "[ RUTA CLÁSICA ]",
                                    description:
                                        "El Camino Inca combina paisajes impresionantes, historia milenaria y una llegada única a Machu Picchu a través de la Puerta del Sol.",
                                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Inca_trail.jpg/640px-Inca_trail.jpg",
                                },
                            ].map((card, index) => (
                                <div
                                    key={index}
                                    className="max-w-xs bg-[#1a1a1a] text-white shadow-lg rounded overflow-hidden mx-auto"
                                >
                                    {/* Imagen */}
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-full h-48 object-cover"
                                    />

                                    {/* Contenido */}
                                    <div className="p-5 flex flex-col items-center text-center space-y-4">
                                        <h2 className="text-xl font-bold">{card.title}</h2>
                                        <p className="text-[#FF9300] text-sm tracking-widest font-semibold">
                                            {card.subtitle}
                                        </p>

                                        {/* Línea decorativa */}
                                        <div className="w-10 h-[2px] bg-[#FF6210]"></div>

                                        <p className="text-sm text-gray-300">{card.description}</p>

                                        {/* Botón */}
                                        <button className="bg-[#FF4B00] hover:bg-[#e44400] px-6 py-3 text-sm font-bold uppercase rounded-sm transition-colors">
                                            Más información
                                            </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
