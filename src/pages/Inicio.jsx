import Envios from "../home/Envios";
import MainBanner from "../home/MainBanner";
import Nosotros from "../home/Nosotros";
import Noticias from "../home/Noticias";
import Ofertas from "../home/Ofertas";

function Inicio() {
  return (
    <>
      <MainBanner />
      <Nosotros />
      <Noticias />
      <Ofertas />
      <Envios />
    </>
  );
}

export default Inicio;
