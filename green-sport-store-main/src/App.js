import React from 'react';

function App() {
  const name1 = "Conjunto Deportivo de Mujer";
  const desc1 = "Marca Lululemon, tallas S,M,L,XL,XXL.";
  const name2 = "Camisa de Comprension";
  const desc2 = "Marca Adidad, colores: Negro, azul, gris.";
  const name3 = "Jogger";
  const desc3 = "Marca Under Armour, unisex.";

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      background: 'linear-gradient(to right, #e0f7fa, #fff)'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#00695c',
        fontSize: '2.5rem',
        marginBottom: '2rem'
      }}>
        💪 Tienda de Ropa Deportiva GreenSport 🍀
      </h1>

      {/* Producto 1 */}
      <div style={{
        backgroundColor: '#ffffff',
        padding: '1rem',
        marginBottom: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: 'auto'
      }}>
        <h2>{name1}</h2>
        <p>{desc1}</p>
        <img
          src="https://via.placeholder.com/3000"
          style={{ width: '100%', borderRadius: '0.5rem' }}
        />
        <button style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#f44336',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem'
        }}>Comprar</button>
      </div>

      {/* Producto 2 */}
      <div style={{
        backgroundColor: '#ffffff',
        padding: '1rem',
        marginBottom: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: 'auto'
      }}>
        <h2>{name2}</h2>
        <p>{desc2}</p>
        <img
          src="https://via.placeholder.com/3000"
          style={{ width: '100%', borderRadius: '0.5rem' }}
        />
        <button style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#f44336',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem'
        }}>Comprar</button>
      </div>

      {/* Producto 3 */}
      <div style={{
        backgroundColor: '#ffffff',
        padding: '1rem',
        marginBottom: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: 'auto'
      }}>
        <h2>{name3}</h2>
        <p>{desc3}</p>
        <img
          src="https://via.placeholder.com/3000"
          style={{ width: '100%', borderRadius: '0.5rem' }}
        />
        <button style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#f44336',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem'
        }}>Comprar</button>
      </div>
    </div>
  );
}

export default App;
