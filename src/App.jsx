import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"
import './App.css'
import Mensaje from "./componentes/Mensaje/Mensaje"

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = {"se vienen cositas"}/>
      <Mensaje/>
    </div>
  )
}

export default App