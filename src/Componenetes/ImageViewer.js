import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ImageViewer.css'; // Importamos un archivo de CSS para los nuevos estilos

const Home = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = () => {
      // Información de las mascotas con más detalles (edad y descripción)
      const petData = [
        { 
          id: 1, 
          name: 'Horus', 
          breed: 'Husky siberiano', 
          age: 1, 
          description: 'Horus es un Husky de un año con un pelaje espeso y brillante de tonos blanco y gris, con ojos llamativos, de un imponente azul. Es enérgico, curioso, y siempre está dispuesto a correr y explorar. Su carácter es juguetón y cariñoso, pero también tiene una naturaleza independiente típica de su raza.', 
          image: 'https://petstable.mx/cdn/shop/articles/Cachorro-husky-siberiano-1_33e7bc9a-7a17-4ea5-82a5-1cabcb8ceb40-141078.jpg?v=1722026070' 
        },
        { 
          id: 2, 
          name: 'Titus', 
          breed: 'Samoyedo', 
          age: 2, 
          description: 'Titus es un Samoyedo de pelaje denso y esponjoso, de color blanco puro, que resalta por su sonrisa característica y amigable. Tiene ojos oscuros y brillantes que reflejan su naturaleza alegre y sociable. A pesar de su apariencia suave, es enérgico y juguetón, siempre buscando la atención de quienes lo rodean. Titus tiene una personalidad cariñosa y leal, lo que lo convierte en un compañero ideal.', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYMLIe0qhxZPDZFFVjy0Zmxfe_JOnR7s1oNg&s' 
        },
        { 
          id: 3, 
          name: 'Sanguinius y Vulkan', 
          breed: 'Doberman ', 
          age: 4, 
          description: 'Sanguinius es un Doberman adulto de porte elegante y musculoso, con un pelaje corto y brillante, típicamente negro y fuego. Sus ojos son intensos, mostrando una mezcla de lealtad y determinación. Es un perro protector y ágil, siempre alerta y dispuesto a defender a su familia, pero también tiene un lado afectuoso y cercano con sus seres queridos. Vulkan, también un Doberman adulto, comparte la misma presencia imponente. Su pelaje puede ser similar o en tonos más oscuros, destacando su naturaleza fuerte y equilibrada. Vulkan es inteligente, obediente y extremadamente leal, siendo un compañero atento y confiable, siempre listo para cualquier desafío.', 
          image: 'https://www.mundoperro.net/wp-content/uploads/el-doberman-1200x675.jpg' 
        },
      ];
      setPets(petData);
    };

    fetchPets();
  }, []);

  const handleCardClick = (pet) => {
    navigate(`/about`, { state: { pet } }); // Pasamos los datos de la mascota a la página About
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Adopta una Mascota</h1>
      </header>
      
      <div className="pets-container">
        {pets.map((pet) => (
          <div
            key={pet.id}
            onClick={() => handleCardClick(pet)}
            className="pet-card"
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="pet-image"
            />
            <h3>{pet.name}</h3>
            <p>{pet.breed}</p>
            <p>Edad: {pet.age} años</p>
            <p>{pet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;