import React, { useEffect, useState } from 'react';
import './App.css';
function useFetchMascotas() {
  const [mascotas, setMascotas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URl del JSON
    const PETS_API_URL = 'https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/4eb2d8431a0253f764dad867decc592038e80cac/mascotas.json';

    const fetchMascotas = async () => {
      try {
        const respuesta = await fetch(PETS_API_URL);
        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar las mascotas');
        }
        const datos = await respuesta.json();
        setMascotas(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    fetchMascotas();
  }, []);

  return { mascotas, cargando, error };
}

function App() {
  const { mascotas, cargando, error } = useFetchMascotas();

  if (cargando) {
    return <div className="container">Cargando mascotas...</div>;
  }

  if (error) {
    return <div className="container">Error: {error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Galería de Mascotas</h1>
      </header>
      <div className="mascotas-grid">
        {mascotas.map((mascota) => (
          <div key={mascota.id} className="mascota-card">
            <img 
              src={mascota.foto} 
              alt={mascota.nombre} 
              className="mascota-imagen"
            />
            <div className="mascota-info">
              <h2>{mascota.nombre}</h2>
              <p><strong>Especie:</strong> {mascota.especie}</p>
              <p><strong>Raza:</strong> {mascota.raza}</p>
              <p className="descripcion">{mascota.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;