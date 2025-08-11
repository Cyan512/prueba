import { useParams } from "react-router-dom";
import TourPage from "./fullday/TourPage";
import Borrar from "./fullday/Borrar";
import { cuscoCityTour } from "@data/fullday/cuscoCityTour";
import { lagunaHumantay } from "@data/fullday/lagunaHumantay";
import { borrar } from "@data/fullday/borrar";

export default function DestinationDetails() {
  const { slug } = useParams();

  if (slug === "cusco-city-tour") {
    return <TourPage namespace="global" />;
  }

  if (slug === "laguna-humantay") {
    return <TourPage data={lagunaHumantay} />;
  }

  if (slug === "ausangate-trek") {
    return <Borrar namespace="global" />;
  }

  return <div>Destino no encontrado</div>;
}
