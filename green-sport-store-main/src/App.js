import React from "react";
import "./App.css";
import luluLemonConjunto from "./assets/luluLemonConjunto.webp";
import adidasCamisa from "./assets/adidasCamisa.webp";
import underArmourJogger from "./assets/underArmourJogger.webp";

const products = [
  {
    name: "Conjunto Deportivo de Mujer",
    desc: "Marca Lululemon, tallas S,M,L,XL,XXL.",
    img: luluLemonConjunto,
  },
  {
    name: "Camisa de Comprension",
    desc: "Marca Adidas, colores: Negro, azul, gris.",
    img: adidasCamisa,
  },
  {
    name: "Jogger",
    desc: "Marca Under Armour, unisex.",
    img: underArmourJogger,
  },
];

function ProductCard({ name, desc, img }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>{desc}</p>
      <img src={img} alt={name} width={400} height={600} loading="lazy" />
      <button>Comprar</button>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">💪 Tienda de Ropa Deportiva GreenSport 🍀</h1>
      {products.map((product, idx) => (
        <ProductCard
          key={idx}
          name={product.name}
          desc={product.desc}
          img={product.img}
        />
      ))}
    </div>
  );
}

export default App;
