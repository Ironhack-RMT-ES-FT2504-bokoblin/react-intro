import FoodCard from "./FoodCard";

const foodMenuStyles = {
  backgroundColor: "darkgray",
  padding: "10px",
  margin: "10px",
};

function FoodMenu() {
  return (
    <section style={foodMenuStyles}>
      {/* <div>
        <span>🧀🥖</span>
        <h4>Entrante: Tequeños</h4>
        <p>Description: Palitos de queso</p>
      </div>

      <div>
        <span>🍲</span>
        <h4>Plato fuerte: Pabellon Criollo</h4>
        <p>Description: Muchas cosas juntas</p>
      </div>

      <div>
        <span>🍮</span>
        <h4>Entrante: Flan</h4>
        <p>Description: Dulce tradicional con huevo y leche</p>
      </div> */}

      <FoodCard 
        foodType="Entrante" 
        foodName="Tequeños" 
        bg="darkblue"
        emoji="🧀🥖"
        description="Palitos de queso"
      />

      <FoodCard
        foodType="Plato Fuerte"
        foodName="Pabellon Criollo"
        bg="darkgreen"
        emoji="🍲"
        description="Muchas cosas juntas"
      />

      <FoodCard 
        foodType="Postre" 
        foodName="Flan" 
        bg="darkred" 
        emoji="🍮"
        description="Dulce tradicional con huevo y leche"
      />
    </section>
  );
}

export default FoodMenu;
