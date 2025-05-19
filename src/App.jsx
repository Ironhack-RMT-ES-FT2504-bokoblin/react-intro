import Container from "./components/Container"
import FoodMenu from "./components/FoodMenu"
import Header from "./components/Header"

import ReactPlayer from 'react-player'

function App() {

  return (
    <div id="mi-app">
      
      {/* <Header /> */}

      {/* <FoodMenu /> */}

      <Container color={"blue"} text={"Cualquier cosa"}>
        <p>Nombre: Bob</p>
        <p>Edad: 30</p>
      </Container>

      <Container color={"red"} text={"Patata"}>
        <p>Nombre: Patricio</p>
        <p>Edad: 20</p>
      </Container>

      <Container color={"purple"} text={"Tomate"}>
        <h4>Lista de series</h4>
        <ul>
          <li>avatar</li>
          <li>office</li>
          <li>friends</li>
        </ul>
      </Container>

      <Container color={"orange"} text={"Aguacate"}>
        <Header />
      </Container>

      <ReactPlayer url='https://youtu.be/dQw4w9WgXcQ' controls={true} volume={0.1}/>

    </div>
  )
}

export default App
