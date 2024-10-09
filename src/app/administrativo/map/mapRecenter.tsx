import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const MapRecenter = ({ position }: { position: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    // Verifica se o objeto 'window' está disponível (ou seja, estamos no cliente)
    if (typeof window !== "undefined") {
      map.setView(position, map.getZoom());
    }
  }, [position, map]);

  return null;
};
