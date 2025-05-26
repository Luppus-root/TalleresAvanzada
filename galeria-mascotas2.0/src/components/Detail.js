import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
export default function Detail() {
  const params = useParams();
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/4eb2d8431a0253f764dad867decc592038e80cac/mascotas.json";

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const foundMascota = data.find(
          (m) => m.id === parseInt(params.mascotaId)
        );
        setMascota(foundMascota);
      })
      .catch((error) => {
        console.error("Error fetching mascota details:", error);
      });
  }, [params.mascotaId]);

  if (!mascota) {
    return (
      <div className="detail-container">
        <h1>Cargando detalles de la mascota...</h1>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <Card
        style={{ width: "30rem", padding: "20px" }}
        className="mx-auto my-4"
      >
        <Card.Img
          variant="top"
          src={mascota.foto}
          alt={mascota.nombre}
          style={{
            width: "15rem",
            objectFit: "cover",
            borderRadius: "6px",
            display: "block",
            margin: "0 auto",
          }}
        />
        <Card.Body>
          <Card.Title>{mascota.nombre}</Card.Title>
          <Card.Text>{mascota.descripcion}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Especie: {mascota.especie}</ListGroupItem>
          <ListGroupItem>Raza: {mascota.raza}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">¡Adoptar!</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
