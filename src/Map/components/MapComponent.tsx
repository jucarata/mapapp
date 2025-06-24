import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface MapComponentProps {
  location: [number, number] | null;
}

const MapComponent = ({ location }: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !location) return;

    mapRef.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "/wazee-style.json",
      center: location,
      zoom: 18,
      pitch: 60,
      bearing: -20,
      // @ts-expect-error: antialias no está en los tipos pero funciona
      antialias: true,
    });

    new maplibregl.Marker()
      .setLngLat(location)
      .setPopup(new maplibregl.Popup().setText("¡Estás aquí! 📍"))
      .addTo(mapRef.current);

    return () => mapRef.current?.remove();
  }, [location]);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
};

export default MapComponent;
