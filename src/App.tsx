import './App.css';
import MapComponent from './Map/components/MapComponent';
import { useEffect, useState } from 'react';

function App() {
  const [location, setLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: [number, number] = [
          pos.coords.longitude,
          pos.coords.latitude,
        ];
        setLocation(coords);
      },
      (err) => {
        console.error("No se pudo obtener la ubicación:", err.message);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <>
      {location ? (
        <MapComponent location={location} />
      ) : (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>Obteniendo ubicación...</p>
      )}
    </>
  );
}

export default App;
