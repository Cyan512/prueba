import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@components/templates/Layout";
import Home from "@components/pages/Home";
import Destinations from "@components/pages/Destinations";
import DestinationDetails from "@components/pages/DestinationDetails";
import Experiences from "@components/pages/Experiences";
import About from "@components/pages/About";
import Contact from "@components/pages/Contact";
import NotFound from "@components/pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Ruta principal */}
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        {/* Destinations con detalle */}
        <Route path="destinations" element={<Destinations />} />
        <Route path="destinations/:slug" element={<DestinationDetails />} />

        {/* Otras páginas */}
        <Route path="experiences" element={<Experiences />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Página 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
